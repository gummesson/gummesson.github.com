---
title: "UltiSnips"
tags: ["Vim"]
layout: "post"
comments: true
link: false
---

I've never been a fan of snippets, since you need to in some way or another
learn someone else's abbreviations[^20141214-1], but I've come to realize that
repetitive typing is boring. Some characters are just a pain to type on a non-US
keyboard too. Enter [UltiSnips](https://github.com/SirVer/ultisnips).

UltiSnips dubs itself as "the ultimate solution for snippets in
[Vim](http://www.vim.org/)". While I was a bit weary of it being mainly written
in [Python](https://www.python.org/) I haven't noticed anything that indicates
that being a disadvantage.

My favorite feature of UltiSnips is being able to use placeholders. Let's take
this snippet for example:

{% highlight text %}
snippet test
test('$1', function(${2:assert}) {
	$0
});
endsnippet
{% endhighlight %}

The cursor will first place itself on the `$1`. When you hit `C-j` it'll
visually select the word `assert` which you can operate on if you need to. `$0`
is the position for the last "tab" stop. If you need to go back to a previous
position, press `C-k`.

[![UltiSnips](/images/2014/12/14/ultisnips.gif)](/images/2014/12/14/ultisnips.gif)

Another handy thing is `:UltiSnipsEdit`, a neat command which will open the
`snippets` file for the current file's language. This means that you can add or
edit your own snippets and they'll be available as soon as you save it. Remember
that you may need to use `:UltiSnipsAddFiletypes <lang>` to create the
`snippets` file if it isn't already there.

In short, if you're looking for a snippet engine for Vim you should definitively
try UltiSnips!

* * *

[^20141214-1]: I do use [Emmet](https://github.com/mattn/emmet-vim), mainly because it's it makes writing HTML a breeze.
