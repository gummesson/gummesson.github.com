---
title: "Parallel npm scripts"
tags: ["JavaScript", "Node.js", "npm"]
layout: "post"
comments: true
link: false
---

My preferred task runner these days when dealing with JavaScript projects is
using npm scripts. However, getting them to run in parallel is a bit tricky
since I tend to use both Linux and Windows.

With a package called [npm-run-all](https://www.npmjs.com/package/npm-run-all),
the setup is trivial:

{% highlight json %}
{
  "scripts": {
    "watch": "npm-run-all -p watch:*",
    "watch:js": "...",
    "watch:css": "..."
  }
}
{% endhighlight %}

The above will run all of our `watch` tasks concurrently. If we need to run some
tasks in sequence first, we can do this:

{% highlight json %}
{
  "scripts": {
    "build": "npm-run-all build:clean -p build:js build:css",
    "build:clean": "...",
    "build:js": "...",
    "build:css": "..."
  }
}
{% endhighlight %}

The only downside seems to be that some programs may lose their colors if you
don't set it explicitly (with `--colors`, for example). I can't say that I'm
particularly bothered by that though.
