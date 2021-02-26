//bring in the function I want to use jest to test
const { generateText, checkAndGenerate } = require("./util");
//Bring in puppeteer for e2e testing
const puppeteer = require("puppeteer");

//function to run a unit test the code we want to test
test("Should output name and age", () => {
  const text = generateText("Thomas", 50);
  expect(text).toBe("Thomas (50 years old)");
  // const text2 = generateText('Anna', 33);
  // expect(text2).toBe('Anna (33 years old)');
});
//Second unit test confirms that there isn't anything within the inputs
// test('Should output data=less text', () => {
//      const text = generateText('', null);
//      expect(text).toBe(' (null years old)');
// });

//Integration test
test("should generate a valid text output", () => {
  const text = checkAndGenerate("Thomas", 50);
  expect(text).toBe("Thomas (50 years old)");
});

// e2e testing
test('Should generate an element with text and correct class', async () => {
  const browser = await puppeteer.launch({
    headless: false,//can set this to true and leave off the next two lines the purpose of headless browser is I don't need to see the output though it is nice.
    slowMo: 80,
    args: ["--window-size=192, 1080"],
  });
  const page = await browser.newPage();
  await page.goto(
    "http://127.0.0.1:5500/31.%20testing-01-starting-setup/index.html"
  );
  await page.click('input#name');
  await page.type('input#name', 'Test');
  await page.click('input#age');
  await page.type('input#age', '44');
  await page.click('#btnAddUser');
  const finalText = await page.$eval('.user-item', el => el.textContent);
  expect(finalText).toBe('Test (44 years old)');
}, 25000);

//In order to get the above to work properly without timing out or running into memory leak issues
//I had to set the timeout timer for more than ten seconds.

//Async code




