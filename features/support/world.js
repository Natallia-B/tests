require('chromedriver')
let webdriver = require('selenium-webdriver');
let {defineSupportCode} = require('cucumber');


function CustomWorld() {
  this.driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
    global.By = webdriver.By;
    global.until = webdriver.until;
    // driver.Window.maximize();
    this.driver.manage().window().setSize(779, 431);
}

defineSupportCode(function({setWorldConstructor}) {
  setWorldConstructor(CustomWorld)
})