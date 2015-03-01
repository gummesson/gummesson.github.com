---
title: "Using local npm modules with Make"
tags: ["Node.js", "npm", "Make"]
layout: "post"
comments: true
link: false
---

I've written about the advantages of using [npm
scripts](https://docs.npmjs.com/misc/scripts) as a build system. Another
alternative is to use [Make](http://www.gnu.org/software/make/), which works
great for tasks with a lot of steps or if you prefer to keep the line length in
check.

You can modify your [PATH](http://en.wikipedia.org/wiki/PATH_%28variable%29) by
adding the following at the top of your `Makefile`:

{% highlight makefile %}
PATH := node_modules/.bin:$(PATH)
{% endhighlight %}

You can now use the binaries that same way as with npm scripts:

{% highlight makefile %}
.PHONY: js

js:
	@browserify -t babelify -g uglifyify -e src/js/index.js > dist/index.js
{% endhighlight %}

You can also use some of the Make's built-in variables and functions to make it
more reusable:

{% highlight makefile %}
SOURCE := src/js/index.js
TARGET := dist/index.js
FLAGS  := -t babelify -g uglifyify

.PHONY: js

$(TARGET): $(SOURCE)
	@mkdir -p $(dir $@)
	@browserify $(FLAGS) -e $< > $@

js: $(TARGET)
{% endhighlight %}

The `$@` variable represents the target file while the `$<` is the source
file.

## Windows support

Make is available through [Make for
Windows](http://gnuwin32.sourceforge.net/packages/make.htm),
[Gow](https://github.com/bmatzelle/gow) and a dozen other installers.
