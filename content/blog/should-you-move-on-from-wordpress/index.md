---
title: Should You Move On From WordPress?
author: Dorell James Galang
type: post
date: 2019-04-17T02:10:36+00:00
categories:
  - Web Development
tags:
  - jamstack
  - wordpress
  - wordcamp
  - cebu
---

Today I'll be taking you outside of your current shell and these things that I'll be sharing might come new to you but it is my hope that you'll learn something from it. In my past 7 years as WordPress developer, I've had the privilege learn the trade and understand how things worked and helped my clients achieve their business goals. In the last 2 years, I've had the privilege to see what's the world outside and today let me do the honor in sharing to you everything I've learned.

My name is Dorell, and I'm a full stack developer and it's my job to make sure that we provide just the right solution for our customers and clients. Since we're a small company, we're able to quickly adapt to new technologies and trends. I am also responsible for making sure that the company continues to have the best technology offering in a dynamically-evolving highly-competitive space.

So let's begin...

Let me take you back to the time when the internet was born. Back in the 90's the world wide web went live. And then it became the thing we never knew we'd be using in our daily lives today. But did you know that only when the web pages were introduced it became popular and that people started adopting it.

And the first web page looks like this:

// insert web page screenshot here: http://info.cern.ch/hypertext/WWW/TheProject.html

Later on as the internet progressed, the web pages were mostly and purely static - meaning purely plain documents interconnected documents via hyperlinks.

But then it became uneasy to maintain this, and this gave birth to popular content management system's we know today. A big round of applause to. WordPress, and some others like Drupal, Joomla, etc.. :)

This gave birth to the new era of dynamic websites. It then became so easy to manage content, add/edit/delete, you name it and it works. It made things a lot easier, selling, advertising and all those things built in one monolithic system that powers everything. :)

But lately, with the advancement of technology, we've seen something we've never seen before and it seems things are going back to static. You heard static? Yes, I mean "static" and you maybe wondering why.

So okay, static websites are fast, secure, cheap and simple. Fast because static assets are delivered straight to content delivery networks (CDN) as we know it plus the caching it provides is much simpler and robust. Dynamic websites are fetched straight from your hosting (server) and mostly its data comes from a database, then processed and rendered runtime in a webpage. Because there's no really communicating between a database nor processing going but just straight serving static assets, it's secure. Most of the attacks are done in the middle of these operations and how many times we heard of security issue news because of an not so good code or a vulnerability on how the core or a WordPress plugin was made. I don't mean it can't be hacked in any way but with less friction, it's less surface to cover and penetrate on. It's cheap in a sense that you don't need specialized servers to host your webpage as they are purely static files. On the other hand, you'll probably need a nginx or apache server for your WordPress site if you choose dedicated hosting and it sure does come with a price. Did you know that static sites right now can be hosted for free like in GitHub pages, Netlify, AWS S3 and even Google cloud. And now for the last thing, simple. Why? Let's take WordPress as an example. Let's say we just want a landing page and we already have a design in PSD or Sketch. We'll most probably start creating a new theme for this out from the sliced site whose assets are HTML, CSS, JavaScript and some other files. Now, if it's done as static, I don't think I ever need to do an extra step just to make the landing page like creating the theme. Things can be overengineered but also things can be so simple but they both serve the same purpose and of equal value. That's what I'm trying to say here.

So yeah, enough with all those static vs dynamic comparison. Let me take you one step further. Enter play a video of how one company moved their website from WordPress and experienced the benefits static sites are claiming to provide.

// play netlify video

I hope you've had enough information about the new trend of "static" but I don't want to leave them to you as static because in today's development because it's no longer really static as static as it is. Remember this word, "JAMstack", it's JavaScript, API's and Markups.

The JAMstack isn’t a specific set of tools, but a new, modern way of building websites & apps. Where does “J-A-M” come from, you may ask? From these three concepts at the core of this paradigm:

JavaScript: Any dynamic programming during the request/response cycle is handled by JavaScript, running entirely on the client.

APIs: All server-side functions or databases actions are abstracted into reusable APIs, accessed over HTTPS with JS. Be it SaaS, third-party services or custom-built.

Markup: Templated markup should be prebuilt at build time, usually using a site generator for content sites, or a build tool for web apps.

It didn't really took off immediately, there were backslashes about static but it seems their efforts are succeeding as more and more companies are adapting to this new approach.

→ 2015: Static sites are slowly making a comeback from the ruins of the web’s early years. The first CMS-deniers are making them “cool” again.

→ 2016: As you would expect, backlash occurs. Static sites aren’t cool at all—they lack too many features to build anything other than blogs. In the meantime though, a small group of developers is coining the “JAMstack” and slowly promoting its principles in modern dev circles.

→ 2017: The year JAMstack really comes to life, for a somewhat niche community. Static sites aren't “static” anymore. This modern web revolution gives you all the features you need to build “hyper-dynamic” sites & apps. Sequoia Capital, Mailchimp & Red Bull are a few of the first big enterprises to build JAMstack projects.

→ 2018: Here’s a phrase I would bet you’ve heard or read last year: “Just discovered the JAMstack and, oh my God, it's amazing!” Yup, it has made a mainstream breakthrough with more & more people are talking about it. Substantial funding was announced for tools like Gatsby, Netlify, Contentful, etc. It will also be remembered as the year of the first JAMstack_conf (which we’ll make sure not to miss next time).

→ 2019: Hard to tell what the future holds, but it’ll no doubt be exciting. 2019 enters as the year of maturity & accessibility.

It's no longer so static right now and that we can safely say that JAMstack is a hybrid approach. That makes this trend and new era more powerful and it's my prediction that this will continue to evolve in the next coming years but fear not as a WordPress developer, these things don't happen in blink of an eye. What can we probably do right now to get informed and not left behind?

For one and for now, you can use the power of WordPress and static website. There's WP2static plugin created by one of our speakers today that makes it so easy to have a static of your site. Also, WordPress CMS is so powerful, GutenBerg might be the future or not but WordPress API and its plugin system can't be beat that easily especially if you want to provide functionality that's flexible enough and all.

Let me run you through the current state of WordPress and the current state of JAMstack, side by side:

1. Blog - static yes, dynamic yes
2. Ecommerce - static yes but limited, dynamic yes
3. Multisite Management - static no, dynamic yes

So, I'll leave the decision to you everyone who's in here. But I would personally stick with my guns for now. I know my way around and I know my way around WordPress. When things get trickier, I would most probably sure to offer to my clients proven solutions rather than experiment and leave them hanging somewhere with an incomplete solution. Always remember, not everything that shines is gold. Thank you!
