---
title: "Dropping CtrlP and other Vim plugins"
tags: ["Vim", "Plugin"]
layout: "post"
comments: true
link: false
---

At the end of July I dropped [CtrlP](https://github.com/ctrlpvim/ctrlp.vim) and
other plugins from my [Vim](http://www.vim.org/) setup. CtrlP was one of the
first that I installed and until a couple of weeks ago I would've deemed it an
essential plugin.

The truth is that I never learned how to navigate effectively with Vim's
built-in commands. I know how to use `:e` and its companions, but beyond that I
never gave it any thought.

It turns out that Vim's tab completion, coupled with the `wildmenu` option,
works really well since it can complete everything from buffers, unopened files
to tags.

## Built-ins

### Navigating buffers

I use this for listing and switching buffers:

{% highlight vim %}
nnoremap § :ls<cr>:b
{% endhighlight %}

The `§` key is on the same row as the numbers on my keyboard, which makes it
fitting. I also have this in my `.vimrc`:

{% highlight vim %}
nnoremap <BS> <C-^>
{% endhighlight %}

This will jump to the last edited file. Typing `^` requires two keystrokes for
me, hence the remapping.

### Navigating tags

{% highlight text %}
:tag <name>
{% endhighlight %}

You can also search for a tag by pattern:

{% highlight text %}
:tag /<pattern>
{% endhighlight %}

I find tags extra useful when I'm dealing with CSS. If I want to jump to a class
named `.block` I can do `:tag .bl`, press `<Tab>` and then hit `<Enter>`.

### Finding files

{% highlight text %}
:find <filename>
{% endhighlight %}

I unfortunately find tab completion to be a bit slow with the above command, but
since I don't work with large codebases I don't use it that much.

To make it work recursively you need to modify the `path` option:

{% highlight vim %}
set path+=**
{% endhighlight %}

You also need to make sure to modify the `wildignore` option too, unless you
want to include files that belong to your dependencies:

{% highlight vim %}
set wildignore+=*/node_modules/*,*/vendor/*
{% endhighlight %}

### Grepping

I regularly grep for all kinds of things. I've used
[ack.vim](https://github.com/mileszs/ack.vim),
[ctrlsf.vim](https://github.com/dyng/ctrlsf.vim) and I even wrote my own
[plugin](https://github.com/gummesson/vim-grepany). I ended up removing it and
changing the `grepprg` and `grepformat` options instead:

{% highlight vim %}
if executable('ack')
  set grepprg=ack\ -s\ -H\ --nogroup\ --nocolor\ --column
  set grepformat=%f:%l:%c:%m,%f:%l:%m
endif
{% endhighlight %}

I use [ack](http://beyondgrep.com/) since it works well on both Linux and
Windows systems. I also added a small helper command, courtesy of
[thoughtbot](https://thoughtbot.com/)'s guide on "[Faster Grepping in
Vim](https://robots.thoughtbot.com/faster-grepping-in-vim)":

{% highlight vim %}
command! -bang -nargs=* -complete=file -bar Grep silent! grep! <args>
{% endhighlight %}

Which I then use like this:

{% highlight text %}
:Grep <args>
{% endhighlight %}

If I want to use [git-grep](http://git-scm.com/docs/git-grep) instead of ack I
run `:Ggrep`, a feature from
[vim-fugitive](https://github.com/tpope/vim-fugitive).

One of the nicest features that comes with ack.vim and other grepping plugins is
that the quickfix window opens automatically after searching. Luckily, it's not
hard to enable that either:

{% highlight vim %}
autocmd QuickFixCmdPost *grep* cwindow
{% endhighlight %}

The above snippet comes from [vim-fugitive's
FAQ](https://github.com/tpope/vim-fugitive#faq).

## Alternatives

When I removed CtrlP I actually swapped it for another plugin,
[DidYouMean](https://github.com/EinfachToll/DidYouMean). I think the author
describes its use case best:

> If you're like me and you want to edit a specific file with Vim, say,
> `test.py`, you type `vim te` into the terminal, then you hit `<Tab>` and
> `<Enter>` immediately because you think your shell expands the characters to
> the right file name. But if there's another file starting with `te`, Vim fires
> up with an empty file called `te`, laughing at you. That's annoying. This
> simple plugin makes Vim ask for the right file to open.

The plugin is only a handful of lines long, but it saves me from so much
frustration.
