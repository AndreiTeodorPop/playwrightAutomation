const {test, expect} = require('@playwright/test')

test('Home Page Test', async ({page}) => {
    await page.goto('https://demoblaze.com/')

    // Login
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123')
    await page.click('//button[text()="Log in"]')

    // Home Page
    const products = await page.$$('.hrefch')
    expect(products).toHaveLength(9)

    // Logout
    await page.click('#logout2')
})

test('Add Product to cart Test', async ({page}) => {
    await page.goto('https://demoblaze.com/')

    // Login
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123')
    await page.click('//button[text()="Log in"]')

    // Add product to cart
    await page.locator('//a[normalize-space()="Samsung galaxy s6"]')
    await page.locator('//a[normalize-space()="Add to cart"]')
    page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('Product added.')
        await dialog.accept()
    })

    // Logout
    await page.click('#logout2')
})