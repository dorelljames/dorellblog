---
title: GROQ - a GraphQL alternative?
author: Dorell James
type: post
date: 2020-12-30T07:26:59.437Z
categories:
  - Web Development
url: /groq-a-graphql-alternative
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

Alright. Awesome. We call the above as [Graph-Relational Object Queries](https://www.sanity.io/docs/groq) or GROQ for short.

## Before You Dive In

I made a quick demo so we could see it in action. The video is 5 minutes only…

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/53581656dba94c0a9990352374a3405a" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

<br/>
Didn't managed to finish my demo there. 😅

So for the last example, we want to get only results `id`, `name` and `base` stats. So the GROQ query would be like this below:

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

## Getting Started (Introduction)

In today's modern web, GraphQL has pretty much changed how we approach fetching data. For so long, we've gone accustomed to thinking in terms of [endpoints](https://searchapparchitecture.techtarget.com/definition/API-endpoint). [REST API](https://en.wikipedia.org/wiki/Representational_state_transfer) has long been the de-facto standard until GraphQL came. One can't simply ignore the benefits of using the latter. But not everyone has the capacity to start new or move their old stack to the new one. I should also mention that GraphQL is not a replacement for REST API. Right.

Now, the question is, what do we do about the ones who are still stuck with the good old JSON responses of REST API? Can we get similar benefits of GraphQL to our current ways?

The answer to that is, YES!

Absolutely.

## [Graph-Relational Object Queries (GROQ)](https://www.sanity.io/docs/groq)

GROQ is a JSON-based query language similar to GraphQL. It carries on the work that has become so fashionable similar to the implementations of GraphQL which allows robust transformation, filters, projections of data sets based on a given query. In simpler terms, GROQ just like GraphQL allows us to describe exactly what we want to fetch and how exactly it should be returned to us.

Let's go back to our example query above. Here below:

```json
*[] { id, email }
```

If you're new, you'd probably reject what you're seeing. When I first started using GROQ, I have this feeling that it's not something I shouldn't get myself into and learn but I was wrong, and I realized how it could be useful in other areas.

`*` denotes everything, within the `[]` is our filter (though not required here but for the sake of example) and lastly, the `{ id, email }` is our transformation which only returns those fields.

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

## Real-Life Usage

So where could you apply this? In my experience, we're able to easily transform and get the data on how we want it without having to deal with creating a GraphQL layer for it. One example is I used it to do multi-filtering, such as below in an eCommerce project I'm in.

Given all shoes, get all of the color blue and the size is greater than 12.

```json
*[color == "blue" && size > 12]
```

To learn more about GROQ, head over to [Sanity.io introduction](https://www.sanity.io/docs/how-queries-work), and refer to [this cheat sheet](https://www.sanity.io/docs/query-cheat-sheet) anytime.
I've also found some challenges you could try like this one here.

### Additional Resources:

- [Query JSON documents in the Terminal with GROQ](https://css-tricks.com/query-json-documents-in-the-terminal-with-groq/)
- [GROQ Playground](https://groq.dev/)
- [GROQ Specification](https://sanity-io.github.io/GROQ/)
