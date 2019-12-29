---
title: Running Bootstrap Documentation Locally (Portable Way)
author: Dorell James Galang
type: post
date: 2015-05-16T15:11:32+00:00
url: /web-development/running-bootstrap-documentation-locally-portable-way/
featured_image: /wp-content/uploads/2015/05/bootstrap.png
categories:
  - Web Development
---

At times we need to able to access web resources such as documentations, websites, apps and run them locally on our machine either because the internet is wonky or we might need those at times when we go to areas where internet is not available. But hey who goes to a dark forest all alone and why would you that? <span class="wp-font-emots-emo-happy"></span>

Let's cut the chase. This guide is intended to be able to run <a href="http://getbootstrap.com/" target="_blank">Bootstrap</a> &#8211; the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web on your local machine. While most other web resource documentations that can be downloaded are just plain easy to run, Bootstrap on the other hand can only be run on using [Jekyll][1] &#8211; Simple, blog-aware, static sites.

Now, getting this up and running on a Linux machine is pretty straightforward by just following this [guide][2] from Jekyll's installation guide page itself but how about on Windows? The poor me took a couple of hours to just get this done and for anyone not to beat my own bad experience, I have written this guide to get you running Bootstrap documentation locally. It's probably the easiest way as per my experience and probably a plus thing for it's portable and you can easily share it to your friends. <span class="wp-font-emots-emo-happy"></span>

### Let's go with the requirements

1.) First things first, using git we need to download our PortableJekyll from https://github.com/madhur/PortableJekyll. Thanks a lot to this Madhur Ahuja guy who have gone all the trouble and created this portable version of Jekyll for us to be able to use it easily. The portable version contains everything which is required to run Jekyll on Windows:

- Ruby 2.0
- Ruby development Kit
- Git 1.9.2
- Python 2.7.5

So without further ado, let's download the complete PortableJekyll package using the command below (source from his GitHub repo):

```bash
git clone git@github.com:madhur/PortableJekyll.git
```

2.) Also, we need Bootstrap of course. Let's get down to it by cloning Twitter's bootstrap Github repo as well using command below:

```bash
git clone git@github.com:twbs/bootstrap.git
```

### A Little Bit Of Configuration

1.) Extract contents of PortableJekyll-master.zip in any directory you want. In my case, I will extracted it on drive C and that I have renamed folder <span class="file">PortableJekyll-master</span> to <span class="file">PortableJekyll</span>.

2.) Right now, Jekyll isn't known by Windows so we need to set the correct %PATH% to get and properly recognized needed binaries and executable to execute jekyll. So, let's add or update our PATH environment variable on Windows. Use this [guide here][3] to how to do that.

3.) Input the following where PortableJekyll folder can be found on drive C:. Update as it seem appropriate on your end if PortableJekyll is located somewhere else other than drive C:

```
C:\PortableJekyll\ruby\bin;C:\PortableJekyll\devkit\bin;C:\PortableJekyll\Git;C:\PortableJekyll\Python\App;C:\PortableJekyll\devkit\mingw\bin;C:\PortableJekyll\curl\bin;
```

4.) Launch cmd or Windows powershell and check if command &#8220;jekyll&#8221; is now available. If not, go back to Step 2 & 3.

### And Finally

1.) We need to go the directory where Twitter bootstrap is cloned. As for my example, it is located in drive <span class="file">C:\xampp\htdocs\documentations\bootstrap</span>.

2.) Using cmd or any Windows powershell, navigate to the Twitter bootstrap directory and issue the command below to build the documentation.

```bash
jekyll build
```

  
3.) Now, lastly run command and more importantly do not close this shell and leave it running: `jekyll serve`

4.) Voila! Browse in your browser the URL: <a href="http://localhost:9001" target="_blank"><span class="file">http://localhost:9001</span></a>

[1]: http://jekyllrb.com/
[2]: http://jekyllrb.com/docs/installation/
[3]: https://www.java.com/en/download/help/path.xml
