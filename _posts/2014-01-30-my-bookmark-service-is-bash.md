---
layout: post
title: "My bookmark service is Bash"
link:
published: true
tags:
comments: false
poster: bash-bookmarks.png
postercredit:
image:
caption:
quote:
summary:
thing:
deps:
---

I stopped bookmarking many years ago. Reasons were plenty and boring, so let's skip them. And although [Pinboard](https://pinboard.in/) is probably awesome, I tend to not use online services like it that much. I like control, I like it local, and offline and in plain text files – like the site you are looking at.

Since I recently find myself searching the browser history more often than I want, I thought I could as well keep a simple bookmark list here. I don't want to *manage* bookmarks, for now I just want to dump them.

So here is the rundown when I want to keep a site:

- Copy a Markdown version of the link with the help of the [Markdown Link Generator](https://chrome.google.com/webstore/detail/markdown-link-generator/nckkdgnncmnkpgjliombbmadaiejdckd)
- `Cmd-Space` to open [Alfred](http://www.alfredapp.com/)
- `b` is my shortcut to the bookmark workflow
- `Cmd-v` the the markdownified link and edit as needed
- `Return` then runs the workflow which
  - Prepends the link to the raw [linklist.md](https://github.com/filtercake/filtercake.github.io/blob/master/linklist.md) in my Jekyll repo
  - runs the [render-linklist](https://github.com/filtercake/filtercake.github.io/blob/master/render-linklist) script which (you guessed it) renders a proper Jekyll-page and pushes it to Github.
  
Following below is the code I currently use.

A few notes on that:

- Yes, there are scripting languages which are probably suited much better for the job. But I recently decided to focus an Bash and JS/Node.
- God, it is an awful hacky script, so don't try it home. It doesn't do any kind of error checking, proper escaping or the like.
- I am just happy it actually works. Yay!
- Thanks to the Alfred forum for helping out.

## The Alfred workflow ([a mod](http://andrewng.com)):

````
#!/bin/bash

export PATH= ... # making sure rbenv is in the path

if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi

f=~/projects/filtercake/linklist.md
t=`mktemp /tmp/alfred_prepend.XXXXXXXX`
q={query}
d=`date +%Y-%m-%d`
e="- "$q"    ["$d"]"

cat - $f <<< $e > $t
mv $t $f
rm $t

~/projects/filtercake/render-linklist
````

## The script

````
#!/bin/bash

cd ~/projects/filtercake

touch bookmarks.html
echo "---" > bookmarks.html
echo "layout: default" >> bookmarks.html
echo "title: bookmarks" >> bookmarks.html
echo "---" >> bookmarks.html
echo " " >> bookmarks.html

echo "<h1>Bookmarks</h1>" >> bookmarks.html

redcarpet linklist.md >> bookmarks.html

git add linklist.md
git add bookmarks.html
git ci -m "updated bookmarks"
git pull
git push origin master
````