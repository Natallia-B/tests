require('chromedriver')
let webdriver = require('selenium-webdriver');
let {defineSupportCode} = require('cucumber');



function CustomWorld() {
  this.driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
    global.By = webdriver.By;
    global.until = webdriver.until;
}

defineSupportCode(function({setWorldConstructor}) {
  setWorldConstructor(CustomWorld)
})