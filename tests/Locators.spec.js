// const { test, expect } = require('@playwright/test');
import {test, expect} from "@playwright/test";

test('Locators', async ({page}) => {

    await page.goto('https://demoblaze.com/index.html');        // it will wait for promise to complete

    // click on login button - property

    // await page.locator('id=login2').click();
    await page.click('id=login2');

    // provide username - CSS
    // await page.locator('#loginusername').fill('pavanol');
    await page.fill('#loginusername','pavanol');

    // provide password - CSS
    await page.fill("input[id='loginpassword']",'test@123');

    // Click on login button - XPath
    await page.click("//button[normalize-space()='Log in']")

    // verify logout link presence - XPath
    const logoutLink = await page.locator("//a[normalize-space()='Log out']")

    await expect(logoutLink).toBeVisible()

    await page.close();

})