---
title: "Fixing backlight issues with light"
tags: ["Linux"]
layout: "post"
comments: true
link: false
---

I recently purchased a new laptop (an [Asus VivoBook
F200MA](http://www.asus.com/Notebooks_Ultrabooks/F200MA/)) for using as my main
Linux box. Installing everything went smoothly except for one thing: adjusting
the brightness didn't work, neither via the normal keybindings or with
[xbacklight](https://www.archlinux.org/packages/extra/x86_64/xorg-xbacklight/).

Using the screen with the brightness set at 100% is both battery-draining and
eye-straining[^20150520-1] so I really needed to get it fixed. I found a small
application called [light](https://aur.archlinux.org/packages/light/) which
worked right out of the box.

The commands are easy to remember too:

{% highlight bash %}
light -G               # Get brightness
light -S <percentage>  # Set brightness
light -A <percentage>  # Increase brightness
light -U <percentage>  # Decrease brightness
{% endhighlight %}

* * *

[^20150520-1]: Like being hit with the fire of a thousand suns.
