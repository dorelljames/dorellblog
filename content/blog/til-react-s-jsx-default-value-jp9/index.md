---
title: "#TIL: React's JSX Default Value"
published: true
type: post
date: 2020-02-14T02:42:35.325Z
categories:
  - Web Development
description:
---

Today I learned about React JSX's default value.

Consider the `Button` component below:

```jsx
import React from 'react';
import Loader from '../Loader';

function Button ({  loading }) {
 return <button>{ loading ? <Loader /> : 'Click me!'}<button/>
}
```

A huge aha moment moments ago! When you supply `props` without a `value`, it will default to `true`.

So in a nutshell, these two JSX expressions below are equivalent:

```jsx
<Button loading={true} />

<Button loading />
```

And so, if you use make use of JavaScript coercion nature. These two JSX expressions are also equivalent.

```
<Button loading={false}/>

<Button />
```

Plus tip! If you have type-checking in your React project, this could help.

```
type TButtonProps = {
 loading?: Boolean
}

// So if you do this the type checking won't complain
<Button />
```
