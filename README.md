# vuejs-todo-unit-test

> A Vue.js project

### Features

* Node.js
* Vue
* Mongodb( deployd app ) *if you want to use localstorage, just checkout `netlify-master` branch.*

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test

# install deployd db directory
dpd create db

# build deployd db collection
cd db & dpd -d
set deployd `Collection`
  - todos :
    - id
    - todo(string, required)
    - isDone(boolean)

```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
