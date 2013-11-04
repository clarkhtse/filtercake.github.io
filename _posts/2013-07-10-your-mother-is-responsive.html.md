---
title: Your mother is responsive
date: 2013-07-10 19:54 UTC
tags: design, web
layout: post
comments: false
published: true
image:
caption:
link:
quote:
summary: She is not so adaptive, though.
---


> **a·dap·tive**, adjective

> serving or able to adapt; showing or contributing to adaptation. 

> **a·dapt**, verb

> to make suitable to requirements or conditions; adjust or modify fittingly. to adjust oneself to different conditions, environment, etc.

___


> **re·spon·sive**, adjective

> responding especially readily and sympathetically to appeals, efforts, influences. acting in response, as to some stimulus.

> **re·spond**, verb

> to reply or answer in words: to respond briefly. to make a return by some action. to react favorably. to exhibit some action or effect.

To paraphrase: adaption is more about reacting to circumstances (read: **context**). Response is more about reacting to **events**.

Now these terms are currently overused and buzzed out in the mobile world and, afaik, some people have very specific opinions about what means what while a lot of people are just blabbering about it to ensure marketing budgets.

Fact is: the web has always been responsive. You can specify element dimensions in relative units: `percent` and `em` for example (and recently also in [`rem`](http://css-tricks.com/theres-more-to-the-css-rem-unit-than-font-sizing/). They mean different things. Percentage looks at the next *higher* context (device, viewport, parent element) while em looks at the next *smaller* context (text-size attribute of content within element).

## Enter Designers

Before the web, we did hundreds of years of print design (actually thousands, print design didn't start with the printing press). We are used to *exactly* placing things *in a static, absolute context* (the sheet of paper, a wall, any other surface). These were always real world things, so they had absolute dimensions by design.

So what did we do? We started misusing tables. Tables originally were also *responsive by design, visually aligning related data automagically*. But hey, why not put some shackles on them to *arbitrarily create a static sheet with absolute dimensions*. Oh boy. It's not our fault though. Of course marketing made us do it.

So first we destroyed the responsive web. And now we are busy shooting ourselves through the chest "repairing" it. Have you noticed that Bootstrap 3.0 is still pixel-based?

![](https://dl.dropboxusercontent.com/s/dk5iowf3zkc4oow/2013-07-10%20at%2022.06.png)

To keep our beloved absolute pixels we are now creating multiple special cases, each of them static. Then we add logic on top in the form of media queries, to simulate responsiveness by mappping those static cases to our context in more or less rude steps. Yuck!

What I still cannot do in CSS3 is specify the dimensions of an element as a simple ratio which always stays the same independently from absolute dimensions. Like this:

    .cinemascope {
      width-height-ratio: 2.35;
      width: 100%;
    }

Noticed how "light" as medium is dynamic and filmmakers never got the idea to specify their formats in nonsense like "100cm wide and 42cm high"?

Every designer knows that visual design is a lot about relations (context) and ratios because perception is always relative. And [design is just making things line up](http://www.hicksdesign.co.uk/journal/design-is-just-making-things-line-up), anyways.

My point is: if you are not thinking responsive (reacting to context and content) you are not thinking web. Mobile just made that so much more obvious. So let's stop using pixels. They are useless with an evergrowing list of viewport sizes and densities.

<blockquote class="twitter-tweet"><p>Default designer&#39;s tombstone: MARKETING MADE ME DO IT.</p>&mdash; Fabian Fabian (@filtercake) <a href="https://twitter.com/filtercake/statuses/355033227200708608">July 10, 2013</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>