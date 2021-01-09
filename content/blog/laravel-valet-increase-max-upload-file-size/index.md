---
title: Laravel Valet Increase Max Upload File Size
author: Dorell James
type: post
date: 2019-02-16T13:52:54+00:00
url: /web-development/laravel-valet-increase-max-upload-file-size/
categories:
  - Web Development
tags:
  - laravel
  - laravel valet
---

Are you using Laravel Valet? I do and I love it for its simplicity, its magic and the fact that it just works. Alright, cool! But actually one day I hit a wall because I need to upload almost a gig's zip file and for most machines (yours probably included), chances are your file upload limit is up to 128mb. I've spent countless hours on this one and I thought I'd write this article to help you out in case you bump into this problem as well.

So here goes...

There are basically two things that we need to do:

1. Update your PHP configuration file settings `php.ini`. Change `memory_limit`, `upload_max_filesize` and lastly `post_max_size` according to your need.
2. Update Nginx's server config file settings `nginx.conf`. Change `client_max_body_size` accordingly as well.

Sounds easy, right? Here's a raw video walkthrough I created as guide. It might different from your setup but I hope you guys get the idea.

<iframe width="560" height="315" src="https://www.youtube.com/embed/P0tmGl9v3NE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
