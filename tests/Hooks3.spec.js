const {test, expect} = require('@playwright/test')

let page;

test.beforeAll(async ({browser}) => {

    page = await browser.newPage();
    await page.goto('https://demoblaze.com/')

    // Login
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123')
    await page.click('//button[text()="Log in"]')
});

test.afterAll(async () => {
    // Logout
    await page.click('#logout2')
})

test('Home Page Test', async () => {
    // Home Page
    const products = await page.$$('.hrefch')
    expect(products).toHaveLength(9)
})

test('Add Product to cart Test', async () => {
    // Add product to cart
    await page.locator('//a[normalize-space()="Samsung galaxy s6"]')
    await page.locator('//a[normalize-space()="Add to cart"]')
    page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('Product added.')
        await dialog.accept()
    })
})