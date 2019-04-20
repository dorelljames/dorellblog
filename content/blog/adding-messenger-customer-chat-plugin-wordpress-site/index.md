---
title: Adding Messenger Customer Chat Plugin To Your WordPress Site
author: Dorell James Galang
type: post
date: 2017-11-30T03:38:12+00:00
url: /web-development/adding-messenger-customer-chat-plugin-wordpress-site/
featured_image: /wp-content/uploads/2017/11/dorell-fb-messenger-1.png
thb_meta_bigfoot_pageheader_layout:
  - left
thb_meta_bigfoot_pageheader_height:
  - pageheader-big
thb_meta_bigfoot_sidebar_position:
  - sidebar-right
thb_meta_bigfoot_post_related:
  - 1
thb_meta_bigfoot_post_related_number:
  - 3
thb_meta_bigfoot_post_related_thumb:
  - 1
ampforwp-amp-on-off:
  - default
ampforwp-redirection-on-off:
  - enable
categories:
  - Web Development
tags:
  - chat plugin
  - chatbot
  - messenger
  - messenger customer chat plugin
---

Facebook recently made available in open beta their [Messenger Customer Chat Plugin][1] which allows you to integrate your Messenger experience directly into your website.

> Are you interested in using a WordPress Plugin on this?
>
> If yes, search <a style="color: #fff;" href="https://wordpress.org/plugins/wp-messenger-customer-chat/">WPMCCP</a> at WordPress Plugins. Activate, and then follow the instructions. <a style="color: #fff;" href="http://dorellwp.localhost/personal/wordpress-messenger-customer-chat-plugin-installation/">Watch how-to video here</a>.
>
> NOTE: If you use this plugin, skip the guide below and/or undo what you did as per this guide.

But how do you integrate this into your WordPress site? Of course, there will be probably a lot of plugins created by now to do that easily but why not do it yourself for such a simple thing?

Here&#8217;s how you do it in as easy as 1, 2, 3&#8230;

1.) Let&#8217;s look up your **Facebook Page ID** which we need in Step 2. For this, let&#8217;s use a free service at <a href="https://findmyfbid.in/" target="_blank" rel="noopener">Find Your Facebook ID</a> and paste your Facebook Page URL.

E.g.: https://www.facebook.com/pg/iamDJBot.

**IMPORTANT: Take note of the number.**

 <img class="alignnone size-full wp-image-1825" src="https://i2.wp.com/dorellwp.localhost//wp-content/uploads/2017/11/findfbid.jpg?resize=1255%2C744" alt="" width="1255" height="744" srcset="https://i0.wp.com/dorellwp.localhost/wp-content/uploads/2017/11/findfbid.jpg?w=1255 1255w, https://i0.wp.com/dorellwp.localhost/wp-content/uploads/2017/11/findfbid.jpg?resize=300%2C178 300w, https://i0.wp.com/dorellwp.localhost/wp-content/uploads/2017/11/findfbid.jpg?resize=768%2C455 768w, https://i0.wp.com/dorellwp.localhost/wp-content/uploads/2017/11/findfbid.jpg?resize=1160%2C688 1160w, https://i0.wp.com/dorellwp.localhost/wp-content/uploads/2017/11/findfbid.jpg?resize=260%2C154 260w, https://i0.wp.com/dorellwp.localhost/wp-content/uploads/2017/11/findfbid.jpg?resize=360%2C213 360w, https://i0.wp.com/dorellwp.localhost/wp-content/uploads/2017/11/findfbid.jpg?resize=560%2C332 560w, https://i0.wp.com/dorellwp.localhost/wp-content/uploads/2017/11/findfbid.jpg?resize=760%2C451 760w" sizes="(max-width: 1255px) 100vw, 1255px" data-recalc-dims="1" />

Alternatively, you can go to your **Facebook Page** > **About** and scroll down bottom until you see **Page ID**.

 <img class="alignone size-full wp-image-1826" src="https://i1.wp.com/dorellwp.localhost//wp-content/uploads/2017/11/Screen-Shot-2017-11-30-at-11.26.41-AM.png?resize=1051%2C607" alt="" width="1051" height="607" srcset="https://i0.wp.com/dorellwp.localhost/wp-content/uploads/2017/11/Screen-Shot-2017-11-30-at-11.26.41-AM.png?w=1051 1051w, https://i0.wp.com/dorellwp.localhost/wp-content/uploads/2017/11/Screen-Shot-2017-11-30-at-11.26.41-AM.png?resize=300%2C173 300w, https://i0.wp.com/dorellwp.localhost/wp-content/uploads/2017/11/Screen-Shot-2017-11-30-at-11.26.41-AM.png?resize=768%2C444 768w, https://i0.wp.com/dorellwp.localhost/wp-content/uploads/2017/11/Screen-Shot-2017-11-30-at-11.26.41-AM.png?resize=260%2C150 260w, https://i0.wp.com/dorellwp.localhost/wp-content/uploads/2017/11/Screen-Shot-2017-11-30-at-11.26.41-AM.png?resize=360%2C208 360w, https://i0.wp.com/dorellwp.localhost/wp-content/uploads/2017/11/Screen-Shot-2017-11-30-at-11.26.41-AM.png?resize=560%2C323 560w, https://i0.wp.com/dorellwp.localhost/wp-content/uploads/2017/11/Screen-Shot-2017-11-30-at-11.26.41-AM.png?resize=760%2C439 760w" sizes="(max-width: 1051px) 100vw, 1051px" data-recalc-dims="1" />

2.) Add your website&#8217;s domain to **Whitelisted Domains** on your Facebook Page. Go to your **Facebook Page** > **Settings** > **Messenger Platform** then scroll below and find **Whitelisted Domains**.

E:g: http://dorellwp.localhost

 <img class="alignnone size-full wp-image-1845" src="https://i1.wp.com/dorellwp.localhost//wp-content/uploads/2017/11/messenger-whitelist-domain.png?resize=1040%2C472" alt="" width="1040" height="472" srcset="https://i2.wp.com/dorellwp.localhost/wp-content/uploads/2017/11/messenger-whitelist-domain.png?w=1040 1040w, https://i2.wp.com/dorellwp.localhost/wp-content/uploads/2017/11/messenger-whitelist-domain.png?resize=300%2C136 300w, https://i2.wp.com/dorellwp.localhost/wp-content/uploads/2017/11/messenger-whitelist-domain.png?resize=768%2C349 768w, https://i2.wp.com/dorellwp.localhost/wp-content/uploads/2017/11/messenger-whitelist-domain.png?resize=260%2C118 260w, https://i2.wp.com/dorellwp.localhost/wp-content/uploads/2017/11/messenger-whitelist-domain.png?resize=360%2C163 360w, https://i2.wp.com/dorellwp.localhost/wp-content/uploads/2017/11/messenger-whitelist-domain.png?resize=560%2C254 560w, https://i2.wp.com/dorellwp.localhost/wp-content/uploads/2017/11/messenger-whitelist-domain.png?resize=760%2C345 760w" sizes="(max-width: 1040px) 100vw, 1040px" data-recalc-dims="1" />

3.) Open your theme&#8217;s **functions.php** file. If you&#8217;re using a child theme, use that one (_definitely better_).

In WordPress sidebar menu, go to **Appearance** > **Editor**. Make sure that your **active theme** is selected. Then, locate the **functions.php** file on the right side and click that.

 <img class="alignnone size-full wp-image-1838" src="https://i2.wp.com/dorellwp.localhost//wp-content/uploads/2017/11/accessing-functions.jpg?resize=1400%2C691" alt="" width="1400" height="691" srcset="https://i1.wp.com/dorellwp.localhost/wp-content/uploads/2017/11/accessing-functions.jpg?w=1494 1494w, https://i1.wp.com/dorellwp.localhost/wp-content/uploads/2017/11/accessing-functions.jpg?resize=300%2C148 300w, https://i1.wp.com/dorellwp.localhost/wp-content/uploads/2017/11/accessing-functions.jpg?resize=768%2C379 768w, https://i1.wp.com/dorellwp.localhost/wp-content/uploads/2017/11/accessing-functions.jpg?resize=1160%2C572 1160w, https://i1.wp.com/dorellwp.localhost/wp-content/uploads/2017/11/accessing-functions.jpg?resize=260%2C128 260w, https://i1.wp.com/dorellwp.localhost/wp-content/uploads/2017/11/accessing-functions.jpg?resize=360%2C178 360w, https://i1.wp.com/dorellwp.localhost/wp-content/uploads/2017/11/accessing-functions.jpg?resize=560%2C276 560w, https://i1.wp.com/dorellwp.localhost/wp-content/uploads/2017/11/accessing-functions.jpg?resize=760%2C375 760w" sizes="(max-width: 1400px) 100vw, 1400px" data-recalc-dims="1" />

**NOTE: Please proceed with caution with the code below and make sure to copy and paste it properly or it may break your site and you need to manually remove the faulty code to fix your WP site. Rest assured, the code below works without problems.**

**NOTE: If your functions.php file is empty, make sure to input the opening php tag and append the code below (few lines after).**

    <?php

    // Insert the code here...

**NOTE: If your functions.php file is not empty, make sure not to paste the code below after the closing php tag.**

    // Some code here...

    ?>

    // DO NOT INSERT CODE HERE

**Here&#8217;s the right way below&#8230;**

    <?php

    // Insert the code here... This is the line after the PHP opening tag and/or before the PHP closing tag
    // If you have existing code, do not clear them out but just paste it above or below but always remember insert in between the opening and closing tags

    ?>

You may now paste the following code below (append it to the bottom part). Make sure to replace **<YOUR_FACEBOOK_PAGE_ID>** from Step 1.

    // Messenger Chat
    if ( ! function_exists('messenger_chat') ) {
        function messenger_chat() {
            echo '<div class="fb-customerchat" page_id="<YOUR_FACEBOOK_PAGE_ID>" minimized="false"></div>';
        }
    }

    // FB SDK
    if ( ! function_exists('fb_sdk') ) {
        function fb_sdk() {
            echo '<script>window.fbAsyncInit=function(){FB.init({appId : "1678638095724206", autoLogAppEvents : true, xfbml : true, version : "v2.11"});}; (function(d, s, id){var js, fjs=d.getElementsByTagName(s)[0]; if (d.getElementById(id)){return;}js=d.createElement(s); js.id=id; js.src="https://connect.facebook.net/en_US/xfbml.customerchat.js"; fjs.parentNode.insertBefore(js, fjs);}(document, "script", "facebook-jssdk"));</script>';
        }
    }

    add_action('wp_footer', 'messenger_chat');
    add_action('wp_footer', 'fb_sdk');

Replace &#8220;**<YOUR_FACEBOOK_PAGE_ID>**&#8221; with your **Facebook Page ID. Save. Hooray!**

[1]: https://developers.facebook.com/docs/messenger-platform/discovery/customer-chat-plugin
