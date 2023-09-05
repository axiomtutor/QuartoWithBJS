# Two-sentence Summary

This is a project built in Quarto (https://quarto.org/), then inserting BabylonJS (https://www.babylonjs.com/) and PyScript (https://pyscript.net/) applications.

The goal is to demonstrate that one can build very powerful mathematical presentations with very minimal editing, and share them immediately in the browser -- so that delivery of the product ot the consumer is practically trivial.  

# Quarto 

Quarto excels at most of this because it is edited only in a markdown language.  For instance, a page of the website can be built by the markdown code

```
---
title: "Demonstration"
---

# First Section

The integral $\int_0^1 x \ dx$ can be computed as

$$
\int_0^1 x \ dx = [x^2/2]_0^1 = 1^2/2 - 0^2/2 = \frac 1 2
$$
```

This will be rendered by Quarto as a fully styled and functioning website with a navigation bar linking to other pages, and so on.  The setup is not completely trivial, but not very hard either.  And once set, this shows just how fast it can be to build subsequent pages containing very attractive presentations of information.

# BabylonJS

BabylonJS is a 3D interactive graphics library designed to run right in the web browser.  Using this, one can produce extremely powerful and attractive applications to demonstrate mathematical ideas.  

Although this sacrifices some amount of ease of use, I have built an NPM package to make it much faster to initialize a scene and draw common basic mathematical objects like geometries, graphs, and position functions (i.e. objects moving through space as a function of time).  For now this package is called `babylon-helper-lib`.

When appropriately configured, the following TypeScript script draws the $xy$-plane and places a red sphere at coordinate (1,0,0) and a green sphere at (0,1,0) and a blue sphere at (0,0,1).

```
import { Vector3 } from "@babylonjs/core";
import { init, spinsphere, planeFromPtVec } from "babylon-helper-lib";

// Initial config.
const p2bag = init("#p2");
const p2scene = p2bag.scene;
p2bag.camera.upVector = new Vector3(0,0,1);
p2bag.camera.position = new Vector3(5,5,3);

// Axis plane.
planeFromPtVec(p2scene); // Note: the default is to produce the xy-plane.  Other planes are possible too, with more arguments.  

// Spinning spheres.
const s1 = spinsphere(p2scene, 1,0,0, 1,0,0).sphere;
const s2 = spinsphere(p2scene, 0,1,0, 0,1,0, .2, true).sphere;
const s3 = spinsphere(p2scene, 0,0,1, 0,0,1).sphere;
```

This takes a little programming knowledge, but the more I develop the package the less background the user will need.  (It will never be zero.  But perhaps I can get it to the point where the average mathematician can get set it up, without more pain than reading a paper that is slightly outside of your field. :))

# PyScript

PyScript also allows further interactivity with code.  In particular, you can put a Python programming "terminal" (or, really, a REPL) inside of a web page.  While mathematicians may *think* that this isn't that cool, it is.

Especially because of the SymPy library for Python.  This thing can compute integrals symbolically, or perform interesting comptuations with dihedgral groups.  Then hand you the LaTeX code to display it.  Then you can load MathJax in the browser and render that LaTeX to an SVG and put it in your web page.

I'll give demo code eventually -- for now I need to get the rest of this stuff up-and-running.

# The ambition

* Produce the standard mathematical chalkboard presentations, like geometries, diagrams, function graphs.
* Write as much as possible semantically (i.e. say what you want in a simple but formal language) and let software turn it into what you mean.
* Include interactivity, like mouse and keyboard inputs to 3D applications, and provide console inputs to code environments.

# Failure

These are big goals and I'm far from them.  

# How to use

This repo is meant as a mere proof of concept, maybe as a template for you to make your own similar stuff.  More than anything, right now it probably demonstrates my inability to write good code.  :)

## Build

To build it, make sure to have everything installed.  At the very least this will require Quarto, Git, and NPM.  I'm honestly not currently certain whether you need to have anything else installed -- I'll update these instructions as I learn.

Then clone the repo, point a terminal to the directory, and run `quarto render`.

Then point the terminal into the subdirectory `vite-project` and run `npm run build`.  (If it gives an error about dependencies, then you may need to first run `npm install @babylonjs/core`.)

Now move up a directory, back to the `quartobjspyscript` directory where you cloned the project.  Then run `quarto preview`.  This should pop up a tab in your browser and you should see the website!

At this point the website is hosted on your personal computer and not shared with anyone.  Feel free to edit and play!

## Publish

When you've tinkered with it enough, you can publish in a number of different ways.  The most "universal" is to just copy-paste the build files into your server -- but of course this assumes you already have a server.  The instructions below are for the rest of us mortals.

There are many other ways to publish, but I think the easiest is to get a Quarto Pub account for free.  Once you've signed up, keep your browser open and logged into Quarto Pub.  Then back in the terminal enter `quarto publish` and follow the steps described there.  