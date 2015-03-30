---
title: "My JavaScript testing stack"
tags: ["JavaScript", "Node.js", "npm"]
layout: "post"
comments: true
link: false
---

After releasing a dozen or so npm modules I've settled on a testing stack that I
enjoy using.

For writing tests I use [tape](https://www.npmjs.com/package/tape). I've used it
ever since I started leaning towards [test-driven
development](http://en.wikipedia.org/wiki/Test-driven_development) (except for a
brief stint with [Mocha](http://mochajs.org/)). I've written two formatters for
consuming its TAP output, but these days I tend to stick with the default output
since I only want to know if my tests pass or not.

I also use [smokestack](https://www.npmjs.com/package/smokestack) for running my
tests in the browser in conjunction with
[browserify](https://www.npmjs.com/package/browserify) and
[tap-closer](https://www.npmjs.com/package/tap-closer). It's not a foolproof
system since it'll only run the tests in the browser that I'm currently using
(the latest stable version of Chrome), but it gives me a general idea if the
module works or not.

For code coverage I use [covert](https://www.npmjs.com/package/covert). I agree
with [substack](https://github.com/substack/covert#why) that "most code coverage
libraries do weird things [...], such as writing all their junk to directories
and files in a completely out-of-band way". covert only ever writes the results
directly to stdout or stderr.

My testing related npm scripts looks like this:

{% highlight json %}
{
  "scripts": {
    "test": "node test/",
    "test:browser": "browserify test/ | tap-closer | smokestack",
    "test:cover": "covert test/"
  }
}
{% endhighlight %}

The above setup makes it easy to switch between them by typing `npm run
test[:<type>]`[^20150330-1].

* * *

[^20150330-1]: On a semi-related note I've also switched to the same namespacing technique for build scripts too.
