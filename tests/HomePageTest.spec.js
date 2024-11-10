const {test, expect} = require('@playwright/test');
const assert = require("node:assert");

test('Home Page', async ({page}) => {
    await page.goto('https://demoblaze.com/index.html');

    const pageTitle = await page.title();

    const pageUrl = page.url();

    console.log('Page title is: ', pageTitle);
    console.log('Page URL is: ', pageUrl);

    await expect(page).toHaveTitle('STORE');

    await expect(page).toHaveURL('https://demoblaze.com/index.html');

    await page.close()
})