---
title: "A small scaffolding shell script"
tags: ["Code", "Shell"]
layout: "post"
comments: true
link: false
---

Creating your typical file structure is probably the most boring task when it
comes to starting a new project. I looked at [Yeoman](http://yeoman.io/) and
a couuple generators but none looked like how I want my directories and files to
be structured. Rather than rolling my own it hit me that a small shell script
would suffice.

After a few minutes of tinkering I came up with a script that I named `mkproj`.
It basically consists of a simple case statement and a couple of "guarded" loops
that creates everything that I need to get started.

{% highlight bash %}
#!/usr/bin/env sh

case "$1" in
  "node")
    for dir in {test,lib}; do
      if [ ! -d "$dir" ]; then
        mkdir "$dir"
      fi
    done; unset dir

    for file in {README.md,index.js,test/index.js}; do
      if [ ! -f "$file" ]; then
        printf "\n" > "$file"
      fi
    done; unset file
  ;;
  # Other project structures...
  *)
    echo "Invalid option."
  ;;
esac
{% endhighlight %}

The reason why I'm using `printf "\n" >` instead of `touch` is so that I can use
the script with [Git Bash](http://msysgit.github.io/#bash) and still retain the
right file format, i.e. with Unix line endings.

To use the `node` scaffolder all I need to do is type `mkproj node` and hit
`Enter`. I'm far from being a shell scripting expert so there's probably a more
efficient way of doing this and it's certainly not a full on replacement for
other tools, but it works for me.
