---
title: Dynamic GROQ Query in JavaScript
author: Dorell James
type: post
date: 2021-01-14T02:35:44.364Z
description: As we get to used GROQ more and more, it's inevitable when we get to situations when we need to construct queries dynamically. Here's how you make dynamic GROQ query in JavaScript.
categories:
  - Web Development
url: /dynamic-groq-query-in-javascript
featured_image: "./dynamic-groq-query-in-javascript-banner.png"
tags:
---

As we use Sanity.io's GROQ more and more, we'll soon get yourselves into situations where we will have to construct our queries dynamically. A very good example of that is say, we're working on getting all products based on different attributes.

Imagine we have the following product filters below and their options:

```bash
color = ["Blue", "Red", "Orange", "Green"]
size = ["Small", "Medium", "Large"]
gender = ["Male", "Female"]
```

Now, the user first then filters the products by selecting a `color` attribute of value `Red`.

We could then write our query like this below:

```bash
*[color == "Red"]
```

But let's say, now our user also selects a `size` of value `Small`, and so now, it looks like this:

```bash
*[color == "Red" && size == "Small"]
```

And once more, the user selects a `gender` of value `Female`, so finally looking like this. Whoops...

```bash
*[color == "Red" && size == "Small" && gender == "Female"]
```

In situations like this, we'll need to write our GROQ query dynamically, that's because only then we can formulate it when the user has done a selection. What's more, is that the values `Red`, `Small`, and `Female` are dynamic too. So basically, we have two things to do:

1. Construct our query properly based on selected product filters
2. Substitute the values in

In JavaScript, we could use [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) to take care of the second task like this below:

```javascript
const { color, size, gender } = selection // { color: "Red", size: "Small", gender: "Female" }
const query = `*[color == "${color}" && size == "${size}" && gender == "${gender}"]`

console.log(query) // *[color == "Red" && size == "Small" && gender == "Female"]
```

But if we use the code above when the user has filtered the products by `color` only then we'll get an incorrect GROQ query, sometimes malformed:

```bash
*[color == "Red" && size == "" && gender == ""]
```

Not good! 😔

One last thing before we go all out! The above example is pretty contrived, GROQ queries aren't just as simple as that. It can get more complicated especially when we're working with all different shapes of data. In some challenging datasets, there are times that we'll do one or many forms of projections, joins, filters, orders, pipes, and so many more.

There are tons of possibilities really and as another example, here below we added some projections to pick specific fields we want to get:

```bash
*[color == "Red" && size == "Small" && gender == "Female"] {
  name,
  description,
  price,
  categoryType->{name}
}
```

We'll get back to that later. But for now, the real question is:

> How can we create a dynamic GROQ query that will be able to handle any complexity and flexible enough?

If you haven't had the chance to learn [GROQ](https://www.sanity.io/docs/groq), you might be interested in [learning the basics here](https://www.sanity.io/docs/how-queries-work) and/or probably check out why I could think [GROQ as a GraphQL alternative here](https://dorelljames.medium.com/groq-a-graphql-alternative-9291edada5d7).

## Basic Dynamic GROQ Query

For a start, we can use template literals to do some string interpolation.

```javascript
const { color, size, gender } = selection // { color: "Red", size: "Small", gender: "Female" }
const query = `*[color == "${color}" && size == "${size}" && gender == "${gender}"]`
```

This will give us exactly what we're looking for and the value of our query will be:

```javascript
*[color == "Red" && size == "Small" && gender == "Female"]
```

To take this a step further, instead of writing the filters by ourselves, we can use the [Array.reduce function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) on our object to construct it dynamically.

```javascript
const { color, size, gender } = selection // { color: "Red", size: "Small", gender: "Female" }

const filters = Object.entries(selection)
  .reduce((result, entry) => {
    const [key, value] = entry
    return [...result, `${key} == "${value}"`]
  }, [])
  .join(" && ")

const query = `*[ ${filters} ]`
```

Awesome. Now we're unto something…

But can we take this a step further? Remember, GROQ queries can get more complicated.

Back from our previous example:

```bash
*[color == "Red" && size == "Small" && gender == "Female"] {
  name,
  description,
  price,
  categoryType->{name}
}
```

If we digest this out, we'll most probably come with this structure:

```javascript
const query = `*[ ${filters} ] {
  ${projections}
}`
```

And so, we could create `projections` too to take care of that. Nice!

```javascript
const projections = [
  "name",
  "description",
  "price",
  "categoryType->{name}",
].join(", ")
```

Now, what if we the user has decided to order the results by `price`? And our query looks like this now below.

```bash
*[color == "Red" && size == "Small" && gender == "Female"] {
  name,
  description,
  price,
  categoryType->{name}
} | order(price.amount desc) // highlight-line
```

Well, we can create `order` you'd say, just like below:

```javascript
const order = `order(${sortKey}, ${sortDirection})`
```

And so, altogether, it'll be like this:

```javascript
const { color, size, gender } = selection // { color: "Red", size: "Small", gender: "Female" }
const { sortKey, sortDirection } = sorting // { sortKey: "price.amount", sortDirection: "desc" }

const filters = Object.entries(selection)
  .reduce((result, entry) => {
    const [key, value] = entry
    return [...result, `${key} == "${value}"`]
  }, [])
  .join(" && ")

const projections = [
  "name",
  "description",
  "price",
  "categoryType->{name}",
].join(", ")

const order = sorting ? `| order(${sortKey}, ${sortDirection})` : ""

const query = `*[ ${filters} ] {
  ${projections}
} ${$order}`
```

Sounds like we've made some progress but we can do more. Yes! See below.

## Using Tagged Templates for Dynamic GROQ Query

A more advanced form of _template literals_ is [tagged templates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates). This allows us to better compose our query and supply the values later on instead of providing them ahead.

```javascript
const selection // { color: "Red", size: "Small", gender: "Female" }
const sorting // { sortKey: "price.amount", sortDirection: "desc" }

// tagged template function
function groq(strings, ...keys) {
  return function (...values) {
    let dict = values[values.length - 1] || {}
    let result = [strings[0]]
    keys.forEach(function (key, i) {
      let value = Number.isInteger(key) ? values[key] : dict[key]
      result.push(value, strings[i + 1])
    })
    return result.join("")
  }
}

// Let's build our function to make the query for us
const makeQuery = groq`*[ ${"filters"} ] {
  ${"projections"}
} ${"order"}`

// You can use this anywhere and provide values however you want to
const query = makeQuery({
  filters: Object.entries(selection)
    .reduce((result, entry) => {
      const [key, value] = entry
      return [...result, `${key} == "${value}"`]
    }, [])
    .join(" && "),
  projections: ["name", "description", "price", "categoryType->{name}"].join(
    ", "
  ),
  order: (() => {
    if (!sorting) return ""
    const { sortKey, sortDirection } = sorting
    return `| ${sortKey} ${sortDirection}`
  })(),
})
```

For the sake of example, I created a `groq` tagged template function above but I think you're probably better of using [minify-groq](http://minify-groq) created by [Espen Hovlandsdal of Sanity.io's Principal Engineer](https://www.sanity.io/community/people/rexxars). Check it out!

## What's Next?

As I explored this area, there are packages you can use to simplify this task for you. Just take note though that it may not cover all use cases you might have. I'll list them out in the [Resources](#resources) below. I personally just make use template literals or tagged templates and/or a combination of both.

So here you go on how to build a dynamic GROQ query in javascript and some examples.

What do you think? I'd like to hear your opinion.

<h2 id="resources">Resources</h2>

- [GROQ tagged template literal](https://www.npmjs.com/package/groq) - Used to signal that it represents a GRQO-query. The result will be the exact same string as the input - this is currently helpful for getting syntax highlighting in editors, but in the future it might also parse and validate queries, strip unncessary whitespace and similar.
- [minify-groq](https://www.npmjs.com/package/minify-groq) - Minifies a GROQ-query by reducing unnecessary whitespace and supports placeholder(s) just like in my example above. I would personally say that you use this.
- [How Queries Work - GROQ](https://www.sanity.io/docs/how-queries-work) - A tutorial on using the Sanity query language GROQ. This will give you an idea how GROQ works.
- [sanity-typed-queries](https://www.npmjs.com/package/sanity-typed-queries) - More than just a query builder but also a schema generator that is fully-typed and works in JavaScript and TypeScript.
- [sanity-query-helper](https://www.npmjs.com/package/sanity-query-helper) - provides an API which might be easier to understand to build queries.
