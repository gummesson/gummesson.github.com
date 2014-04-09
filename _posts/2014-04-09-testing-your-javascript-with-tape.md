---
title: "Testing your JavaScript with tape"
tags: ["JavaScript", "Node.js", "TAP"]
layout: "post"
comments: true
link: false
---

After writing my last post about using [TAP](http://testanything.org/) and [tape](https://github.com/substack/tape) runner for writing JavaScript tests I felt that I wanted to flesh it out a bit more. I've previously used [Mocha](http://visionmedia.github.io/mocha/) quite extensively since it seemed like the most popular testing framework and at the time I really like the [BDD](http://en.wikipedia.org/wiki/Behavior-driven_development)-styled syntax. While I still think Mocha is awesome I've come to appreciate a simpler approach for writing tests.

## Why?

Besides the points brought up in "[TAP & Tape, the awesome way to test JavaScript](http://www.macwright.org/2014/03/11/tape-is-cool.html)" I feel like going from a more verbose syntax to a more terse one means that I can write less code while focusing on the tests. Things like `describe()` and `it()` gets "replaced" with `test()` and the actual assertions. Being able to run your tests and independently decide which formatter to use by simply piping the output to it is also something that I find extremely useful.

## A basic example

Here's a basic test:

{% highlight javascript %}
var test  = require('tape');
var hello = require('./');

test('A thing', function(t) {
  t.plan(1);
  t.equal(hello(), 'Hello world!');
});
{% endhighlight %}

To run it all you have to do is:

{% highlight text %}
node test.js
{% endhighlight %}

Or if you want a different output formatter:

{% highlight text %}
node test.js | tap-dot
{% endhighlight %}

You can also run tape directly on a whole directory of files:

{% highlight text %}
tape test/*.js | tap-dot
{% endhighlight %}

While skimming the tests written for [prova](https://github.com/azer/prova) I saw that [Azer Koçulu](https://github.com/azer) used `assert` instead of `t`, which I think is a nice idea:

{% highlight javascript %}
var test  = require('tape');
var hello = require('./');

test('A thing', function(assert) {
  assert.plan(1);
  assert.equal(hello(), 'Hello world!');
});
{% endhighlight %}

One of the best parts of tape is the test are asynchronous by default, which means that as long as the `t.plan()` gets passed the right number of assertions it'll wait for them all to finish.
