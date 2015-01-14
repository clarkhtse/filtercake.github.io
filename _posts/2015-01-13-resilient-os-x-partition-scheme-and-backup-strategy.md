---
layout: post
title: "Resilient OS X partition and backup strategy"
poster:
published: true
tags:
comments: false
image:
caption:
quote:
summary:
link:
---

## Foreword: Clusterfucks do happen

I had relied on Time Machine for many years and it had never failed me. But suddenly, one evening, literally a couple days before I had to turn in a semester work, it happened: my system didn't boot anymore. No problem, right? Start from DVD (Computers had DVD drives back then), repaitr or re-install, get data back from Time Machine. Right?

Except that all the Time Machine drive did was clicking and not mounting.

I can hardly describe the plunge my stomach made that moment or the sweat that started running down my forehead. The rest of the night was spent gettng my hands on a Disk Worrier .iso, discovering that my DVD drive was borken too (it would read but not write), driving through the city to a friend with a DVD burner and recovering the lost boot disk to a state where it was at least readable again.

No loss of data but I learned my lesson there.

## Not having a backup is plain stupid

Clusterfucks aside, there are a few topics where I have zero tolerance for yolo and haha. Backup is one of them. I have compassion for every consumer-user who loses the precious snapshots of their kid (and I am really trying to educate people with this stuff whenever I can). I have none for tech savvy people like designers or developers.

A developer or designer telling me that they lost data because of a system crash and they didn't have a backup is like saying straight to my face that they are a cowboy *by choice*. Time Machine is built into OS X. Just plug in a fucking hard drive and it does all the rest.

Time Machine has saved my ass lots of times over the years, especially when I dabbled around in the terminal and [`rm`ed myself occasionally](https://github.com/sindresorhus/guides/blob/master/how-not-to-rm-yourself.md) or accidentally saved over the wrong file in Photoshop.

## Customizing takes time

My system is my second home and I love how customizable this great tool is. Customization takes time though. I love and rely on my wirkflows. If I have to set up a new system, there is a lot of setup to do.

So if my machine crashes and I don't have a *real* backup, I have not just lost all my work. It will also take a lot of time to get everything up and running again. *If* that is even possible at all. Could you name all the tweaks and settings you have made, all the apps you installed and how they are configured? Like, right now?

## Solution: Clone it!

Time Machine is the no-brainer quick fix to recover lost files or older states. But only a fully bootable clone of your drive allows you to recover full state and continue working seamlessly. [OS X can do that](http://nyacomputing.com/how-to-create-a-bootable-clone-of-your-mac-hard-drive/), but  other apps are better at it. [SuperDuper](http://www.shirt-pocket.com/SuperDuper/SuperDuperDescription.html) does it for me.

So if my internal disk crashes ([and man, do they crash](http://blog.codinghorror.com/the-hot-crazy-solid-state-drive-scale/)), I can boot from the external clone on the same machine and at least examine and hopefully repair the failed drive. And back then when disks were replacable, I would just have swapped in another disk, cloned the clone onto it and I would be good to go.

Today, with Macbooks at least, everything is soldered to the motherboard. So no replacing there. If the disk is gone, the whole machine needs to be repaired or replaced. And what do you do until then? Probably work with an older spare one? No problem. Again, just clone the clone onto it and continue to worl as if nothing had happened. If...

## Default is not enough though

Or actually, it might be too much. What I mean is that, by default, a machine with OS X comes running on a single partition which hosts everything. That isn’t a problem until you need to recover your system to a machine which has a *smaller* internal disk. Let's say your old machine had 480 gig SSD, but your interim replacement sports only 240 gig. Then you simply cannot restore the large clone onto the small drive.

## Yes, partitions are still a thing!

To keep it short, here is my current setup:

- A 120 gig partition for the system and some core data
- A 120 gig partiton for more data
- A 240 gig partiton for even more data

Time Machine is backing up all those partitions and I also clone  *all of them* for double safety.

So even if the only available computer to replace my machine is a 2010 Macbook Air with a 120 gig drive, I will be up and running within an hour. If it has a 240 gig, great: system *and* data partition one fit onto it. And in case of 480 gig, well, seamless.


## So how do I get there?

It's not complicated, but it takes some time and some ordered steps.

### 1. Time Machine

I mean, really. We talked about it. It is built in. Just plug in an external hard drive and it does the rest. Not having that is just negligent.

### 2. Clone

Get a second hard drive and try out something like [SuperDuper](http://www.shirt-pocket.com/SuperDuper/SuperDuperDescription.html). This comes with a bonus track btw:

You can only repartition the internal disk when booting from an external disk. Recovery boot (as awesome as it is) will not do for this use case because it still running from the same physical internal drive. You can of course create an external recovery USB stick or the like. But having your standard system at hand for this seems much better. Hence, clone your system disk.

### 3. Partition

Now that you have two copies of all your data, you can safely repartition your main drive. In theory you can just delete stuff and re-copy it from the one of the two copies. Personally I actually used yet another hard drive for this purpose. Yes, call me paranoid or read the beginning of this post again.

Remember to re-clone the new partition setup once its done. If you go shopping for a clone drive, consider getting one twice the size of your internal drive. Thus you do not have to overwrite the old clone and have states at hand during the process. Just in case.

### Enjoy the peace

Yeah, just do that. Sleep much better the night after this is done :)

## There is more: offsite backup

While having local copies of your data prevents you from crash loss, it does not cover accidents like fire or water. If all copies are in the same physical location, all of them will be gone. Author [Steven Pressfield](http://www.stevenpressfield.com/the-war-of-art/) for example puts a fresh copy of all his work in the glove compartment of his car every day as part of his morning routine. Works for him but sounds like a hurdle to me.

Luckily: interwebs. [Backblaze](http://backblaze.com/backtowork) as a 'cloud backup' does it for me. [Arq](http://www.haystacksoftware.com/arq/) is a more more finegrained solution, which uploads your data to your very own Amazon S3 account.

## And there is even more: the home partition

Back in my Windows days, I had my user folder and my system data on two different physical drives. I had started to do that because of performance reasons, but it came with a nice side effect: whenever I had to reinstall my system (and I remember doing that at least once a year), I would just relink the data drive and ta-daah!

I don't know why, but having system and user data on the same partition feels wrong to me. [If stuff can be seperated, seperate it](https://en.wikipedia.org/wiki/Separation_of_concerns).

There is this great tutorial called [Moving OS X /Users to a separate partition](http://lnx2mac.blogspot.de/2010/09/moving-os-x-users-to-separate-partition.html). I had tried that around Snow Leopard or something with a dummy install and it had worked. I was reluctant though to apply it to my running system because I had no clone. With the current setup I will finally tackle that sometime this year.


# Conclusion

Computers cannot be trusted. Everything will break down the very minute you can use it the least. Knowing that I will be operational again within an hour, whatever happens, let's me sleep much better at night. Knowing that all my data and all the history of stuff I made over the years is safe: priceless.

You might find that this partion-and-recovering thing is too much for you. You might be okay with watching status bars for two days when your system crashes. But for god's sake, to be able to at least do that, puh-lease start having a real backup strategy.

Did I mention that Time Machine is built in and all you need to do is plugging in an external hard drive?


