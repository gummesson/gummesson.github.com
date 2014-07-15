---
title: "Loom: an OOCSS library for Stylus"
tags: ["Code", "CSS", "Stylus"]
layout: "post"
comments: true
link: false
---

A week ago I released yet another project:
[Loom](https://github.com/gummesson/loom), an
[OOCSS](http://oocss.org/)-inspired library for
[Stylus](http://learnboost.github.io/stylus/). At a first glance it might seem
like I'm reinventing the wheel but there's honestly not many frameworks out
there for Stylus. Instead of having to rewrite or copy-paste essentially the
same code over and over again I decided to put it all together and release it as
a library.

I'm a big fan of [inuitcss](https://github.com/inuitcss) and
[SUIT](https://github.com/suitcss) and really like the direction they've taken
with decoupling structure from theming, which means that there's no styling
whatsoever. In my experience it always gets a bit messy when you have to add
a dozen or so variables for adding colors to things, especially since there's no
common naming conventions...

Speaking of naming conventions, Loom uses the [modified BEM
notation](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)
for general class names and the `is-` prefix for different states, like this:

{% highlight html %}
<a class="button button--primary is-disabled" href="/">...</a>
{% endhighlight %}

It may not be the prettiest looking code, but it works like magic.

The library's been designed to work in Internet Explorer 8+, but the default
font size and spacing unit are set in rems and there's no included vendor
prefixes. I think it's a better to encourage the use of build tools like
[Pixrem](https://github.com/robwierzbowski/node-pixrem) and
[autoprefixer](https://github.com/ai/autoprefixer) than having to keep track of
fallbacks in the actual code.
[normalize.css](https://github.com/necolas/normalize.css) is also a great
companion to Loom since it takes care of browser inconsistencies.
