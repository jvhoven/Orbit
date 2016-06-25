# Orbit
> A modern age project management application.

[![Build Status](https://travis-ci.org/jvhoven/Orbit.svg?branch=master)](https://travis-ci.org/jvhoven/Orbit)

A project management application mainly for the purpose of learning new technologies. This project serves as a purpose to learn React, Redux and all the jazz around them.

![](https://cloud.githubusercontent.com/assets/5366355/16357604/b713211e-3afb-11e6-9289-6bf98fe3b7fb.png)

## Features List

These are the features I'm currently looking to implement.

* Project
    * Create a new project
    * Edit a project
    * Being able to add projects to another category
* Category
    * Create a new category
    * Rename a category
    * Delete a category
    * Rearrange categories

## Development setup

If you feel like helping with Orbit, have some great ideas you'd like to implement or have a heads-up I can learn from? Below are the steps to get started. Feel free to comment and/or make a pull request!

```sh
git clone https://github.com/jvhoven/orbit.git
cd orbit
npm install
npm start
npm test
```

Also be sure to use the ``webpack.config.js`` in order to have the benefits of the redux devtools. You can do so by editing ``server.js``.

```sh
var config = require('./webpack.config')
```

## Meta

Jeffrey van Hoven – jeffreyvanhoven@gmail.com -
[Github Profile](https://github.com/jvhoven/)

Distributed under the XYZ license. See ``LICENSE`` for more information.
