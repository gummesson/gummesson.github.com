---
title: "Mopidy and ncmpcpp"
tags: ["Linux", "Manjaro Linux"]
layout: "post"
comments: true
link: false
---

Ever since I switched to a [Spotify](https://www.spotify.com/) premium account
I've been searching for a command line client to use on my [Manjaro
Linux](http://manjaro.org/) powered netbook. I've settled on using
[Mopidy](http://www.mopidy.com/) as a music server and
[ncmpcpp](http://ncmpcpp.rybczak.net/) as the front-end client for it.

First we'll grab `mopidy` and `mopidy-spotify` from the
[AUR](https://aur.archlinux.org/):

{% highlight text %}
yaourt -Sa mopidy
yaourt -Sa mopidy-spotify
{% endhighlight %}

Now we need to add our Spotify username and password in the
`~/.config/mopidy/mopidy.conf` file:

{% highlight text %}
[spotify]
enabled = true
username = USERNAME
password = PASSWORD
{% endhighlight %}

Now it's time to install ncmpcpp, which is available in the [official
repositories](https://www.archlinux.org/packages/):

{% highlight text %}
yaourt -Sa ncmpcpp
{% endhighlight %}

Before we run `ncmpcpp` we need to start `mopidy`. We could do this in our
`.xinitrc` file or as
a [systemd](http://www.freedesktop.org/wiki/Software/systemd/) service, but
since I don't want the server to be running all the time I've settled on doing
it manually.

[![ncmpcpp, powered by
Mopidy](/images/2014/08/31/ncmpcpp.png)](/images/2014/08/31/ncmpcpp.png)

There's about a million options for configuring ncmpcpp and my settings are, as
always, in my [dotfiles](https://github.com/gummesson/dotfiles) repository.
