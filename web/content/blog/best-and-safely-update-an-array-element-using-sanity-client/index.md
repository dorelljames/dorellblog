---
title: Best and safely update an Array element using @sanity/client - Sanity.io
author: Dorell James
type: post
date: 2022-09-02T02:17:18.718Z
categories:
  - Web Development
url: /best-and-safely-update-an-array-element-using-sanity-client
featured_image: "./best-and-safely-update-an-array-element-using-sanity-client.png"
description: Here's how you can safely update an Array element of a given field in a Sanity document - Sanity.io
tags:
  - sanity.io update array element
  - array of type object
---

This one's a quick post that I thought I'd share that might be useful to our awesome devs out there working with Sanity. This came out after spending some time working on [WebriQ Studio](https://www.webriq.com/w-studio)'s multi-user feature.

> TLDR: Go to Solution #3 and take it from there. We can safely update an array element of a given field by patching via GROQ query and making use of its `_id` and `_rev` values. We're going to use Sanity client's `insert` function and `replace` as its argument value instead of probably mapping out all members and updating only the element we want and do a `set` as a probable solution, etc.

So just a quick recap in Sanity client's documentation, you can add elements to an array like this (meaning it goes at the bottom of the list):

```js
client
  .patch("organization-doc-id")
  // Ensure that the `members` arrays exists before attempting to add items to it
  .setIfMissing({ members: [] })
  // Add the items after the last item in the array (append)
  .insert("after", "members[-1]", [
    { name: "John", status: "invited", dateInvited: Date.now() },
  ])
  .commit({
    // Adds a `_key` attribute to array items, unique within the array, to
    // ensure it can be addressed uniquely in a real-time collaboration context
    autoGenerateArrayKeys: true,
  })
```

and also prepend like this (meaning it goes at at the top of the list):

```js
client
  .patch("organization-doc-id")
  .setIfMissing({ members: [] })
  // Add the items after the last item in the array (append)
  .prepend("reviews", [
    { name: "John", status: "invited", dateInvited: Date.now() },
  ])
  .commit({ autoGenerateArrayKeys: true })
```

Awesome! <Emoji symbol="😎" label="cool" />

## Problem: What if we want to update an element in a given Array?

Say for example, I have 3 members in my `organization` document.

```json
{
  "_id": "organization-doc-id",
  "_rev": "revision-1",
  "_type": "organization",
  "name": "Dummy Org",
  "members": [
    // highlight-start
    {
      "_id": "1",
      "name": "John",
      "status": "accepted",
      "dateInvited": "2020-01-02T00:00:00.000Z",
      "dateAccepted": "2020-01-05T00:00:00.000Z"
    },
    {
      "_id": "2",
      "name": "Mary",
      "status": "invited",
      "dateInvited": "2020-01-02T00:00:00.000Z"
    },
    {
      "_id": "3",
      "name": "Borg",
      "status": "accepted",
      "dateInvited": "2020-01-02T00:00:00.000Z",
      "dateAccepted": "2020-01-05T00:00:00.000Z"
    }
    // highlight-end
  ]
}
```

and we want to update `Mary`'s status to `accepted` and add `dateAccepted` value to current date.

### Solution 1: Mapping all elements and set

Sure, easy! You could do something like this, right?

```js
// Assuming we have the above document data in `organizationDoc`
// NOTE: it's better to use "_id" field for it's uniqueness but for the sake of this example, we're opting to use the `name` intentionally
// highlight-start
const updatedMembers = organizationDoc.members.map((member) => {
  if (member.name === "Mary") {
    return {
      ...member,
      status: "accepted",
      dateAccepted: new Date(),
    }
  }
  return member
})
// highlight-end

// So then we can be happy
client
  .patch("organization-doc-id")
  // Add the items after the last item in the array (append)
  // highlight-start
  .set(members)
  // highlight-end
  .commit()
```

This might do but it's probably not the best way of doing this.

What if we accidentally end up with an empty array of `members`.

Imagine!

## Solution 2 _(better)_: - Only update the given array element and only that

Here's how you can use `client.insert` function and `replace` argument value to do just that:

```js
// Let's grab our member's position(index) in array
const memberIndex = organizationDoc.members.findIndex(
  (member) => member.name === "Mary"
) // 1

// Let's get the member we're about to update
const member = organizationDoc.members[memberIndex]
// {
//   "_id": "2",
//   "name": "Mary",
//   "status": "invited",
//   "dateInvited": "2020-01-02T00:00:00.000Z"
// }

// Now, we can just update the element specifically and not the whole `members` field
client
  .patch("organization-doc-id")
  // highlight-start
  // We're using `replace` here and our `memberIndex` to specifically target the element and replace it instead of adding
  .insert("replace", `members[${memberIndex}]`, [
    { ...member, status: "accepted", dateAccepted: new Date() },
  ])
  // highlight-end
  .commit()
```

Now we're making progress, we can't accidentally wipe out the `members` array data but there's just one more problem. Guess what that is?

We'll, someone could update the document and `members` specifically before us. Depending on time order, it could happen. Let's say you grabbed the `organization` data from your app on 10:00 AM and someone was working at that time as well in the Sanity studio addin/updating members in and/or some other users from your app quickly managed to also pushed a new member or update. Let's just say these all happened before 10:05 AM and now by the time we're going to update, given the current time, our document is pretty outdated. Don't you think?

## Solution 3 (best): Only update the given array element and only that at certain revision

Sanity offer revision markers as part its [History API](https://www.sanity.io/docs/history-api) marked with the `_rev` key. This key is unique in every point in time meaning by the time we grabbed the `organization` document, it'll have a `_rev` key that is different from that time when it was updated (older) or its last update (most recent).

With that, we should do the following:

```js
// Given same setup above in Solution 2, we can safely guard updates
client
  // highlight-start
  // Notice we now pass a GROQ query to conditionally to make sure we're updating the current org ID and of specific _rev value
  .patch({
    query: groq`*[_id == "organization-doc-id" && _rev == "revision-1"]`,
  })
  // highlight-end
  .insert("replace", `members[${memberIndex}]`, [
    { ...member, status: "accepted", dateAccepted: new Date() },
  ])
  .commit()
```

After that patch, our document has been updated to another `_rev` update after the patch operation above.

NOTE: The `_rev` values are sequential and they're just examples.

```js
// NOTE: The `_id` and `_rev` here are example values
{ _id: "organization-doc-id", _rev: "revision-0", members: [] },
{ _id: "organization-doc-id", _rev: "revision-1", members: [{...}, {...}, {...}] },

// Latest version of document after our patch below
{ _id: "organization-doc-id", _rev: "revision-2", members: [{...}, {...}, {...}] },
```

So if we perform the same patch with GROQ query above, it'll not work as the current `_rev` value is now of `revision-2`, meaning our patch query will not work again.

Going back in our scenario above, if we're at `revision-1` and it's not the latest `_rev` value because someone made it and updated before us, it'll not overwrite their work and we can happily sleep well at night knowing we didn't screw up their work anything.

Yay! <Emoji label="happy-face" symbol="😊" />

---

## What do you think?

I thought this might be safer so as not to accidentally remove all `members` in your array in case we accidentally came up with an empty Array of members we're about to update or someone updated before us and we accidentally again overwritten their changes.

Because, you know, it could happen!

Thank you! I hope this post helps...

## References

- [Sanity.io JS Client](https://www.sanity.io/docs/js-client)
- [Sanity.io History API](https://www.sanity.io/docs/history-api)
