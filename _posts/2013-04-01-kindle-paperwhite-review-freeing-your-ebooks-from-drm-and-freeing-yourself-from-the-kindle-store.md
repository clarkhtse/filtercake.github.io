---
title: Kindle Paperwhite review
date: 2013-04-01 10:44 UTC
tags: reading, kindle, drm, hardware
layout: post
comments: false
published: true
link:
summary: "tl;dr: Love it!"
---

(This is not a good read, but I spent so much time on trying to make it sound *important*, that I cannot delete it.)


The [Paperwhite](http://www.amazon.de/gp/product/B007OZO03M/) is my first Kindle. Actually, I had never really tried *any* eReader, mostly due to

- being uninitiated and 
- appalled by the DRM that surrounds eBooks

The other reason was that, on average, consumer electronics hardware is cheap crap, built to fall apart as soon as the next season arrives. Looking at older models of the kindle, I had always kind of put it in that corner.


### The Hardware

The device feels great and as is very light in comparison to an LCD-tablet. Being used to a retina display on my iPhone, I sometimes *feel* like I can spot pixels on the Paperwhite display – but probably not really. Illustrations look great as long as they don't depend on color.

The Paperwhite has one single button (for turning it off and on again) and a micro USB port. That's it, no schnickschnack here. It doesn't play MP3s, there is no dock available and it won't make coffee either. [Compare with the mentioned older Kindle models](http://en.wikipedia.org/wiki/Amazon_Kindle#Devices) for a good laugh.

The built-in light is perfect. It seems like the complete reading area is glowing. Acutally, imho, *the built-in light is the important thing about it.* In a dark room, the lowest setting is just bright enough to read, without enlightening the whole room. I can read in bed again without disturbing the kids or the female.

It is a bit disappointing that the light has neither a hardware control nor automatic setting. On the other side, that makes two less possible break points.

The size of the device is exactly right, too. Anything that fits the front pocket of a zip hoodie is fit for field deployment.

Battery life keeps all the promises you hear about it. I read something around 20 to 30 hours within the first week (I caught a cold that week and read [Makers][makers] amongst other things) and the battery was at least still at 75% afterwards. I can only imagine what people refer to as "the insane battery life" Kindles generally have.

### Software

Though the display does do some grayscales, it feels monochrome. That induces a nice, minimalistic touch interface: no effects, no zooming, no dancing windows. Things appear, then they disappear, without any gloss or transparency or animations. Thank god.

If you are used to snappy native iOS or Android interfaces, the eInk-display will set you in the right mood for reading a book: *patience*. It will do its thing eventually, [just give it a second](http://www.youtube.com/watch?v=KpUNA2nutbk).

The home screen consists of either a list of books or a cover gallery, sorted by last read and new. You tap them, you continue reading where you left off the last time. Awesome.

The "Beta browser" is exactly that, though if you regularly read text-heavy sites, it might be useful. Scrolling is of course the pain. This part of the touch interface (dragging a page) cannot work well due to the slowness of the eInk display.

One thing I find myself using with a lot of joy is the built in dictionaries. Just tap the word, get the definition. This is a bit like the good part of watching foreign films with subtitles.

### Stuff which is not from the Kindle shop

The Kindle software supports [a ridiculous range of formats][kindleformats]: .txt, .mobi and (surprise) the Kindle .azw. (and PDF, more on that later.)

It gets obvious here why you would want a custom firmware (if it's not enough to fully control a device you own). No html support?! No Latex-support?!

Under the hood [the Kindle runs Linux](http://www.turnkeylinux.org/blog/kindle-root), so there is really no reason, it shouldn't be able to read all kinds of open standards.

However, I do not *have* a huge collection of documents in all kinds of formats. All I want to do is read ebooks. So actually I was kind of delighted to see the Kindle mounting as normal device and sporting a simple, unhidden `documents`-folder where all the content goes. I can copy inside it, I can copy out of it, without any restricitions. Awesome, I'll do the hacking some other time.

#### Managing content with Calibre

Copying files by hand works, but there is a great open-source tool out there called [Calibre][Calibre]. Since calibre changes the filenames of your ebooks, it helps to keep a consistent "workflow":

- buy
- download
- dedrm
- put into library
- edit metadata
- sync to kindle
- read

Calibre does not care about the kindles `.sdr` files which store your marks and note, so those have to be synced manually if needed.

Calibre also provides you with a special goodie: converting `.epub` (which the Kindle refuses) to `.mobi` (which the Kindle accepts).

#### PDFs

PDF does really show its ugly side on the Kindle. If the author didn't have a paperback-sized format in mind, text will probably be unreadable, despite the high resolution of the display. Zooming is not really an option either because turning pages and moving within one page breaks your reading flow. Many PDFs come with a thick white margin, too.

Sometimes switching to landscape mode can be enough to wade through the pages. But once you read a book in a dynamic format, PDFs feel sluggish and yesterday.

After being somewhat disappointed I deleted the collection of PDF ebooks I accumulated over the years and understand now what they mean when they say:

> PDF is not an ebook format!

The point is not if a particular PDF is accidentally readable on this or that device. Ebooks should be dynamic by design, like HTML. PDF is by design a static format, made to get consistent output on print.

### Hackability

As said, I will root the device some other time, so I cannot give hints on where to start [that journey](https://www.google.com/#hl=de&safe=off&tbo=d&sclient=psy-ab&q=rooting+the+kindle+paperwhite&oq=rooting+the+kindle+paperwhite&gs_l=hp.3..0i19.1368.8401.0.8706.29.10.0.18.18.0.349.1018.8j1j0j1.10.0...0.0...1c.1.2.hp.nYVFMfn_56M&pbx=1&bav=on.2,or.r_gc.r_pw.r_qf.&bvm=bv.42080656,d.d2k&fp=fb64fd9fed45682e&biw=1199&bih=737).

[Hacking the Kindle-DRM](http://apprenticealf.wordpress.com/2012/09/10/drm-removal-tools-for-ebooks/) is actually not that hard, since everything is stored in the mentioned documents-folder. If you wonder *why* you should hack the DRM, have a look at the [Defective by Design](http://www.defectivebydesign.org/)-campaing by the [Free Software Foundation](http://www.fsf.org/).

### Use cases

Besides "consuming text"? Well, *learning* from book-exercises or tutorials is a breeze with this thing, much more comfortable than handling large paper bricks.

Which brings me to a personal use case: I start books, then start other books. I read mostly non-fiction and imho "80% of all non-fiction writing could be edited down to 20% of the size while keeping 80% of the relevant information".

So after a third or half of a book I usually need a break from all the… *writing…*  *all the writing these authors must do all the time…* and switch to something else for now. With this thingy I can continue any started book any time.

Another thing is the reading of text-heavy content from the web. [Syncing the Kindle with Instapaper][kindleinstapaper] is not exactly straightforward, but it works.

The touch interface is also very grateful for marking takeaways and quotes directly in the text. Adding notes is somewhat tideous, again due to the lag of the display. It works to to add a couple keywords so you will remember your thought, but it is not made for typing. On the upside, you will find a simple text-file in the document folder called "clipboard", which has all your marked passages and notes you added. Writing book reviews should be much more fun this way, I will probably try that out one day.

### Verdict

A device dedicated to read books, anytime, anywhere, independently of external light or, yes, "even in direct sunlight". Won't distract you with games or productivity apps from reading books.

Reading books is how I spent a lot of my life and I am happy to *finally* bring that part of me over to the present, [after 500 years](http://en.wikipedia.org/wiki/Gutenberg_Bible). Reading on the eInk display is bliss as it is, but the built-in light made it my new best friend. I actually *do* carry it around in my hoodie pocket at home.



[makers]: http://craphound.com/makers/download/
[kindleformats]: http://www.amazon.com/gp/help/customer/display.html?nodeId=200505520&#recognize
[hypercard]: http://en.wikipedia.org/wiki/Hypercard
[kindleinstapaper]: http://david-smith.org/blog/2012/10/11/instapaper-on-the-kindle-paperwhite/
[kindle-fire-review]: http://www.marco.org/2011/11/17/kindle-fire-review
[Calibre]: http://calibre-ebook.com/
[epubs-on-piratebay]: http://thepiratebay.se/search/epub/