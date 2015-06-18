---
title: "vim-lister"
tags: ["Vim", "Plugin"]
layout: "post"
comments: true
link: https://github.com/tommcdo/vim-lister
---

I installed this plugin a couple of weeks ago and I'm wondering where it has
been all my life. If you're using something like
[ack.vim](https://github.com/mileszs/ack.vim) or
[ag.vim](https://github.com/rking/ag.vim) the plugin makes it incredibly easy to
manipulate the results in the quickfix or location list. The `Qfilter` command
alone makes it worthy of an install in my opinion.

Let's say you you want to replace "foo" with "bar". You first do your normal
"grepping". "foo" appears in both JavaScript and CSS files but you're only
interested in the latter:

{% highlight vim %}
:Qfilter css
{% endhighlight %}

Maybe you need to narrow down the list further and you only want the files under
the "baz" directory:

{% highlight vim %}
:Qfilter baz
{% endhighlight %}

To load the remaining items in the quickfix list into the argument list, run
`Qargs`. Now you can use `argdo %s/foo/bar/g` for the replacing.

I've only scratched the surface on what the plugin can do so make sure to head
over to it's [repository on GitHub](https://github.com/tommcdo/vim-lister) and
check it out. I can't recommend it enough!
