---
title: Conditional fields in Array of type Object - Sanity.io
author: Dorell James
type: post
date: 2021-09-21T17:23:08.605Z
categories:
  - Web Development
url: /conditional-fields-in-array-of-type-object-sanity-io
featured_image: "./conditial-fields-of-object-type-in-array.png"
description: Here's how you can work with conditional fields in array of type object - Sanity.io.
tags:
  - sanity.io conditional fields
  - array of type object
---

ICYMI. [Sanity.io released conditional fields](https://www.sanity.io/docs/conditional-fields) and yay, it basically allows us to hide a given field depending on the values of other fields in our document. Cool, neat, awesome, you name it but I'd say finally! Yes!!!

Let's take a look at an example below at how we can conditionally hide a field of an object in the a given list of array:

```javascript
// organization document schema
{
  name: "organization",
  title: "Organization",
  type: "document",
  fields: [
    ...,
    {
      title: "Members",
      description: "Manage users of a given org here...",
      name: "members",
      type: "array",
      of: [{ type: "organizationMember" }],
    }
  ]
}
```

So we have here an **organization** document above with `members` belonging to that organization via `organizationMember` object schema.

Now, our `organizationMember` as specified below:

```javascript
// organizationMember object schema
{
  name: "organizationMember",
  title: "Organization Member",
  type: "object",
  fields: [
    ...,
    // highlight-start
    {
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Invited", value: "invited" },
          { title: "Accepted", value: "accepted" },
        ],
      },
      defaultValue: "invited",
    },
    // highlight-end
    {
      name: "dateInvited",
      title: "Date Invited",
      type: "datetime",
    },
    // highlight-start
    {
      name: "dateAccepted",
      title: "Date Accepted",
      type: "datetime",
    },
    // highlight-end
  ]
}
```

Notice we highlighted `dateAccepted` above. That's because we only want that given field to show only when the `status` has changed to `accepted`.

---

## So what's the problem?

The solution might come pretty simple but getting the object of whatever we're currently viewing or editing becomes tricky (_or maybe not or at least for me_ 😅).

We'll ask ourselves, how are we gonna make sure we're selecting the appropriate object at a given time? Or how do I get hold of the current index of the object? If you've come across this problem, read on the solution below.

---

## The Solution

The first thing we need to do is to get hold of the current `organizationMember` object we're currently working. Correct? Whether that's the first index, or 2nd or whatever, we must grab it.

So, we'll have to make use of entire `document` value and the current `value` from the [callback properties provided by Sanity.io for us](https://www.sanity.io/docs/conditional-fields#1e047d31a599) and from there, we can look at our `members` array in our `document` and find the current field's value that matches.

```javascript
{
  name: "dateAccepted",
  title: "Date Accepted",
  type: "datetime",
  // highlight-start
  hidden: ({ document, value }) => {
    // Grabs the current object we're editing based on
    // the current value of the field
    const member = document.members.find(
      (member) => member.dateAccepted === value
    );

    console.log(member)
  },
  // highlight-end
},
```

So now, we've got access to the appropriate object and the output of `console.log(member)` statement as for example is:

```javascript
// member 1
{
  "_key": "6cb0dfb4a06d",
  "_type": "organizationMember",
  "status": "invited",
},
```

and it could change depending on the member on the list that you're currently viewing/editing.

```javascript
// member 2
{
  "_key": "19fc3ebbe252",
  "_type": "organizationMember",
  "status": "invited",
},
```

so on, and so forth.

Now, what's left is we'll just have to check the `status` key and depending on its value, we'll be able to show our `dateAccepted` field when it's set to `accepted`.

And so to wrap things up!

```javascript
{
  name: "dateAccepted",
  title: "Date Accepted",
  type: "datetime",
  // highlight-start
  hidden: ({ document, value }) => {
    // Grabs the current object we're editing based on
    // the current value of the field
    const member = document.members.find(
      (member) => member.dateAccepted === value
    );

    return member?.status !== "accepted";
  },
  // highlight-end
},
```

Voila! 💪😊

---

## What now?

This example is pretty use case edge and in my opinion, it pays well to get a deeper understanding from the official documentation at the Sanity.io's website guide so I advise that you [go and check it out](https://www.sanity.io/docs/conditional-fields). Thank you! I hope this post helps...
