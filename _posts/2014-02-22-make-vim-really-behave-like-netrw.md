---
title: "Make netrw really behave like Nerdtree"
tags: ["Vim"]
layout: "post"
comments: true
link: false
---

Around a year ago I wrote a
[brief post]({% post_url 2013-02-04-make-netrw-behave-more-like-nerdtree %})
on how to replace the [NERDTree](https://github.com/scrooloose/nerdtree) plugin
for [Vim](http://www.vim.org/) with a couple of settings for
[netrw](http://www.vim.org/scripts/script.php?script_id=1075) and some custom
scripting. I dug around in the documentation and found a couple of built-in
settings for netrw that made it look and feel relatively close to NERDTree.

First, let's set netrw to use a tree style listing of our directories:

{% highlight vim %}
let g:netrw_liststyle = 3
{% endhighlight %}

Then we'll make it open the file in the previous window to the right of the
project drawer:

{% highlight vim %}
let g:netrw_browse_split = 4
let g:netrw_altv = 1
{% endhighlight %}

We can also set the width of the window. The value is set in percent of the
total window width:

{% highlight vim %}
let g:netrw_winsize = 25
{% endhighlight %}

Also if you're like me and find the banner with information at the top highly
annoying, you can easily disable it:

{% highlight vim %}
let g:netrw_banner = 0
{% endhighlight %}

If you've set custom wildignores netrw can inherit them by doing this:

{% highlight vim %}
let g:netrw_list_hide = &wildignore
{% endhighlight %}

If you want it to launch right after you've entered Vim you could map it to the
`VimEnter` autocommand:

{% highlight vim %}
augroup ProjectDrawer
  autocmd!
  autocmd VimEnter * :Vexplore
augroup END
{% endhighlight %}

...and we're done!
