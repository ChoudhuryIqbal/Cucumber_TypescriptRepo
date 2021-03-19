import { browser, element, by, By, $, $$, ExpectedConditions } from 'protractor';
import { async } from 'q';
import { callbackify } from 'util';
import { calpage } from '../pages/calpage';

var calc = new calpage();
describe("CalculatorTest", () => {
  it("Add functionality", async () => {
    browser.get("https://juliemr.github.io/protractor-demo/");

    await calc.firstBox.sendKeys("1");
    await calc.secondBox.sendKeys("2");

    await calc.goBtn.click();
    await browser.sleep(5000);

    let result = await calc.result.getText();
    await expect(result).toEqual("3");

  })
})

