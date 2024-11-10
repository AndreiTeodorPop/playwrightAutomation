const {test, expect} = require('@playwright/test')

test('Testing SoftAssertions', async ({page}) => {

    await page.goto('https://demoblaze.com/index.html')

    // Hard assertions - if it fails it will terminate the code/program
    await expect(page).toHaveTitle('STORE')
    await expect(page).toHaveURL('https://demoblaze.com/index.html')
    await expect(page.locator('.navbar-brand')).toBeVisible()

    // Soft assertions - if it fails it will not terminate the code/program
    await expect.soft(page).toHaveTitle('STORE123')
    await expect.soft(page).toHaveURL('https://demoblaze.com/index.html')
    await expect.soft(page.locator('.navbar-brand')).toBeVisible()
})