---
title: "A kind of redesign"
tags: ["Code", "Design"]
layout: "post"
comments: true
link: false
---

After finally updating to the latest versions of
[Ruby](http://www.ruby-lang.org/en/) and
[Jekyll](http://jekyllrb.com/)[^20140112-1] I decided it was time for changing
a few things on this site. I added a proper landing page to make the site feel
more like and actually site rather than just a blog.

I went back to basics and removed all of the plugins I was using which means
that I can push the source code directly up to GitHub without having to build it
locally first.

There's now no tags or archive pages but that honestly doesn't feel like a big
thing. Compiling the site is **A LOT** faster too. It used to take a couple of
seconds but now it's done before I've even had the time to hit "refresh".

I also converted all of my [Sass](http://sass-lang.com/) files over to
[Stylus](http://learnboost.github.io/stylus/). Not because I necessarily think
it's better but it's much more convenient since I use
[Node.js](http://nodejs.org/) (and [gulp](http://gulpjs.com/)) for the whole
front-end build process.

* * *

[^20140112-1]: Which finally works great on Windows thanks to the `encoding: utf8` setting. Yay!
