let webdriver = require('selenium-webdriver'),
  webAssert = require('assert'),
  assert = require('chai').assert,
  chai = require('chai'),
  expect = require('chai').expect,
  should = chai.should();

const { Builder, By, Key, until } = require('selenium-webdriver');

describe('Homepage Test', function() {
  let driver;

  before(async () => {
    driver = await new webdriver.Builder().forBrowser('chrome').build();
  });

  it('should load url', async () => {
    await driver.get('http://localhost:3000/homepage/');
    await driver.sleep(5000);
  });

  it('should load homepage markup', async () => {
    let homepage = await driver.wait(until.elementLocated(By.id('Carousel')));
    expect(homepage).to.exist;
  });

  after(async () => {
    await driver.sleep(2000);
    driver.close();
  });
});
