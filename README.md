# * Please review [Top Starred Boilerplates](https://bestofjs.org/projects?tags=boilerplate)

# Boilerplate on top of CRA

* All inbox-ed stuff from `create-react-app` like hot reload and service worker
* Pages router on `react-router-dom` with easy reindexing
* UI framework on Bootstrap 4 with `reactstrap`
* Some globals preconfigured (`L` for logs, `G` for globals, `React` to not include in every new component)
* Common Layout for all pages
* Initdata parsing including base64 encoded json
* Webpack 4 ready
* No Redux or Mobx included! Feel free to set up state management in your own way ;)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

If you newbie to all this React-* stuff - you *should* study referred original [README](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) first!


## Howto's

to install dependencies:
* run `npm i`

to begin develop with webpack dev server:
* run `npm start`

to build static production bundle:
* run `npm run build`

to add new page:
* create component in src/pages/PageNamePage.js
* run `npm run reindex-pages`
* add route to src/routes.js

## Refs

* [CRA readme](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md)
* https://github.com/reactstrap/reactstrap
* https://github.com/reduction-admin/react-reduction
