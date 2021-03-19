import { browser, by, $$, ExpectedConditions, element, ElementFinder } from "protractor";

export class calpage
{
  firstBox: ElementFinder;
  secondBox: ElementFinder;
  goBtn: ElementFinder;
  result: ElementFinder;


  constructor()
  {
    this.firstBox = element(by.model('first'));
    this.secondBox = element(by.model('second'));
    this.goBtn = element(by.id("gobutton"));
    this.result = element(by.css('.ng-binding'));


/*
    browser.get("https://juliemr.github.io/protractor-demo/");
    await  element(by.model('first')).sendKeys("1");
    await element(by.model('second')).sendKeys('2');
    await element(by.id('gobutton')).click();
    await browser.sleep(5000);
    
     let result = await element(by.css('.ng-binding')).getText();
    await expect(result).toEqual("3");
    */
  }
}


