---
title: Laravel Valet Driver For AbanteCart
author: Dorell James
type: post
date: 2016-11-25T04:22:49+00:00
url: /web-development/laravel-valet-driver-for-abantecart/
featured_image: "./valet-driver-abantecart.png"
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

So today I've stumbled myself working with <a href="http://www.abantecart.com/" target="_blank">AbanteCart</a> on my dev machine running El Capitan OS X. I've been using <a href="https://github.com/laravel/valet" target="_blank">Laravel Valet</a> since it was initially released due to how it made things so easy on my end. If you're working on a WordPress site and other PHP-based apps, I encourage you to check it out and spend a good 20 minutes to get it up and running. I promise, it'll make your lives easier as a developer. <span class="wp-font-emots-emo-happy"></span>

But hey, let's go back. I got halted by the fact that I need to run AbanteCart &#8211; an opensource eCommerce platform that's really promising as well. Anyhow, let's cut the chase, valet doesn't support AbanteCart out of the box and I was left with no choice but to make things work.

Fast forward minutes later, I have finally created a custom driver for AbanteCart and if you're on the same boat like me, you can use my work below to save time and don't bother yourself tinkering and tinkering and end up worst wasting your time.

Here's <a href="https://gist.github.com/dorelljames/2325b191dd050c67a105bd7235befd99" target="_blank">a link to the gist that you can grab at GitHub</a>. <span class="wp-font-emots-emo-happy"></span>

Alternatively, without going to link above, just copy and paste code below:

```php
<?php

class AbanteCartValetDriver extends ValetDriver
{
    /**
     * Determine if the driver serves the request.
     *
     * @param  string  $sitePath
     * @param  string  $siteName
     * @param  string  $uri
     * @return void
     */
    public function serves($sitePath, $siteName, $uri)
    {
        if (file_exists($sitePath.'/public_html/index.php')) {
            return true;
        }

        return false;
    }

    /**
     * Determine if the incoming request is for a static file.
     *
     * @param  string  $sitePath
     * @param  string  $siteName
     * @param  string  $uri
     * @return string|false
     */
    public function isStaticFile($sitePath, $siteName, $uri)
    {
        if (file_exists($staticFilePath = $sitePath.'/public_html/'.$uri)) {
            return $staticFilePath;
        }
        if (file_exists($staticFilePath = $sitePath.'/public_html/install/'.$uri)) {
            return $staticFilePath;
        }

        return false;
    }

    /**
     * Get the fully resolved path to the application's front controller.
     *
     * @param  string  $sitePath
     * @param  string  $siteName
     * @param  string  $uri
     * @return string
     */
    public function frontControllerPath($sitePath, $siteName, $uri)
    {
        $_SERVER['PHP_SELF'] = $uri;
        if ($uri == '/')
            return $sitePath.'/public_html/index.php';

        return strpos($uri, '.php') ? $sitePath.'/public_html/'.$uri : $sitePath.'/public_html/'.$uri.'.php';
    }
}
```

And oh before I forgot, just save this file to **`~/.valet/Drivers`** in your machine.

Enjoy, hope that helps!
