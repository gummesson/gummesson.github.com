---
title: "Browserify, browserify-shim and gulp"
tags: ["Node.js", "JavaScript"]
layout: "post"
comments: true
link: false
---

As I've mentioned earlier I'm on a [Browserify](http://browserify.org/) kick and thus exploring the available transform modules for it. One of them is [browserify-shim](https://github.com/thlorenz/browserify-shim), which let's you make [CommonJS](http://wiki.commonjs.org/wiki/CommonJS) incompatible files "browserifyable".

Let's say we have a library that's exposes itself as `window.Module`. The easiest way to use it with Browserify and browserify-shim is to add this to our `package.json` file:

{% highlight json %}
{
  "browserify-shim": {
    "module": "global:Module"
  },
  "browserify": {
    "transform": ["browserify-shim"]
  }
}
{% endhighlight %}

This will make browserify-shim replace `var module = require('module')` with `var module = (typeof window !== "undefined" ? window.Module : typeof global !== "undefined" ? global.Module : null)` in all the places that you've required it[^20140710-1].

Integrating Browserify and browserify-shim with [gulp](http://gulpjs.com/) is pretty straightforward. Given that we've added the above configuration to our `package.json` file, all we need to add in our `gulpfile.js` file is this:

{% highlight javascript %}
var gulp   = require('gulp');
var source = require('vinyl-source-stream');

var browserify = require('browserify');

gulp.task('browserify', function() {
  return browserify('./index.js')
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('public/'));
});
{% endhighlight %}

We have to use [vinyl-source-stream](https://github.com/hughsk/vinyl-source-stream) to make the stream from Browserify compatible with [vinyl](https://github.com/wearefractal/vinyl), the virtual file system that gulp uses.

Now let's say that we want to minify our code. The easiest way to do this would be to add another transform module, [uglifyify](https://github.com/hughsk/uglifyify):

{% highlight json %}
{
  "browserify": {
    "transform": [
      "browserify-shim",
      "uglifyify"
    ]
  }
}
{% endhighlight %}

We could also integrate it directly in our `gulpfile.js` file, but that requires more modules and a bit more code.

The above setup is probably the fastest way of getting up and running, which I find preferable when just I want to experiment with a couple of libraries.

* * *

[^20140710-1]: [browserify-shim's README](https://github.com/thlorenz/browserify-shim#why-not-just-var-three--windowthree) explains well why this is beneficial compared to using `var module = window.Module` or something like it directly in your code.
