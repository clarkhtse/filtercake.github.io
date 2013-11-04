---
title: Converting FLAC to Apple Lossless without the hassle
date: 2013-03-30 08:35
tags: apple, mobile, windows, microsoft
layout: post
comments: false
published: true
summary: "…in which we write a single-line shell script instead of trying out ugly converter apps."
---

The problem:

1. when I can choose between different audio formats to download, I prefer lossless to lossy (duh).
2. the de-facto standard for lossless audio is [FLAC][flac].
3. I am an inhabitant of Apple's iTunes/iPod/iPhone Garden Eden – and of course Apple refuses FLAC and instead cooked up their own lossless format, [ALAC][alac], which resides in `.mp4` container files.

So every time I get hold of music in FLAC, I need to convert it to ALAC before I can throw it into iTunes. On average, [UIs for small apps like these are horrible][googlesearchflactoalac], so I'd prefer to have a Bash-script available for that.

First of all, the code is from [an answer at AVP Stack Overflow](http://avp.stackexchange.com/questions/1139/free-batch-conversion-from-flac-to-apple-lossless-alac).

Using [Homebrew](http://mxcl.github.com/homebrew/), we install [ffmpeg](http://ffmpeg.org/):

    $ brew update
    $ brew install ffmpeg
    
I recommend sporting a `scripts` directory in the home folder, which is added to the [PATH](http://en.wikipedia.org/wiki/PATH_(variable\)). We want to have a script there called `flac2alac.sh` which does the conversion whereever we have some FLAC files.

So:

    $ cd ~/scripts
    $ touch flac2alac.sh     # genereates an empty file
    $ chmod +x flac2alac.sh  # makes it executable

Then one edits that file in a text editor of choice and puts inside:

		#!/bin/bash
    for f in *.flac; do ffmpeg -i "$f" -c:a alac "${f%.flac}.m4a"; done
    # see http://avp.stackexchange.com/questions/1139/free-batch-conversion-from-flac-to-apple-lossless-alac and POST URL

What does this code do?

> This will simply cycle through all the .flac files sitting in the current directory and convert them all to .alac until they're all done.
>
> <http://avp.stackexchange.com/questions/1139/free-batch-conversion-from-flac-to-apple-lossless-alac>
    
Done. Example?

Lets say you have a folder called `100-Million-Bon-Jovi-Fans-cant-be-wrong` filled all the bestest music in flac files. Do

    $ cd ~/Downloads/100-Million-Bon-Jovi-Fans-cant-be-wrong
    $ flac2alac.sh
    
Et voila.

## Troubleshooting:

- does `flac2alac.sh` exist?
- is it executable?
- is it in `~/scripts`?
- is `~/scripts` part of the `PATH`?
- did you open a fresh terminal window after editing `PATH`?


[humantaskswitch]: http://www.joelonsoftware.com/articles/fog0000000022.html
[onethingwell]: http://en.wikipedia.org/wiki/Unix_philosophy#McIlroy:_A_Quarter_Century_of_Unix
[flac]: http://en.wikipedia.org/wiki/Flac
[alac]: http://en.wikipedia.org/wiki/Alac
[googlesearchflactoalac]: https://www.google.de/search?q=mac+convert+flac+to+alac&hl=de&source=lnms&tbm=isch&sa=X&ei=qPZNUfznM4n6PNaggPgO&ved=0CAcQ_AUoAQ&biw=1095&bih=726