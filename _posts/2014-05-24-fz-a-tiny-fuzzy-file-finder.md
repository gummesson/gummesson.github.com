---
title: "fz: a tiny fuzzy file finder"
tags: ["Code", "Shell"]
layout: "post"
comments: true
link: false
---

Fuzzy file finders are awesome. [CtrlP](https://github.com/kien/ctrlp.vim) is one of my favorite plugins for [Vim](http://www.vim.org/) and while there are alternatives for Unix based systems I haven't really found one that I can easily use with [Git Bash](http://msysgit.github.io/#bash). I decided to hack together a tiny (one line) shell script that somewhat mimicks a fuzzy file finder, albeit primitively. I named it [fz](https://github.com/gummesson/dotfiles/blob/master/bin/fz) and it's available in my [dotfiles](https://github.com/gummesson/dotfiles) repository.

`fz` will perform a recursive fuzzy search for all the files you're looking for. It's case-insensitive and ignores a couple of directories by default[^20140524-1]. As an example, If I run `fz .x` in my local dotfiles repository it'll print the following:

{% highlight text %}
./x/.xcolors
./x/.xbindkeysrc
./x/.xinitrc
./x/.Xresources
{% endhighlight %}

`fz` is mainly meant to be used when you need to find a particular file or a set of files, although it can be used for other actions. For example, if I run it in conjunction with Vim, `vim $(fz .x)`[^20140524-2], I can open all files and populate the [argument list](http://vimdoc.sourceforge.net/htmldoc/editing.html#argument-list) in one fell swoop.

* * *

[^20140524-1]: Searching through things like `.git` and `node_modules` is hardly useful, atleast not for me.
[^20140524-2]: In this particular case `vim **/.{x,X}*` would probably suffice though.
