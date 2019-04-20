---
title: Laravel Valet Increase Max Upload File Size
author: Dorell James Galang
type: post
date: 2019-02-16T13:52:54+00:00
url: /web-development/laravel-valet-increase-max-upload-file-size/
thb_meta_bigfoot_pageheader_layout:
  - left
thb_meta_bigfoot_pageheader_height:
  - pageheader-big
thb_meta_bigfoot_sidebar_position:
  - sidebar-right
enclosure:
  - |
    |
        http://dorellwp.localhost/wp-content/uploads/2019/02/ac28002d3abd42d98e7bed2f3dae74ae.mp4
        34354035
        video/mp4

categories:
  - Web Development
tags:
  - laravel
  - laravel valet
---

Are you using Laravel Valet? I do and I love it for its simplicity, its magic and the fact that it just works. Alright, cool! But actually one day I hit a wall because I need to upload almost a gig&#8217;s zip file and for most machines, yours probably included, chances are your file upload limit is up to 128mb. I&#8217;ve spent countless hours on this one and I thought I&#8217;d write this article to help you out in case you bump into this problem as well.

So here goes&#8230;

There are basically two things that we need to do:

1. Update your PHP configuration file settings (php.ini). Change *memory_limit*, *upload_max_filesize* and lastly *post_max_size* according to your need.
2. Update Nginx&#8217;s server config file settings (nginx.conf). Change *client_max_body_size accordingly as well.*

Sounds easy, right? Here&#8217;s a raw video I created.

<div style="width: 1400px;" class="wp-video">
  <!--[if lt IE 9]><![endif]--><video class="wp-video-shortcode" id="video-2001-1" width="1400" height="875" preload="metadata" controls="controls"><source type="video/mp4" src="http://dorellwp.localhost/wp-content/uploads/2019/02/ac28002d3abd42d98e7bed2f3dae74ae.mp4?_=1" />
  
  <a href="http://dorellwp.localhost/wp-content/uploads/2019/02/ac28002d3abd42d98e7bed2f3dae74ae.mp4">http://dorellwp.localhost/wp-content/uploads/2019/02/ac28002d3abd42d98e7bed2f3dae74ae.mp4</a></video>
</div>
