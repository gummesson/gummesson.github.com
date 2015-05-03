---
title: "nodejs-complete for Vim"
tags: ["Vim", "JavaScript", "Node.js"]
layout: "post"
comments: true
link: false
---

In a recent article by [Use Vim](http://usevim.com/), "[Omnicompletion and
JavaScript](http://usevim.com/2015/05/01/tags-js/)", a fork of a
[Vim](http://www.vim.org/) plugin called
[nodejs-complete](https://github.com/ahayman/vim-nodejs-complete) was mentioned.
I quickly gave it a go but the fork, which enables completion of locally
installed modules too, made Vim incredibly slow[^20150503-1]. I decided to use
the [original plugin](https://github.com/myhere/vim-nodejs-complete) instead.

The plugin itself works great but the completion data hasn't been updated for
over two years, which means that some API changes aren't available. Luckily,
there's a simple fix for that.

First we need to navigate into the directory of the plugin and then into
`after/autoload/`, where we'll change the [git
index](http://schacon.github.io/gitbook/7_the_git_index.html) information of the
`nodejs-doc.vim` file:

{% highlight text %}
git update-index --assume-unchanged nodejs-doc.vim
{% endhighlight %}

After that we need to run the `update-nodejs-doc.js` script:

{% highlight text %}
node update-nodejs-doc.js
{% endhighlight %}

The first step isn't strictly necessary since the plugin isn't actively
maintained anymore, but it's a good idea to do it anyways so the modified file
doesn't interfere in any way. The only thing you need to do from now on is to
run the `update-nodejs-doc.js` script whenever you feel like it.

By the way, if you want to disable the preview window that appears whenever the
plugin's completion is on, add this to your `.vimrc`:

{% highlight vim %}
autocmd FileType javascript set completeopt-=preview
{% endhighlight %}

* * *

[^20150503-1]: In some cases it worked well while in others it contributed to a load time of 30-60 seconds.
