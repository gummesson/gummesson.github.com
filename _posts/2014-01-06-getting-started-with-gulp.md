---
title: "Getting started with gulp"
tags: ["JavaScript", "Node.js", "gulp"]
layout: "post"
comments: true
link: false
---

During the last couple of weeks there's been a lot of buzz around
[gulp](http://gulpjs.com/), which is a build system similar to
[Grunt](http://gruntjs.com/) but with a different approach. gulp's main feature
is that it's using [streams](http://nodejs.org/api/stream.html) for all of the
processing. This generally means better flow control and thus no need for
creating temporary files and folders when you're running different tasks.

I won't dwell into how streams work, but if you want to learn more about streams
in Node.js work I encourage you to read the "[Stream
handbook](https://github.com/substack/stream-handbook)". If you want to learn
more about standard streams, try "[Dig Into Unix: Standard
Streams](http://gigaom.com/2009/07/01/dig-into-unix-standard-streams/)".

## Meet gulp

`gulp` is at its core very simple and consists of just a few functions: `task`,
`src`, `dest`, `run`, `watch` and `env`. This guide will focus on the first five
of those. Take a look at the [gulp API
documentation](https://github.com/gulpjs/gulp/blob/master/README.md#gulp-api) if
you want more information on each individual function.

To define a build task you use `gulp.task()`:

{% highlight javascript %}
gulp.task('default', function() {
  // ...
});
{% endhighlight %}

To read your source files you use `gulp.src()`:

{% highlight javascript %}
gulp.src('src/app.js')
  .pipe(/* ... */);

gulp.src('src/*.js')
  .pipe(/* ... */);
{% endhighlight %}

To write your files you use `gulp.dest()`:

{% highlight javascript %}
.pipe(gulp.dest('dest/app.js'));

.pipe(gulp.dest('dest/'));
{% endhighlight %}

To run different tasks from inside another task you use `gulp.run()`:

{% highlight javascript %}
gulp.run('task', 'another-task');
{% endhighlight %}

To watch your files for changes you use `gulp.watch()`:

{% highlight javascript %}
gulp.watch('src/*.js', function() {
  // ...
});
{% endhighlight %}

## Getting started

To use `gulp` we first need to install it globally:

{% highlight text %}
npm install gulp -g
{% endhighlight %}

We'll then add it as a dependency in our project's `package.json` file:

{% highlight text %}
npm install gulp --save-dev
{% endhighlight %}

Since we're going to lint and test our code we'll also install `gulp-jshint` and
`gulp-mocha`:

{% highlight text %}
npm install gulp-jshint --save-dev
npm install gulp-mocha --save-dev
{% endhighlight %}

Now let's create a file called `add.js` and save it in a folder called `src`:

{% highlight javascript %}
module.exports = function(x, y) {
  return x + y;
};
{% endhighlight %}

We'll also need some tests. Create a file called `add.test.js` in a folder
called `test`:

{% highlight javascript %}
var assert = require('assert');
var add    = require('../src/add.js');

describe('add()', function() {
  it('should return 2 when you pass it 1, 1', function() {
    assert.equal(add(1, 1), 2);
  });
});
{% endhighlight %}

Next we'll create a file called `gulpfile.js` at the root of our project and
require our dependencies:

{% highlight javascript %}
var gulp   = require('gulp');
var jshint = require('gulp-jshint');
var mocha  = require('gulp-mocha');
{% endhighlight %}

Then we'll add our `lint` and `test` tasks:

{% highlight javascript %}
gulp.task('lint', function() {
  return gulp
    .src(['gulpfile.js', 'src/*.js', 'test/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('test', function() {
  return gulp
    .src('test/*.js')
    .pipe(mocha());
});
{% endhighlight %}

The reason we use `return` in our tasks is to make sure that the task finishes
completely before the next one gets executed.

Lastly we'll create our `default` task. We'll first add our `lint` and `test`
tasks as dependencies (since we also want to run them before the `default` task
starts) and then use both `gulp.run()` and `gulp.watch()` for running them
automatically whenever we update a file:

{% highlight javascript %}
gulp.task('default', ['lint', 'test'], function() {
  gulp.watch(['src/*.js', 'test/*.js'], function() {
    gulp.run('lint', 'test');
  });
});
{% endhighlight %}

This is how our `gulpfile.js` looks now:

{% highlight javascript %}
var gulp   = require('gulp');
var jshint = require('gulp-jshint');
var mocha  = require('gulp-mocha');

gulp.task('lint', function() {
  return gulp
    .src(['gulpfile.js', 'src/*.js', 'test/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('test', function() {
  return gulp
    .src('test/*.js')
    .pipe(mocha());
});

gulp.task('default', ['lint', 'test'], function() {
  gulp.watch(['src/*.js', 'test/*.js'], function() {
    gulp.run('lint', 'test');
  });
});
{% endhighlight %}

Now, open up a terminal and run `gulp`. The output should look similar to this:

{% highlight text %}
[gulp] Using file <PATH>/gulpfile.js
[gulp] Working directory changed to <PATH>
[gulp] Running 'lint'...
[gulp] Running 'test'...
[gulp] Finished 'lint' in 31 ms

  .

  1 passing (2ms)

[gulp] Finished 'test' in 30 ms
[gulp] Running 'default'...
[gulp] Finished 'default' in 5.99 ms
{% endhighlight %}

That's it. Until you stop the `default` task both the `lint` and `test` tasks
will run whenever you modify a file in the `src` and `test` folders.

## Why use gulp?

[gulp's introduction slides](http://slid.es/contra/gulp) brings up a couple of
valid reasons for using it in favor of other build systems. You're writing
actual code where you can use Node.js' standard library in a simple way. All
plugins should focus on doing one thing and one thing only, as stated in the
guidelines on "[writing a gulp
plugin](https://github.com/gulpjs/gulp/wiki/Writing-a-gulp-plugin)".

In the end, like always, it's just a matter of preference.
