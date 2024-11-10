const {test, expect} = require('@playwright/test')
const {LoginPage} = require("../pages/LoginPage");
const {HomePage} = require("../pages/HomePage");
const {CartPage} = require("../pages/CartPage");

test('test', async ({page}) => {

    // Login
    const login = new LoginPage(page)
    await login.gotoLoginPage()
    await login.login('pavanol','test@123')
    await page.waitForTimeout(3000)

    // Home
    const home = new HomePage(page)
    await home.addProductToCart('Samsung galaxy s6')
    await page.waitForTimeout(3000)
    await home.gotoCart()

    // Cart
    const cart = new CartPage(page)
    const status = await cart.checkProductsInCart('Samsung galaxy s6')
    await expect(status).toBe(true)
    await cart.deleteProductInCart('Samsung galaxy s6')
    await page.waitForTimeout(3000)
})