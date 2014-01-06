![Build Status](https://travis-ci.org/twinlabs/brooch.png)

Introduction:
=============
1. [`brooch`](https://github.com/twinlabs/brooch) is a utility for building smart single-page web apps.
2. To get started, clone the repo, install dependencies (`npm install`), and then run the app (`npm start`).
3. Change whatever you like. Github Issues and Pull Requests accepted.

Stylesheets:
============
1. You can start writing LESS in `app/assets/stylesheets`. LESS files added here will be compiled to CSS by the app server – just be sure you reference the corresponding CSS file in a view template file.
2. If you just want to start writing styling without creating any new stylesheets, `base.less` is a great place to start.
3. The app takes advantage of a modified [`normalize.css`](https://github.com/necolas/normalize.css) stylesheet that gets included in `base.less`.

Markup:
=======
1. The app is set up to use Jade templates by default. Follow the convention in `app.js`/`app/views` to serve up new templates.
2. The base template (`application.jade`) includes Jade `block`s for:
  * `head` (which will be appended to the document's `<head>` element), 
  * `main` (appended to `<body>`, just before `<footer>`),
  * `foot` (appended to end of document immediately before `</body>`


UI-Building Niceties:
=====================
1. The `/ui` route mapping exists and it is intended to be used to prove-out UI elements and as a sandbox for UI components.
2. The app includes the 'Font Awesome' icon font by default.

Run App:
========
`npm start`

Run Test Suite:
===============
`npm test`

Directory Structure:
====================

```
|-- app
|   `-- assets
|   |   |-- fonts
|   |   |-- images
|   |   |-- javascripts
|   |   |-- stylesheets
|   `-- views
`-- config
`-- lib
`-- test
`-- vendor

```
