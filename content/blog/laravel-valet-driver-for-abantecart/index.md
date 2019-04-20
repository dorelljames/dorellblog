---
title: Laravel Valet Driver For AbanteCart
author: Dorell James Galang
type: post
date: 2016-11-25T04:22:49+00:00
url: /web-development/laravel-valet-driver-for-abantecart/
featured_image: /wp-content/uploads/2016/11/valet-driver-abantecart.png
thb_meta_bigfoot_pageheader_layout:
  - left
thb_meta_bigfoot_pageheader_height:
  - pageheader-big
thb_meta_bigfoot_background_color:
  - "#1e73be"
thb_meta_bigfoot_background_opacity:
  - .60
thb_meta_bigfoot_sidebar_position:
  - sidebar-right
ampforwp-amp-on-off:
  - default
categories:
  - Web Development
tags:
  - abantecart
  - abantecart laravel valet
  - laravel valet
  - valet driver
---

So today I&#8217;ve stumbled myself working with <a href="http://www.abantecart.com/" target="_blank">AbanteCart</a> on my dev machine running El Capitan OS X. I&#8217;ve been using <a href="https://github.com/laravel/valet" target="_blank">Laravel Valet</a> since it was initially released due to how it made things so easy on my end. If you&#8217;re working on a WordPress site and other PHP-based apps, I encourage you to check it out and spend a good 20 minutes to get it up and running. I promise, it&#8217;ll make your lives easier as a developer. <span class="wp-font-emots-emo-happy"></span>

But hey, let&#8217;s go back. I got halted by the fact that I need to run AbanteCart &#8211; an opensource eCommerce platform that&#8217;s really promising as well. Anyhow, let&#8217;s cut the chase, valet doesn&#8217;t support AbanteCart out of the box and I was left with no choice but to make things work.

Fast forward minutes later, I have finally created a custom driver for AbanteCart and if you&#8217;re on the same boat like me, you can use my work below to save time and don&#8217;t bother yourself tinkering and tinkering and end up worst wasting your time.

Here&#8217;s <a href="https://gist.github.com/dorelljames/2325b191dd050c67a105bd7235befd99" target="_blank">a link to the gist that you can grab at GitHub</a>. <span class="wp-font-emots-emo-happy"></span>

And oh before I forgot, just save this file to **~/.valet/Drivers** in your machine.

Enjoy, hope that helps!
