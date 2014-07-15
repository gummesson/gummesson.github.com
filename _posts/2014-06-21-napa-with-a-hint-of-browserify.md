---
title: "napa (with a hint of Browserify)"
tags: ["Node.js", "JavaScript"]
layout: "post"
comments: true
link: false
---

Over the last couple of weeks I've been diving deep into the world of
[Browserify](http://browserify.org/). It felt a little bit strange to use it in
the beginning but now I've really fallen in love with the
[CommonJS](http://wiki.commonjs.org/wiki/CommonJS) way of handling dependencies.
One thing that's kind of a bummer though is that far from everything is
available on [npm](https://npmjs.org/)[^20140621-1]. Thankfully I discovered
a nice little tool called [napa](https://github.com/shama/napa).

napa is a "helper for installing repos without a `package.json` with npm". It
basically does a `git clone` on a repository[^20140621-2] directly into the
`node_modules` folder. A basic setup in a `package.json` file looks like this:

{%highlight json %}
{
  "scripts": {
    "install": "napa user/repo"
  }
}
{% endhighlight %}

And if we want to clone more than just a single repository, we can do this:

{%highlight json %}
{
  "scripts": {
    "install": "napa"
  },
  "napa": {
    "foo": "user/repo",
    "bar": "user/repo"
  }
}
{% endhighlight %}

Using code from the master branch is not always a good idea but luckily we can
also specify what tag, branch or commit we want to use:

{%highlight json %}
{
  "scripts": {
    "install": "napa"
  },
  "napa": {
    "foo": "user/repo#v1.2.3",
    "bar": "user/repo#branch",
    "baz": "user/repo#347259472813400c7a982690acaa516292a8be40"
  }
}
{% endhighlight %}

You might be thinking "this is neat, but can't I just use
[Bower](http://bower.io/)"? Absolutely, but one thing that I like about this
approach is that your dependencies stays in one place. There's also a lot of
code out there that's not registered on either npm or in Bower's registry.

Also, instead of having to do something like this to require a dependency:

{% highlight javascript %}
var foo = require('./bower_components/foo/dist/foo');
{% endhighlight %}

We can now do this:

{% highlight javascript %}
var foo = require('foo/dist/foo');
{% endhighlight %}

Much better!

* * *

[^20140621-1]: Or on any package manager for that matter.

[^20140621-2]: It defaults to using repositories from [GitHub](https://github.com/).
