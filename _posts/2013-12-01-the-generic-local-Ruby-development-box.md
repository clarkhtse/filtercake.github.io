---
layout: post
title: "The generic local Ruby development box"
link:
published: true
tags:
comments: false
poster:
postercredit:
image:
caption:
quote:
summary:
---

So we did [GitHub from Scratch](http://opentechschool.github.io/github-from-scratch/) [yesterday](http://www.meetup.com/opentechschool-hamburg/events/146838202/) and the feedback was great. The day run smoothly, except for one thing: GitHub Pages rendering was kind of slooooooow. Although people entered correct code, it sometimes took several minutes for their page to render.

Which made us think on how people could switch to local development earlier without having to learn Git (and be it only with a GUI client) AND needing to run Jekyll in a working Ruby dev enviroment.

So I wonder how this could be achieved with chaining available bricks.

Here is the workflow:

1. User downloads thing and unzips
1. User clicks on thing
1. User enters GitHub username
1. Thing clones/pulls/synchs repo username.github.io
1. Thing start local Jekyll server with exact same config as it would run on GitHub
1. When server is ready and Jekyll has made the initial run of rendering, thing opens web browser at localhost:used_port
1. Thing is able to synch the repo to GitHub without the user having to deal with an ssh key.

The last step is of course the tricky part, because it needs *some* kind of interface and the user should not have to deal with SSH - or at least they should be able to just copy-paste something without having to understand what it means.

**Q:** But how is this generic, mate? Looks rather specific!

Well, this is just *one* use case for the GLRDB for. Other cases are:

- not dealing with GitHub synching and/or code editing
- running Jekyll in non-restriced mode
- initing/running Middleman with a specific template and featuring a mixture of assets and libraries
- writing/running Cucumber tests

Some inital specs for the GLRDB would be:

- lightweight, eg: shell, networking, package manager, Git, Ruby version manager and a couple installed versions of Ruby and needed Gems.
- easy forkable/versionable for different usecases.

Any feedback/input/ideas/starting points/links/tutorials are greatly appreciated and I will update this post with them!


