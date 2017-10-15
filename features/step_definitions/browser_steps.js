let webdriver = require('selenium-webdriver');
let {defineSupportCode} = require('cucumber');
let chai = require('chai');
let expect = chai.expect;

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
    When(/^I navigate to '(.+)'$/, function (name) {
      let data = {
          'Research': {
              selector: By.xpath('.//*[@id="sidebar"]/div[1]/ul/li[2]/a'),
              elText: 'Research'},
          'Sample': {
              selector: By.xpath('.//*[@id="sidebar"]/div[1]/ul/li[2]/ul/li[1]/a'),
              elText:'Sample'},
      };
      let self = this;
      
      return Promise.resolve()
           .then(()=>{
            return self.driver.wait(()=>{
              return self.driver.findElement(data[name].selector)
            }, 5000)
           })
           .then(()=>{
            return self.driver.findElement(data[name].selector).isDisplayed()
           })
           .then(()=>{
            return self.driver.findElement(data[name].selector).click()
           })
           .then(()=>{
            if(data[name].elText){
                return self.driver.findElement(data[name].selector).getText();
            }
           })
           .then((text)=>{
            if(text){
                // if(text !== data[name].elText ) throw new Error('non visible');
                expect(text).to.equal(data[name].elText);
            }
          });

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
