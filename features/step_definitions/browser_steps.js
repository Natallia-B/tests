var webdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {
  Given('Log in to Dashboard', function() {

    let self = this;
    return self.driver.get('https://next.primary-intel.com')

     .then(function () {
    return self.driver.wait(until.titleIs('TruVoice'),15000)
     }) 

     .then(function () {
        return self.driver.findElement(By.id('username_id')).sendKeys('rallen@primary-intel.com');
     }) 
     
     .then(function () {
        return self.driver.findElement(By.id('password_id')).sendKeys('mega plex 17');
     })

     .then(function () {
      return self.driver.findElement(By.xpath('.//*[@id="signin-form_id"]/button')).click();
   })
     
     .then(function () {
      return self.driver.wait(until.titleIs('Dashboard | TruVoice'),15000)
       }) 
       
     .then(()=>{
        self.driver.sleep(3000);
       });
  });

  Given('The side-bar menu is expanded', function() {
    // return Promise.resolve()
    // .then(function () {
      return this.driver.findElement(By.id('menu-trigger')).click();
    //  });
    });

  When('I navigate to research', function() {
    return Promise.resolve()
     .then(()=>{
      return this.driver.wait(()=>{
        return this.driver.findElement(By.xpath('//*[@id="sidebar"]/div[1]/ul/li[2]/a'))
      }, 5000)
     })
     .then(()=>{
      return this.driver.findElement(By.xpath('//*[@id="sidebar"]/div[1]/ul/li[2]/a')).isDisplayed()
     })
     .then(()=>{
      return this.driver.findElement(By.xpath('//*[@id="sidebar"]/div[1]/ul/li[2]/a')).click()
     })
     
});

  When('I navigate to sample', function() {
    return Promise.resolve()
     .then(()=>{
      return this.driver.wait(()=>{
        return this.driver.findElement(By.xpath('//*[@id="sidebar"]/div[1]/ul/li[2]/ul/li[1]/a'))
      }, 5000)
     })
     .then(()=>{
      return this.driver.findElement(By.xpath('//*[@id="sidebar"]/div[1]/ul/li[2]/ul/li[1]/a')).isDisplayed()
     })
     .then(()=>{
      return this.driver.findElement(By.xpath('//*[@id="sidebar"]/div[1]/ul/li[2]/ul/li[1]/a')).click()
     })
   
  });
  Then('I am on the Sample page', function() {
    return Promise.resolve()
    .then(()=>{
      return this.driver.wait(until.titleIs('Sample | TruVoice'),15000)
    }) 
    .then(()=>{
        this.driver.sleep(30000);
      });

  });
});
