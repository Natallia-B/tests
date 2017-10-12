var webdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {
  Given('I am on Next Primary Intelligence signing in page', function() {
   
    return this.driver.get('https://next.primary-intel.com');
  });

  When('Enter login', function () {
    let self = this;
    return self.driver.wait(until.titleIs('TruVoice'),15000)

    .then(function () {
    return self.driver.findElement(By.id('username_id')).sendKeys('rallen@primary-intel.com');
    
  })
  // .then(()=>{
  //   self.driver.sleep(3000);
  // });
    
  })
  When('Enter password', function () {
    let self = this;
    // return self.driver.wait(until.titleIs('TruVoice'),15000)

    // .then(function () {
    return self.driver.findElement(By.id('password_id')).sendKeys('mega plex 17');
    
  })
  // .then(()=>{
  //   self.driver.sleep(3000);
  });
  

  

  // And('Enter password', function () {
  //   return driver.findElement(By.id('password_id')).sendKeys('mega plex 17');
  // });

  // And('I click log in', function () {
  //   return driver.findElement(By.xpath('.//*[@id="signin-form_id"]/button')).click();
  // });

  // Then('I should see {Dashboard | TruVoice}', function (text) {
  //   // var xpath = "//*[contains(text(),'" + text + "')]";
  //   var condition = until.titleIs({text});
  //   return this.driver.wait(condition, 5000);

// });

