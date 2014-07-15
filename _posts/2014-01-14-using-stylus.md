---
title: "Using Stylus"
tags: ["Code", "CSS", "Stylus"]
layout: "post"
comments: true
link: false
---

As I mentioned earlier I decided to go with
[Stylus](http://learnboost.github.io/stylus/) instead of
[Sass](http://sass-lang.com/) when I put together the "kind-of-but-not-really"
redesign of this site. Stylus seemed to be pretty close to Sass and had many
similar features, like placeholder selectors. From what I can tell there's only
one thing that separates Sass and Stylus for me: no `@content` blocks for
mixins.

This was mostly just a tiny problem when I was dealing with media queries. You
can't really create a simple mixin like in Sass and there's no way to add
a variable directly in the `@media` width property[^20140114-1] . After some
digging around I found a good enough replacement:

{% highlight sass %}
breakpoint-lap = 'screen and (min-width: 481px)'

body
  color: red
  @media breakpoint-lap
    color: blue
{% endhighlight %}

It's not a mixin but it made it much easier to manage media queries consistently
throughout the site.

On the plus side I found a really useful Stylus function:
[`unit`](http://learnboost.github.io/stylus/docs/bifs.html#unitunit-type). It
can actually change and remove the unit from a value while the Sass equivalent
just returns the unit itself. I wrote a small function called
[`pixels`](https://github.com/gummesson/gummesson.github.com/blob/master/_assets/stylus/functions/pixels.styl)
that converts a rem value to its counterpart in pixels:

{% highlight sass %}
pixels(value)
  unit(value, 'px') * 16
{% endhighlight %}

A suprisingly easy solution. This is how you could do it in Sass:

{% highlight scss %}
@function pixels($value) {
  @return (($value / ($value * 0 + 1)) * 1px) * 16;
}
{% endhighlight %}

I think that it's not quite as easy to grasp what the Sass function does
compared to the Stylus version, although that could just be me.

* * *

[^20140114-1]: `@media screen and (breakpoint-lap)` sadly doesn't work.
