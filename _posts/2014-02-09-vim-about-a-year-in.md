---
title: "Vim: about a year in"
tags: ["Vim"]
layout: "post"
comments: true
link: false
---

After seeing a couple of new blog posts about learning [Vim](http://www.vim.org/) I thought I'd write down my two cents on the topic. This not a fully featured guide on getting started but rather a few pointers that I think can be useful for newcomers.

## Experiment, and then experiment some more

I think the most valuable thing is to experiment with your setup. I'd suggest you to look through [other people's `.vimrc`'s](https://github.com/search?l=VimL&q=vimrc&ref=searchresults&type=Repositories) for inspiration and try out every feature that you find interesting or useful. I still do this, probably far too much.

I'd also advise you to use a plugin manager. I used [Pathogen](https://github.com/tpope/vim-pathogen) and [Git submodules](http://git-scm.com/docs/git-submodule) for a long time[^1] and while it works it isn't optimal when you want to play around with new plugins. I recently switched to [Vundle](https://github.com/gmarik/Vundle.vim) which means that all I have to do is add `Bundle "<github-username/plugin-name>"` in my `.vimrc` and run `:BundleInstall`.

## ":help" is your friend

Seriously. I love Vim's documentation. If you stumble upon some feature you haven't heard of or if you're unsure about how some setting works all you have to do is type `:help <anything>` and hit `Enter`. It's a seriously handy thing to have.

## Don't remap like a crazy person

This is my extreme personal preference, but try to keep remapping keys to a minimum. I only try to do that to keys and commands that are too cumbersome to type. If you use a certain command a dozen times in a day you should go ahead and remap it, but don't do it just for the sake of doing it.

* * *

[^1]: Well, for the better part of a year.
