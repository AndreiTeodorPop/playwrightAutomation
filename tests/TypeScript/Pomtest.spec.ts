import {test} from "@playwright/test";
import {HomePage} from "../../pages/TypeScript/HomePage";
import {LoginPage} from "../../pages/TypeScript/LoginPage";
import {CartPage} from "../../pages/TypeScript/CartPage";

test('Test with TypeScript', async ({page}) => {

    // Login
    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage()
    await loginPage.login('pavanol','test@123')
    await page.waitForTimeout(3000)

    // Home
    const homePage = new HomePage(page)
    await homePage.addProductToCart('Samsung galaxy s6')
    await homePage.gotoCart()
    await page.waitForTimeout(3000)

    // Cart
    const cartPage = new CartPage(page)
    await cartPage.checkProductsInCart('Samsung galaxy s6')
    await cartPage.deleteProductInCart('Samsung galaxy s6')
    await page.waitForTimeout(3000)
})