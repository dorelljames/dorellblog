---
title: Adding Google Authorship Into Your WordPress Site
author: Dorell James Galang
type: post
date: 2013-09-11T05:33:29+00:00
url: /web-development/adding-google-authorship-into-your-wordpress-site/
featured_image: /wp-content/uploads/2013/09/google_authorship.png
qode_show-sidebar:
  - default
qode_hide-featured-image:
  - no
qode_use-slider-instead-of-image:
  - no
qode_page-subtitle:
  - hopefully the better way
dsq_thread_id:
  - 1790872145
thb_meta_bigfoot_pageheader_layout:
  - left
thb_meta_bigfoot_pageheader_height:
  - pageheader-big
thb_meta_bigfoot_sidebar:
  - post-sidebar
thb_meta_bigfoot_sidebar_position:
  - sidebar-right
thb_meta_bigfoot_post_related:
  - 1
thb_meta_bigfoot_post_related_number:
  - 4
thb_meta_bigfoot_post_related_thumb:
  - 1
categories:
  - Search Engine Optimization
  - Web Development
tags:
  - google
  - google authorship
  - seo
  - wordpress
---

Based from Craig Fifield&#8217;s article on <a href="http://www.craigfifield.com/google-authorship-wordpress.htm" target="_blank" rel="nofollow">How-To Add Google Authorship To WordPress Correctly</a> I was able to put a better way (hopefully) of doing the said thing.

The catch here is not to waste your time downloading plugins for you to easily integrate the <a href="http://www.google.com/insidesearch/features/authorship/" target="_blank">Google Authorship</a> recently from Google.

Here&#8217;s how you do it in as easy as 1, 2, 3&#8230;

1.) Open your theme&#8217;s **functions.php** file. If you&#8217;re using a child theme, use that one (_definitely better_).

2.) Add the following code below:

    // Google Authorship Integration
    if ( ! function_exists('google_authorship') ) {
        function google_authorship() {
            if ( is_single() || is_page() ) {
                echo '<link rel="author" href="YOUR-GOOGLE-PLUS-PROFILE-LINK" />';
            }
        }
    }
    add_action('wp_head', 'google_authorship');

3.) Replace &#8220;**YOUR-GOOGLE-PLUS-PROFILE-LINK**&#8221; with your <a href="https://plus.google.com/me" target="_blank">Google+ profile</a>. Save/Upload it and test using <a href="http://www.google.com/webmasters/tools/richsnippets" target="_blank"><strong>Webmaster Structured Data Testing Tool</strong></a>

_Edit: Added safeguard to function and some minor corrections._
