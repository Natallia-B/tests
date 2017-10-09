var webdriver = require('selenium-webdriver'),
By = webdriver.By,
until = webdriver.until;

var driver = new webdriver.Builder()
.forBrowser('chrome')
.build();

driver.get('http://next.primary-intel.com')
  .then(function () {
      return driver.findElement(By.id('username_id')).sendKeys('rallen@primary-intel.com');
  })
  .then(function () {
      return driver.findElement(By.id('password_id')).sendKeys('mega plex 17');
  })
  .then(function () {
      return driver.findElement(By.xpath('.//*[@id="signin-form_id"]/button')).click();
  })
  .then(function () {
      return driver.wait(until.titleIs('Dashboard | TruVoice'), 2000);
  })

let selector = driver.findElement(By.xpath('//*[@id="header"]/ul/li[3]/a'));
selector.click();
driver.findElement(By.id('nav-search')).sendKeys('Xactly');
driver.findElement(By.xpath('.//*[@id="cdp-list"]/li[890]/a')).click();
// driver.sleep(10000);
// driver.wait(driver.findElement(By.xpath('.//div[@id="price-position-tile"]/descendant::a[@href = "/dashboard/price-position"][1]')).isDisplayed(),10000);
// driver.findElement(By.xpath('.//div[@id="price-position-tile"]/descendant::a[@href = "/dashboard/price-position"][1]')).click();
//*[@id="cdp-list"]/li[890]/a

// selector.sendKeys('webdriver.Key.ENTER');
// driver.wait(until.titleIs('Banana Song - Google Search'), 1000);
driver.quit();
