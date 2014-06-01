---
title: "gist: a tiny Gist client"
tags: ["Code", "Shell"]
layout: "post"
comments: true
link: false
---

Lately I've been on a bit of a shell scripting craze. I wanted to create a simple [GitHub Gist](https://gist.github.com/) client which enabled me to save snippets easily. After finding a simple tutorial about [using curl with GitHub's Gist API](https://gist.github.com/caspyin/2288960) I discovered that creating a simple shell script ([gist](https://github.com/gummesson/dotfiles/blob/master/bin/gist)) was suprisingly easy.

The script uses a piping "hack" that I borrowed from [Julian Gruber](https://github.com/juliangruber)'s [vipe.sh](https://github.com/juliangruber/vipe). This means that it enables us to pipe a file directly into it, like this:

{% highlight text %}
gist < index.js
<command> <...> | gist
{% endhighlight %}

We can also rename the gist to something a bit more useful than the default `gist.txt`:

{% highlight text %}
gist <filename> < index.js
<command> <...> | gist <filename>
{% endhighlight %}

Note that the script will prompt you for your password. You could change `username="USER"` to `username="USER:PASS"`, but if you only use it once every couple of days or so I suggest you to not save your password in plain text, especially if you store your scripts in a git repository.
