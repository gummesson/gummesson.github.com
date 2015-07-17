---
title: "Using npm scripts"
tags: ["Node.js", "npm"]
layout: "post"
comments: true
link: false
---

While [playing](https://github.com/gummesson/swedish-time) with
[React](https://github.com/facebook/react),
[Babel](https://github.com/babel/babel),
[Browserify](https://github.com/substack/node-browserify) and
[cssnext](https://github.com/cssnext/cssnext) I decided to use [npm
scripts](https://docs.npmjs.com/cli/run-script) instead of relying on a build
system. One of the benefits of using scripts, other than having fewer
dependencies in your project, is that the `node_modules/.bin` directory gets
added to your [PATH](http://en.wikipedia.org/wiki/PATH_%28variable%29). This
makes it easy to work with modules that you only use for development.

Here's the `scripts` field from the
[`package.json`](https://github.com/gummesson/swedish-time/blob/master/package.json)
file:

{% highlight json %}
{
  "scripts": {
    "start": "npm install && npm run setup && npm run dist",
    "setup": "rm -rf dist && mkdir dist",
    "dist": "npm run js && npm run css && npm run html",
    "js": "browserify -t babelify -g uglifyify -e src/js/index.js > dist/index.js",
    "css": "cssnext -c src/css/index.css > dist/index.css",
    "html": "cp -r src/*.html dist/",
    "serve": "http-server -p 5555 dist/",
    "deploy": "git subtree push --prefix dist origin gh-pages"
  }
}
{% endhighlight %}

- `start` and `dist` are "shortcuts" for the other scripts.
- `setup` takes care of clearing and creating the `dist` folder.
- `js` runs JavaScript files through Browserify, which transforms and minifies
  them into a single file.
- `css` runs the CSS file through cssnext and compresses the output.
- `html` copies the HTML file.
- `serve` serves the `dist` folder.
- `deploy` deploys the `dist` folder to the
  [`gh-pages`](https://github.com/gummesson/swedish-time/tree/gh-pages) branch.

To run a script you run `npm run <script>`. `start` also has a shortcut, which
is `npm start`. If you can't remember the name of a script you can list them all
by running `npm run`.

## A note on Windows support

On my Windows machine I use [Git Bash](https://msysgit.github.io/#bash), which
gives me access to common UNIX tools. You can use modules like
[rimraf](https://www.npmjs.com/package/rimraf),
[mkdirp](https://www.npmjs.com/package/mkdirp) and
[ncp](https://www.npmjs.com/package/ncp) as replacements for `rm -rf`, `mkdir
-p` and `cp -r` to make the scripts more portable.
