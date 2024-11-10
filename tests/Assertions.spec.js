const {test, expect} = require('@playwright/test')

// test hard assertions - if it fails it will terminate the code/program
test('Assertions Test', async ({page}) => {

    // open app url
    await page.goto(`https://demo.nopcommerce.com/register`)

    // 1) expect(page).toHaveUrl()              Page has URL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    // 2) expect(page).toHaveTitle()        Page has title\
    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    // 3) expect(locator).toBeVisible()     Element is visible
    const logoElement = await page.locator('.header-logo') //  CSS selector for class
    await expect(logoElement).toBeVisible()

    // 4) expect(locator).toBeEnabled()         Control is enabled(User can perform actions on that element)
    const searchStoreBox = await page.locator('#small-searchterms') //  CSS for id
    await expect(searchStoreBox).toBeEnabled()

    // 5) expect(locator).toBeChecked()         Radio/Checkbox is checked

    // radio button
    const maleRadioButton = await page.locator('#gender-male')
    await maleRadioButton.click()
    await expect(maleRadioButton).toBeChecked()

    // check box
    const newsLetterCheckbox = await page.locator('#Newsletter')
    await expect(newsLetterCheckbox).toBeChecked()

    // 6) expect(locator).toHaveAttribute()     Element has attribute
    const regButton = await page.locator('#register-button')
    await expect(regButton).toHaveAttribute('type', 'submit')

    // 7) expect(locator).toHaveText()          Element matches text
    await expect(await page.locator('.page-title h1')).toHaveText('Register')   // full text

    // 8) expect(locator).toContainText()          Element contains text
    await expect(await page.locator('.page-title h1')).toContainText('Reg')     // partial text

    // 9) expect(locator).toHaveValue(value)        Input has a value
    const emailInput = await page.locator('#Email')
    await emailInput.fill('test@demo.com')
    await expect(emailInput).toHaveValue('test@demo.com')

    // 10) expect(locator).toHaveCount()            List of elements has given length
    const options = await page.locator('select[name="DateOfBirthMonth"] option')
    await expect(options).toHaveCount(13)
    await expect(options).not.toHaveCount(14)

})