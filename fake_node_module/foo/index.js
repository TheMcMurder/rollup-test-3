"use strict";

function sayFoo() {
  console.log('foo')
}

if (process.env.THEME_LIGHT && !process.env.THEME_DARK) {
  console.log(`Light theme active`)
  require('./theme_light.css');
}

if (process.env.THEME_DARK && !process.env.THEME_LIGHT) {
  console.log(`Dark theme active`)
  require('./theme_dark.css');
}

if (!process.env.THEME_DARK && !process.env.THEME_LIGHT) {
  console.log(`You didn't configure a theme, now you must suffer`)
  require('./theme_do_not_use.css');
}

module.exports = {
  sayFoo
}