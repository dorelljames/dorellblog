---
title: Adding Google Authorship Into Your WordPress Site
author: Dorell James
type: post
date: 2013-09-11T05:33:29+00:00
url: /web-development/adding-google-authorship-into-your-wordpress-site/
featured_image: /wp-content/uploads/2013/09/google_authorship.png
categories:
  - Search Engine Optimization
  - Web Development
tags:
  - google
  - google authorship
  - seo
  - wordpress
---

Based from Craig Fifield's article on <a href="http://www.craigfifield.com/google-authorship-wordpress.htm" target="_blank" rel="nofollow">How-To Add Google Authorship To WordPress Correctly</a> I was able to put a better way (hopefully) of doing the said thing.

The catch here is not to waste your time downloading plugins for you to easily integrate the <a href="http://www.google.com/insidesearch/features/authorship/" target="_blank">Google Authorship</a> recently from Google.

Here's how you do it in as easy as 1, 2, 3&#8230;

1.) Open your theme's **functions.php** file. If you're using a child theme, use that one (_definitely better_).

2.) Add the following code below:

```php
// Google Authorship Integration
if (!function_exists('google_authorship')) {
  function google_authorship()
  {
    if (is_single() || is_page()) {
      echo '<link rel="author" href="YOUR-GOOGLE-PLUS-PROFILE-LINK" />';
    }
  }
}
add_action('wp_head', 'google_authorship');
```

3.) Replace &#8220;**YOUR-GOOGLE-PLUS-PROFILE-LINK**&#8221; with your <a href="https://plus.google.com/me" target="_blank">Google+ profile</a>. Save/Upload it and test using <a href="http://www.google.com/webmasters/tools/richsnippets" target="_blank"><strong>Webmaster Structured Data Testing Tool</strong></a>

_Edit: Added safeguard to function and some minor corrections._
