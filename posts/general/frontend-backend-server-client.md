---
date: 2019-08-18
author: Lukas
lang: en
title: Frontend, Backend, Server, Client
tags:
    - general
---

# Backend, Frontend, Server, Client

![What's that even mean?](https://www.exboyfriendrecovery.com/wp-content/uploads/2015/03/what-does-that-even-mean.jpg)

If you came here, chances are you're looking for some kind of explanation.
Be that because you are not a developer, you are new to development or you are just any normal person.

So why can I explain these? I can't, or at least not really,
because, in my experience, no two people mean the exact same thing using these terms. This also means my explanation might not match what you heard before and that people disagree with me.

I will however still try to explain my understanding and a more general approach to thinking about the terms, that might help you understand them as well.

## Backend and Frontend

For starters it might help, if you think about the terms `backend` and `frontend` not purely in a software development context, but in a broader sense. The `backend` might be some kind of backside, a hidden part of something, whereas the `frontend` is the frontside, the visible part.

Take a bar counter for example, the backside might be where the bartender is. He has all kinds of tools and bottles at his disposal to deliver you a drink.

On the other hand, most of the time, the backside of the bar tends (haha) to not be as pretty as the frontside. This is because it is more about practicality of making drinks and less about aestetics as the frontside or `frontend`.

So in general the `frontend` is the part everybody sees, the product, the service, the experience or the value. Whereas the `backend` is more about the interal processes, workings, the tool to create and deliver that value.

Thinking like this about a software project, you might be able to come up with explanations for the terms.

Take a news website. For a journalist, e.g. the content creator, the `backend` is the administration part of the website, where he can write drafts, publish and unpublish content, moderate comments, etc. It is about the tools and functions.  
Likewise the `frontend` is the content part of the website intended for the customers, the people reading the news.

So far so good, but wait, because in a different context, the terms `backend` and `frontend` of the *exact same* website, might mean different things.

More on that later.


## Server and Client

These terms, too, can be *very* confusing. You might have some kind of understanding that a server relates to the internet and websites. But what does a client have to do with servers and what specifically **is** a server?

Try to think of the literal meaning. Take a ~~waiter~~ server at a restaurant, taking orders and ~~delivering~~ serving food and drinks the guests. You guessed it, the guests are the clients of the ~~waiter~~ server.

In IT it is the exact same thing. The server is a computer that serves data to one or more clients (also computers). We could also call them server computers and client computers, but mostly the computer part is just left off.

That's basically it, however things get complicated in the specifics.

### The server

As we established the server serves data to other computers. In a more abstract sense it communicates data to other computers. This is where it gets tricky. Because what about my phone. It is a mini computer and when sending a message to my friend's phone, it also communicates data to it. Does that mean my phone is a server?

Well yes and no. The distinction is kind of blurry, which might be a reason so many people have a different understanding of the term.

Usually a computer is only called a server, if its *main* purpose is sending data. You could say it is a **specialised computer**. The main purpose of my phone is clearly not just serving data to other computers.

The server might not just be specialised in communicating data, but also in the kind of data it communicates. It might serve a website or video content or it might be specialised in relaying messages from one client computer to another, as is the case for instant messaging or emails.

The server does not even have to be specialised in sending data, it can also be specialised in storing data. Think of dropbox for example. Most of the time those servers are called database or storage servers. But this is also tricky, because every computer and even your phone stores data, your messages, your photos, etc.

The distinction is really about the 'being specialised' part. Your computer and your phone could mostly do the same things any server does - just maybe not as fast -, but they are not specialised for doing only that one thing.

However being specialised does not automatically make a computer a server. For example a gameboy is a mini computer specialised in playing games. But it would typically not be called a server, because it's main function is not communication data to other computers.

There is not really one recipe or one definition for distinguishing servers and clients. You kind of have to evolve your own understanding of it, but it might help you to ask the following questions about a computer:

- Does it have a specialised purpose?
- Does it provide a function, service or data a lot of other computers can use?
- Does it communicate to a lot of other computers?

And if in doubt, just talk about a computer. Because every server is also a computer.


### The client

Building on the analogy of the waiter in a restaurant, a client computer receives data from a server. This might be a website, which is displayed in a browser, an email, a video or anything else really.

So usually you just speak of a computer and only in specific contexts of computers communicating with each other, you call some of them servers (see above) and the others - the 'not servers' - the clients.

In other words, the client computer utilizes the function, service or data which a server provides.

## Bringing it together

So back to the terms `backend` and `frontend`. Remember the news website that has an administration part, the `backend` and the visible content part, the `frontend`.

Now, instead of looking at the journalist, we look at the developer who created the news website. His customer is the journalist and in a sense also the readers of the website. He writes code which creates the website and delivers it to browsers.

Here it may start to sound familiar. He wrote code that has a specialised purpose: to generate a website and communicate it to other computers. These are the characteristics of a server computer and indeed you might call this a server software.

This might be a common pitfall as well. On the one hand a computer with a specialised purpose is called server (computer). On the other hand the software that makes a computer do a specific thing, is also called server (software).

And because this software is the hidden, internal part - a tool - which generates the website, e.g. the value for the customer (the journalist and the news reader), you might *also* call it `backend`. Whereas in this context the whole website (administration part and content part) would be called the `frontend`.

If this confuses you, that's because it *is* confusing. The terms `frontend`, `backend`, server and client pack *a lot* of **ambiguity**.

With this, I conclude for now. There is a lot more to know and learn. Just try not to let it scare you and in time you will build your own understanding and have your very own definition of the terms.
