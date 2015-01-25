---
title: "Switching from Vundle to vim-plug"
tags: ["Vim"]
layout: "post"
comments: true
link: false
---

Over the holidays I switched from [Vundle](https://github.com/gmarik/Vundle.vim)
to [vim-plug](https://github.com/junegunn/vim-plug) as my plugin manager for
[Vim](http://www.vim.org/). While I didn't run in to any noticeable bugs with
Vundle I like the on-demand loading that vim-plug has to offer. That means
that you can configure your plugins like this in you `.vimrc`:

{% highlight vim %}
Plug 'mbbill/undotree', { 'on': 'UndotreeToggle' }
Plug 'mattn/emmet-vim', { 'for': ['html', 'css'] }
{% endhighlight %}

The `on` loads the plugin when you execute the command for the first time while
the `for` loads it whenever you open a file with the `filetype` in question.

After switching out a couple of lines in my `.vimrc` and adding some `for`'s and
`on`'s Vim's startup time decreased with about 100-150 milliseconds on my main
machine and 250-300 milliseconds on my old netbook[^20150117-1]. That doesn't
sound like a lot but I can definitively feel it, so to speak.

* * *

[^20150117-1]: Launch Vim with `--startuptime startup.log` to try it for yourself.
