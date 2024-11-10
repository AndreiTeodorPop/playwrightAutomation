const {test, expect} = require('@playwright/test')

test('Test handle input box and radio button', async ({page}) => {


    await page.goto('https://demo.nopcommerce.com/register')

    // Inputbox - firstname
    await expect(await page.locator('//input[@name="FirstName"]')).toBeVisible()
    await expect(await page.locator('//input[@name="FirstName"]')).toBeEmpty()
    await expect(await page.locator('//input[@name="FirstName"]')).toBeEditable()
    await expect(await page.locator('//input[@name="FirstName"]')).toBeEnabled()

    await page.locator('//input[@name="FirstName"]').fill("John")
    // await page.fill('//input[@name="FirstName"]', "John")

    // Radio button
    // await page.locator('//input[@value="M"]').check()
    await page.check('//input[@value="M"]')
    await expect(await page.locator('//input[@value="M"]')).toBeChecked()
    await expect(await page.locator('//input[@value="M"]').isChecked()).toBeTruthy()        // male

    await expect(await page.locator('//input[@value="F"]').isChecked()).toBeFalsy()         // female

    await page.waitForTimeout(5000)     // pausing code
})