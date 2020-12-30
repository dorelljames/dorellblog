---
title: GROQ - a GraphQL alternative?
author: Dorell James
type: post
date: 2020-12-30T07:26:59.437Z
categories:
  - Web Development
url: /groq-a-graphql-alternative
tags:
---

Here below is a sample GraphQL query.

```graphql
{
  users {
    id
    email
  }
}
```

The query above specifies that we want to retrieve all the users in our system and return only the `id` and the `email`.

Great! 😎

Now, here is also a query. See below:

```json
[users] { id, email }
```

Or we could also write it this way,

```json
*[] {
  id,
  email
}

```

Alright. Awesome. We call the above as [Graph-Relational Object Queries](https://www.sanity.io/docs/groq) or GROQ for short but what exactly is it?

## Before We Dive In

I made a quick demo so we could see it in action. The video is 5 minutes only. If you want to skip the video and read through it, <a href="#getting-started">click here</a>.

<div style="position: relative; padding-bottom: 55.04587155963303%; height: 0;"><iframe src="https://www.loom.com/embed/53581656dba94c0a9990352374a3405a" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
<br />

> Oooops! Didn't managed to finish my demo there. 😅

So for the last example, we want to get only results `id`, `name` and `base` stats. The query would be like this below:

```json
*[ id == 4 ] {
  id,
  "name": name.english,
  base,
}
```

And here's the result:

```json
[
  {
    "id": 4,
    "name": "Charmander",
    "base": {
      "HP": 39,
      "Attack": 52,
      "Defense": 43,
      "Sp. Attack": 60,
      "Sp. Defense": 50,
      "Speed": 65
    }
  }
]
```

<h2 id="getting-started">Getting Started</h2>

In today's modern web, [GraphQL](https://graphql.org/) has pretty much changed how we approach fetching data. For so long, we've gone accustomed to thinking in terms of [endpoints](https://searchapparchitecture.techtarget.com/definition/API-endpoint). [REST API](https://en.wikipedia.org/wiki/Representational_state_transfer) had become the de-facto standard until the former came. One can't simply ignore the benefits of using it but unfortunately, not everyone has the capacity to begin adopting it and/or start new.

> NOTE: GraphQL is not a replacement for REST API.

So now, the question is - "**_Is there a way that we could gain GraphQL's declarative and expressive syntax without doing much work on our good old responses in JSON format?_**"

Well, the answer to that is, **YES!**

**Absolutely.**

## [Graph-Relational Object Queries (GROQ)](https://www.sanity.io/docs/groq)

GraphQL is a query language for API's and **GROQ** is also a query language but JSON-based. It carries on the work that has become so fashionable similar to the implementations of GraphQL which allows robust transformations, filters, projections, and many more.

In simpler terms, GROQ just like GraphQL allows us to describe exactly how we want to shape our data through filters, projections, and many more.

What's great with GROQ is that it also takes it a step further...

Let's go back to our example query above, here shown below:

```json
*[] { id, email }
```

If you're new, you'd probably reject what you're seeing. When I first started using GROQ, I have this feeling that it's not something I shouldn't get myself into and learn. I was wrong, and I realized how it could be useful in other areas of my professional career as a developer.

`*` denotes everything, within the `[]` is our filter (_though not required here but for the sake of example_) and lastly, the `{ id, email }` is our transformation which only returns those fields.

It's not that easy from the very beginning but just like any other thing we try to learn, it gets easier through practice.

## Let's Play

Here below are basic to advanced usages of GROQ with its corresponding GraphQL equivalent. The data is based on Pokemon's API.

1. **Find all Pokemon of Grass-type together with their stats**

```json
*["Grass" in type] {
  "name": name.english,
  base,
}
```

Play with it here: [https://groq.dev/OdzfsmdQ8fobJP8j567UdH](https://groq.dev/OdzfsmdQ8fobJP8j567UdH)

And the GraphQL equivalent below:

```graphql
{
  pokemons(filter: {type: {in: "Grass"}}) {
    name: name.english
    base {
      HP
      Attack,
      Defense
      "Sp. Attack"
      "Sp. Defense"
      Speed
    }
  }
}
```

2. **Find all Pokemon of Grass-type together with their stats and order results by their speed in descending order.**

```json
*["Grass" in type] {
  "name": name.english,
  base,
} | order(base.Speed desc)
```

Play with it here: [https://groq.dev/nyUE9QKQbTB8vVGYKOrAbk](https://groq.dev/nyUE9QKQbTB8vVGYKOrAbk)

And the GraphQL equivalent below:

```grapqhl
{
  pokemons(sort: {fields: base__Speed, order: DESC}, filter: {type: {in: "Grass"}}) {
    name: name.english
    base {
      HP
      Attack,
      Defense
      "Sp. Attack"
      "Sp. Defense"
      Speed
    }
  }
}
```

3. **Find the total count of Pokemon of type Grass-type.**

```json
{
  "GrassPokemonsCount": count(*["Grass" in type])
}
```

Result:

```json
{
  "GrassPokemonsCount": 97
}
```

Play with it here: [https://groq.dev/nTm9ARCLuYmDlpLIMTXlIr](https://groq.dev/nTm9ARCLuYmDlpLIMTXlIr)

## Why GraphQL alternative? (Real Life Usage)

In our experience, using GROQ with our REST APIs has allowed us to take its superpowers like filtering, sorting, and shaping our JSON response data however we want it. It has brought tremendous benefits and it never felt so easy. From an investment standpoint, sure, you'll have to learn GROQ's syntax additionally but the benefits are just tenfolds.

For example in one of our eCommerce projects, we fetch the JSON data and used GROQ to do multi-level filtering based on customers' selection.

_It's such a breeze of joy._

Let's say, given all shoes, get all of the color **blue** and the size is **greater than 12**.

Pretty contrived example below:

```js
import { parse, evaluate } from 'groq-js'

let input = *[type == "shoes" && color == "blue" && size > 12] {
  id,
  name,
  description,
  price,
  images,
}

// Returns an ESTree-inspired syntax tree
let tree = parse(input)

let dataset = await fetch(PRODUCTS_API_ENDPOINT);

// Evaluate a tree against a dataset
let value = await evaluate(tree, {dataset})

// Gather everything into one JavaScript object
let shoeProducts = await value.get()
```

> [GROQ-JS](https://github.com/sanity-io/groq-js) is a (work-in-progress) JavaScript implementation of GROQ which follows the official specification.

And that's it! No need for GraphQL. We've supercharged our REST API without doing too much. 😊

To learn more about GROQ, head over to [Sanity.io introduction](https://www.sanity.io/docs/how-queries-work), and refer to [this cheat sheet](https://www.sanity.io/docs/query-cheat-sheet) anytime. I've also found some challenges you could try [like this one here](https://dev.to/mornir/7-challenges-for-querying-with-groq-3p0p).

### Additional Resources:

- [Query JSON documents in the Terminal with GROQ](https://css-tricks.com/query-json-documents-in-the-terminal-with-groq/)
- [GROQ Playground](https://groq.dev/)
- [GROQ Specification](https://sanity-io.github.io/GROQ/)
