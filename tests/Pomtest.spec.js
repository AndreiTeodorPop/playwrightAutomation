const { test, expect } = require('@playwright/test');

import {HomePage} from "../pages/HomePage";
import {LoginPage, PlaywrightDevPage} from '../pages/LoginPage'
import {CartPage} from "../pages/CartPage";

test.only('Pom test', async ({page}) => {

    // Login
    const login = new LoginPage(page)
    await login.gotoLoginPage()
    await login.login('pavanol','test@123')
    await page.waitForTimeout(3000)

    // Home
    const home = new HomePage(page)
    await home.addProductToCart('Samsung galaxy s6')
    await home.gotoCart()
    await page.waitForTimeout(3000)

    // Cart
    const cart = new CartPage(page)
    const status = await cart.checkProductsInCart('Samsung galaxy s6')
    await expect(status).toBe(true)
    await cart.deleteProductInCart('Samsung galaxy s6')
    await page.waitForTimeout(3000)
})




test('getting started should contain table of contents', async ({ page }) => {
    const playwrightDev = new PlaywrightDevPage(page);
    await playwrightDev.goto();
    await playwrightDev.getStarted();
    await expect(playwrightDev.tocList).toHaveText([
        `How to install Playwright`,
        `What's Installed`,
        `How to run the example test`,
        `How to open the HTML test report`,
        `Write tests using web first assertions, page fixtures and locators`,
        `Run single test, multiple tests, headed mode`,
        `Generate tests with Codegen`,
        `See a trace of your tests`
    ]);
});

test('should show Page Object Model article', async ({ page }) => {
    const playwrightDev = new PlaywrightDevPage(page);
    await playwrightDev.goto();
    await playwrightDev.pageObjectModel();
    await expect(page.locator('article')).toContainText('Page Object Model is a common pattern');
});