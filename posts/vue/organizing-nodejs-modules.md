---
date: 2020-05-19
author: Becca
lang: en
title: Organizing Node.js modules
thumbnail: ./node-orga.svg
tags:
    - node
    - vue
---

:::hero #6C63FF
![Lost without structure](./node-orga.svg)
:::

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
  "peerDependencies": {
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

Let's start with just one Module. How about (great surprise) module A. 
The first thing I want to do ist move everything that belongs to that module into a seperate folder and turn it into an isolated node module. 
Moving everything to a special folder is simple enough. Turns out: creating a node module is just as easy. All you need is a package.json file in your module folder and tada: node module. 

The package.json needs to have some properties, while some ar just nice to have. "name" and "version" are required fields. The "main" property will let you define an entry point for your module. It's not a required field and defaults to "index.js". I'd always include it anyway, just because I'm not a big fan of having to much implicit information. 

Creating a package.json file is not a lot of work, but if you want npm to take care of that for you, you could always use the command line tool `npm init` from inside the modlue folder. It will ask you a few questions and then generate the package.json for you. 

This is my inital package.json for my module A:

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
All I want this file to do, is export each of the vue components, that need to be imported into my core project: 

```js
export { default as ModuleA } from './ModuleA.vue';
```
Now I can import the Vue-component "ModuleA" from anywhere in my core-project once the module has been installed or linked (explanation further down.) 
```js
import { ModuleA } from "module-a";
```
## Use peer-dependencies for plug-ins

You'll notice, that our package.json so far doesn't list any dependencies. However, our Module obviously uses vue.js, so this module will not work as as standalone repository. We could remedy this by simply adding the missing dependencies and dev-dependencies to the package.json of our module. 

As an inital setup this will work just fine. Let's say you are using vue version "2.5.17" in your core project. If we now add the same vue version to our module, npm will be smart enough to not install vue twice. When going thorugh the depencies of Module A it will see that vue version "2.4.17" is already installed and just leave it at that. 

What happens though if we decide to update vue in our core project and forget to update vue in our Module A? Npm will now see two conflicting versions a vue and just end up installing them both to satisfy everyone's needs. 

```
core-proejct
├── vue@2.7.2
└─┬ module-a
  └── vue@2.5.17
```
While this will still build correctly and give you functional code, it will add extra unnecessary code, that you really don't need. Imaging having 5 tiny modules, each with its own vue version. The modules themselves might be miniscule, but by installing 5 different versions of vue.js your code base will end up gowing significantly with each module, that you add. We don't really want that. 

For this, npm lets us use "peer depencencies". Peer depencencies will let us specify what the core project needs in order to use the module. By adding a peer dependency you can actuall tell npm: "If I'm being used an another project, please make sure that the project is using vue at a minimum verion of 2.x". If you then install the module in a project that does not fulfill those requirements it will simply give you a warning, that you are missing a peer-dependency. 

In my case, Module A will never be used alone anyway. It is meant purely as a plugin for my core project, so there is really no reason for it to care, which version of vue is being used, it acutally only cares that the core-project is being used. So the only peer-dependecy I need to put in it, is one linking it to my core project. 

```json
{
  "name": "module-a",
  "version": "1.0.0",
  "description": "a module for the core project",
  "main": "index.js",
  "author": "Becca",
  "license": "MIT",
  "peerDependencies": {
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

So far the new module has acutually not been included the core-project yet. We can of course just change our current imports to follow the new path of where we put our module A. But long-term we want this module to be included as a dependency in the package.json of our core project. This would, however, mean, that we would have to move our module A to it's own repository and publish it on the npm registry to then install it in our core project. 

While this would work just fine, it is very inconvinient for the development of module A. Everytime we made changes to a compnent in module A we would have to publish the changes and execute `npm update` in our core-project, just to see the changes. And we realy don't want to be publishing things for develpment purposes. 

The most annoying solution for this would be to manually change the imports of each component that is comming from a module, every time we are developing this modlue. This process seems very tedious however, and we might end up forgetting to change it back somewhere. 

A slightly less annoying solution might be hosting the module not on the npm registry but on github or a similar platform. Here we would have the possiblity of changing our dependency during development to always take take the head of a specified branch for that module. This would enable us to see our changes without having to publish them. It would still mean, that for each change that you make in the module, you would have to commit and push the changes, then execute `npm install` in the core project and rebuild your app. Depending on you typing speed, your internet connection and the efficiency of your build-process, this might take a few minutes. For each tiny change. Obviously, we don't want that either. 

Fortunately, npm has an easy solution for this, called `npm link`. This will essentially tell your core project to ignore the original dependency and instead look for the module locally in a specified directory. 

Npm link is a two step process: creating a symlink in the module directory and then linking the installation target of the core-project to the symlink of the module directory.

### Create a symlink in the module directory
This step is simple enough. In your preferred terminal change into your module directory and execute npm link. 
```bash
cd path-to-module
npm link
```
This will create a symlink in the global npm directory that links to your module diretory. This means that now, locally on your computer, npm will always no where to find module-a if you wish to link it from any project, anywhere. 

Cool stuff. 

### Linking the installation target to the module directory
Now all that's left to do is acutally link the module from the core project:
```bash
cd path-to-core-project
npm link module-a
```

Just as simple and easy. This will create a directory in your node-modules directory for your modlue-a, which will always mirror what is currently in your local module directory. No rebuilding, no reinstalling, no updating. The module ist direktly linked to your project and you can develop just as easily as before. Which means that now we can run our app again with module A and keep working on both.

Extra note: `npm install` will override any linking you have done in your project. If you want to relink your package after having executed an npm install you only need to reexecute the second step: `npm link module-a`.


## Let lerna link your modules for you 
