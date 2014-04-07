---
layout: post
title: "Dimensional Planning"
poster: dimensional-planning.jpg
postercredit: http://www.amazon.de/101-Things-Learned-Architecture-School/dp/0262062666/
---

So we had an internal workshop on user stories, which I am [making into an info poster](http://filtercake.tumblr.com/post/82007941296/prototype-of-an-info-poster-on-user-stories-based). While we were handed lots of possible ways to [split user stories](https://encrypted.google.com/search?hl=en&q=how%20to%20split%20user%20stories) into smaller ones, I want something linear for the poster. Something that will definitely work to get a start.

What I was always thinking about during the past months while working on [the new Jimdo shipping costs](http://blog.jimdo.com/new-shipping-cost-options/) was this:

> How do I apply the concept of *Hierarchical Drawing* to our team work on the feature?

If you wonder what "hierarchical drawing means", here is the appropiate excerpt from [101 Things I Learned  In Architecture School](http://www.amazon.de/101-Things-Learned-Architecture-School/dp/0262062666/):

![]({{site.baseurl}}/images/2014/hierarchical-drawing.jpg)

Turns out there is the concept of "Dimensional Planning", which is the equivalent for software. Sadly, very little of this is online:

- [Dimensional Planning – Abstract from Devoxx09](http://www.devoxx.com/display/DV09/Dimensional+Planning)
- [Dimensional Planning – Agile Atlas](http://agileatlas.org/articles/item/dimensional-planning)
- [Dimensional Planning – XP Days Benelux 2007](http://www.xpday.net/Xpday2007/session/DimensionalPlanning.html)

But [Arne](https://twitter.com/arneroock) pointed me to and sent a german article from *Agile Review*, a magazine [it-agile](http://www.it-agile.de/) makes for its customers. So what follows is kind of a tl;dr of this article "Dimensional Planning" by [Stefan Roock](https://twitter.com/StefanRoock).

*[Personal comments by myself are in italic brackets.]*

---

## Advantages of small user stories
- easier to develop shared vision
- more precise planning
- more smaller stories ease team organization
- make smaller releases possible
- smaller feedback cycles lead to faster learning (and thus a competitive advantage)

## Difficulties in splitting user stories

Example: fantasy RPG. Lots of gography (a whole world), things and persons. Things can be created, placed, examined, picked up, dropped, used, sold and bought.

### The road metaphor

- dirt
- cobblestone
- asphalt
- highway

*[An important aspect of software is to **enable the user to get a job done**. Within the metaphor, the user wants to get from point A to point B. A dirt road does the job.]*

Example: invoicing. The levels:

- **Dirt road:** Paste SQL query template into DB, paste output into word template. *[No UI. Just a manual workflow to get from A to B.]*
- **Cobblestone:** Start automation, eg make complete invoice from data. Just the legal basics, no options (eg no private persons, no discounts, etc)
- **Asphalt:** The state of today with all expected features (including persons, discounts, individual VAT per item, asf)
- **Highway:** state of the art, exceed expectations, build USPs (eg custom layouts, import, export, APIs to external services, etc).

## Back to the RPG example:

### Dirt Road

1. only show thing as text in console
1. Have id
1. Interaction per text input
1. Players must remember having taken a thing for themselves
1. Things cannot be examinded in the world (must be taken, then can be looked at in a textfile or database)
1. Usage like other interaction via text console
1. No drop, buy or sell yet

### Cobblestone

1. Simple graphic representation of things
1. Interaction via standard context menu
1. Things can be picked up and dropped (players do not need to remember themselves)
1. Use things via id

### Asphalt

1. Nice graphics
1. Menu has CI look and feel
1. All actions are implemented
1. Alle actions feature sound

### Highway

1. Player can create own things

## Iterations and releases

It's possible to also have release cycles by this:

- get basic feedback of value *very* quickly
- "walking skeleton": put later on meat, muscles, skin, etc

As Stefan writes, implementing games that way is actually quite common (devs can use a console interface) and this is also used outside of IT, for example in [the Wikispeed project](http://wikispeed.org/) to build a car. Organizational development is another use case for it.


## If I had a hammer

Not every thing is a nail just because you bought a new hammer. Accordingly, Dimensional Planning is not by design the best method for everything. Dimensional Planning might help in these scenarios:

- a complete but low-quality version helps to answer questions and assess risks
- a complete but low-quality version can be used by a small niche group of users
- there is no (or no better) strategy yet to split work incrementally

---

So far for the article.

I am a bit puzzled that this model is spread so rarely in software development. Sure, there is also "Lean Startup" and stuff. But I find it increasingly annoying to have to dig through whole books/frameworks/programs to find the bits and pieces which work. I'm not looking to buy into a belief system.

"Hierarchical Drawing" is one of the first things you learn in art school. It is the only way to achieve a consistent page – *maybe* unless you have many many years of experience. But even then it doesn't usually make sense to not work hierarchical. After doing the first rough lines to divide the basic composition, it is easy to start from scratch if necessary. But throwing away stuff or redoing areas of a painting becomes more costly with every detail added. And I be damned if that is not one of the main problems in all software development I have taken part so far.
