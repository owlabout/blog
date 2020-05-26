---
date: 2020-05-19
author: Becca
lang: en
title: Splitting your Vue.js project into Node.js modules
thumbnail: ./node-orga.svg
tags:
    - node
    - vue
---

:::hero #6C63FF
![Lost without structure](./node-orga.svg)
:::

# Splitting your Vue.js project into Node.js modules

There are many reasons to make your code more modular. You might want to include single modules in different projects. You may just want to add some extra structure to your project. You may want to track versions of different parts of your code. I stayed away from over-modularizing my code for a while because I didn't want the extra overhead of managing not just one code-base for my project but 10. It seemed like more work than it was worth. 

I was wrong. In fact, npm comes with some cool extra fun little features, which help you manage your modules in a way, that barely influences your standard development workflow. In the following I'm going to go through the steps to move some Vue-components of your Vue.js project to a node-module and continue on as before. 

## Create a Node.js module in the same repository 
:::sticky creating a node.js module
```json
// package.json of module-a
{
  "name": "module-a",
  "version": "1.0.0",
  "description": "a module for the core project",
  "main": "index.js",
  "author": "Becca",
  "license": "MIT",
  "dependencies": {
    "core-project": "1.0.x"
  }
}
```
```js
// index.js of module-a
export { default as ModuleA } from './ModuleA.vue';
```
```js
// anywhere in core-project
import { ModuleA } from "module-a";
```
:::

So let's pretend I have a component called module A, which I now want to turn into a node-module.
The first thing I want to do is move everything that belongs to that module into a separate folder and turn it into an isolated node module. 
Moving everything to a special folder is simple enough. Turns out: creating a node module is just as easy. All you need is a package.json file in your module folder and tada: node module. 

The package.json needs to have some required properties, while some are just nice to have. "name" and "version" are required fields. The "main" property will let you define an entry point for your module. It's not a required field and defaults to "index.js". I'd always include it anyway, just because I'm not a big fan of having too much implicit information. 

Creating a package.json file is not a lot of work, but if you want npm to take care of that for you, you could always use the command-line tool `npm init` from inside the module folder. It will ask you a few questions and then generate the package.json for you. 

This is my initial package.json for my module A:

```json
{
  "name": "module-a",
  "version": "1.0.0",
  "description": "a module for the core project",
  "main": "index.js",
  "author": "Becca",
  "license": "MIT"
}
```

The only thing missing now is the index.js file, that I specified as the entry point. 
All I want this file to do is export each of the Vue components, that need to be imported into my core project: 

```js
export { default as ModuleA } from './ModuleA.Vue';
```
Now I can import the Vue-component "ModuleA" from anywhere in my core-project once the module has been installed or linked (I explain linking further down). 
```js
import { ModuleA } from "module-a";
```
## Use peer-dependencies for libraries and dependencies for plug-ins

You'll notice, that our package.json so far doesn't list any dependencies. However, our module obviously uses Vue.js, so this module will not work as a standalone repository. We could remedy this by simply adding the missing dependencies and dev-dependencies to the package.json of our module. 

As an initial setup this will work just fine. Let's say you are using Vue version "2.5.17" in your core project. If we now add the same Vue version to our module, npm will be smart enough to not install Vue twice. When going through the dependencies of Module A it will see that Vue version "2.5.17" is already installed and just leave it at that. 

What happens though if we decide to update Vue in our core project and forget to update Vue in our Module A? Npm will now see two conflicting versions of Vue and just end up installing them both to satisfy everyone's needs. 

```
core-project
├── vue@2.7.2
└─┬ module-a
  └── vue@2.5.17
```
While this will still build correctly and give you functional code, it will add extra unnecessary code, that you really don't need. Imagine having 5 tiny modules, each with its own Vue version. The modules themselves might be minuscule, but by installing 5 different versions of Vue.js your codebase will end up growing significantly with each module, that you add. We don't really want that. 

For this, npm lets us use "peer dependencies". Peer dependencies will let us specify what the core project needs to use the module. By adding a peer dependency you can actually tell npm: "If I'm being used by another project, please make sure that the project is using Vue at a minimum version of 2.x". If you then install the module in a project that does not fulfill those requirements it will simply give you a warning, that you are missing a peer-dependency. 

In my case, module A will never be used alone anyway. It is meant purely as a plugin for my core project, so there is really no reason for it to care, which version of Vue is being used, it actually only cares that the core-project is being used. So the only dependency I need to put in it, is one linking it to my core project. 
Module A is also currently included IN the core-project directory, meaning that it has full access to any and all modules in the node_modules directory of the core-project. If I were to move the modules somewhere else, then I would have to add Vue as an extra dependency or a peer-dependency.

```json
{
  "name": "module-a",
  "version": "1.0.0",
  "description": "a module for the core project",
  "main": "index.js",
  "author": "Becca",
  "license": "MIT",
  "dependencies": {
    "core-project": "1.0.x"
  }
}
```
## Link the module with npm link for development
:::sticky bash: link module for development
```bash
# in module
npm link
```
```bash
# in core project
npm link module-a
```
:::

So far the new module has actually not been included in the core-project yet. We can of course just change our current imports to follow the new path of where we put our module A. But long-term we want this module to be included as a dependency in the package.json of our core project. This would, however, mean, that we would have to move our module A to its own repository and publish it on the npm registry to then install it in our core project. 

While this would work just fine, it is very inconvenient for the development of module A. Every time we made changes to a component in module A we would have to publish the changes and execute `npm update` in our core-project, just to see the changes. And we really don't want to be publishing things for development purposes. 

The most annoying solution for this would be to manually change the imports of each component that is coming from a module, every time we are developing this module. This process seems very tedious however, and we might end up forgetting to change it back somewhere. 

A slightly less annoying solution might be hosting the module not on the npm registry but on Github or a similar platform. Here we would have the possibility of changing our dependency during development to always take the head of a specified branch for that module. This would enable us to see our changes without having to publish them. It would still mean, that for each change that you make in the module, you would have to commit and push the changes, then execute `npm install` in the core project and rebuild your app. Depending on your typing speed, your internet connection and the efficiency of your build-process, this might take a few minutes. For each tiny change. Obviously, we don't want that either. 

Fortunately, npm has an easy solution for this, called `npm link`. This will essentially tell your core project to ignore the original dependency and instead look for the module locally in a specified directory. Just what we were looking for.

Npm link is a two-step process: creating a symlink in the module directory and then linking the installation target of the core-project to the symlink of the module directory.

### Create a symlink in the module directory
This step is simple enough. In your preferred terminal change into your module directory and execute npm link. 
```bash
cd path-to-module
npm link
```
This will create a symlink in the global npm directory that links to your module directory. This means that now, locally on your computer, npm will always know where to find module-a if you wish to link it from any project, anywhere. 

Cool stuff. 

### Linking the installation target to the module directory
Now all that's left to do is actually link the module from the core project:
```bash
cd path-to-core-project
npm link module-a
```

Just as simple and easy. This will create a directory in your node-modules directory for your module-a, which will always mirror what is currently in your local module directory. No rebuilding, no reinstalling, no updating. The module is directly linked to your project and you can develop just as easily as before. This means that now we can run our app again with module A and keep working on both.

:::tip
Extra note: `npm install` will override any linking you have done in your project. If you want to relink your package after having executed an npm install you only need to re-execute the second step: `npm link module-a`.
:::


## Turn your project into a "lerna"-project to manage linking and publishing modules

If you are managing all of your modules in one single repository it might be worth it to introduce lerna. Lerna will help you link your packages and publish them with the correct versions. It requires some set up though, so I would advise reading into it a little bit. If you are interested in Lerna, check it out on [github](https://github.com/lerna/lerna)
