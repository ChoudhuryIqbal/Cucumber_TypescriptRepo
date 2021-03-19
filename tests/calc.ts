import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';
import { async } from 'q';

describe("CalculatorTest",  ()=> {
  it("Add functionality", async ()=> {
    browser.get("https://juliemr.github.io/protractor-demo/");
    await  element(by.model('first')).sendKeys("1");
    await element(by.model('second')).sendKeys('2');
    await element(by.id('gobutton')).click();
    await browser.sleep(5000);
    
     let result = await element(by.css('.ng-binding')).getText();
    await expect(result).toEqual("3");

  } )
  })

