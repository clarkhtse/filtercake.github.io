---
layout: post
title: "Solving problems with paper prototypes, Pt 1"
link: 
published: true
---

I stumbled over this article on Smashing by Chris Day: [Six Common Problems With The UX Process, And Six Solutions!](http://www.smashingmagazine.com/2014/05/07/6-common-problems-ux-process-6-solutions/)

Now the article is specifically about a very large project with "millions of pounds invested" so I understand there is a lot of paperwork and administration involved – maybe with the long feedback and clearing cycles we all love so much. So I am not saying that paper prototypes would have magically swept away 50% of all problems in that project.

But most projects we work in are not *that* huge and complex and I think we should always keep things as simple as possible. And from that point of view, 50% of the problems discussed in that post *can* acutally be partly solved with a paper prototype and optional follow-up artifacts.

The parts in question are:

- Problem 3: Wireframing Software Has Limitations
- Problem 4: Wireframes Are Harder To Complete
- Problem 5: Communicating Behavior To Developers And Testers

So let's look at them in more detail...

## Problem: Wireframing Software Has Limitations

> web applications have rich animations and subtle interactions that most wireframing tools and sketches cannot simulate

> wireframes cannot maintain state. Without state, our applications are useless. Yet no WYSIWYG wireframing tool that I know of simulates it effectively.

Chris recommends a couple things to tackle this: higher-fidelity wireframes, annotations, HTML prototypes and animated prototypes (for example built with Sketchflow or InDesign).

The thing is that:

- scaling up the wireframes and adding annotations does *tell*, but it does not really *show* animations and state.
- HTML prototypes are more costly to develop than wireframes – and they quickly become *really* hard to change
- animated prototypes (as long as they work linear) do detach you from the actual non-linear flow web interactions may take.

Not to mention that with all of these, you keep staring at a screen the whole day.

In comparison, paper prototypes:

- do show state and animations
- are very cheap to make and change
- are not linear
- get you away from the screen and doing something with your hands
- can be photographed to produce a detailed set of lo-fi wireframes as a follow-up artifact (put them in order and you have an illustrated task flow)

Again: I am aware you cannot present a set of dog-eared, photographed sketches to a dozen upper-management executives. But I would argue that spending four hours with a paper prototype and *then* four in the wireframing tool will give better results than 8 hours in the wireframing tool. As in: more thoroughly thought through and considering more cases. If the paper prototype or photos of it are already the deliverable or not, is another question.

## Problem: Wireframes Are Harder To Complete

Well, actually the use of the word "complete" already frames the problem of most large and/or corporate waterfall projects I worked on. It is like trying to predict all use cases without anybody having used the product before.

You're in a vicious cycle: the more predicted detailes go into the documentation, the more instances need to be changed after feedback. The costs scale up nicely.

So if you *can* have smaller feedback cycles, it makes sense to push for those instead of doing larger chunks at once.

In a prototype, you make changes only to the prototype until it works. You do not have to manually change n instances. By that, you get a pattern-based approach for free, because you can cut up, exchange and re-tape all elements. [Atomic Design](http://patternlab.io/) FTW.

But to be fair, the problem was defined a little different:

> With so many different sets of wireframes being created for each workflow in a project, drawing the line and proceeding into the realm of color and style can be difficult.

Chris recommends a brilliant solution:

> Just start designing and accept the accept the consequences.

I couldn't agree more.

People *do* have problems to imagine things from a sketch or a wireframe. People *do* react to visual comps much much more. Seeing a visual comp is what makes the thing real for them.

Printing out and cutting up visual designs to move them around is a thing.

## Problem: Communicating Behavior To Developers And Testers

> if you are working on a large team, you can’t always expect everyone to be on the same wavelength. In fact, the larger the team is, the trickier it becomes to achieve consistency in the overall project.

So the proposed solution:

> provide a behavior guide

with all kinds of descriptions.

But this looks to me as a technical solution to a social problem. As long as one person (the writer of guide for example) still just talks to *one* other person (the reader), common ground is never really established for all participating humans. By writing a guide, the communication is now written *and* asynchronous, which makes the much worse. 

There is no substitute for getting everybody involved in building the same part into a room and explicitly agreeing on what you build. It might look costly to put so many people together. But the losses after *not* doing it are much larger in my experience.

So how does paper prototyping help here?

Well, in theory a prototype covers every possible interation with the UI. If it does not yet, you can always update it quickly. So you could make the prototype the single point of truth. 

If everyone has used the prototype, asked questions and sees them answered in action, less misunderstandings can happen.

In terms of a more classical, waterfally project, it might be worth trying how far you can get without specifying detailed solutions in advance and keep resources to work out problems when they arrive. That of course requires trust on the side of your client.

**To sum up:** I really missed the notion of paper prototypes. They might not have the right look for a client presentation. But they might be the right deliverable for the team – and maybe even for yourself.



