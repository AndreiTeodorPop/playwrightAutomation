const {test, expect} = require('@playwright/test')

test('Boostrap dropdown', async ({page}) => {
    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2')

    const agree = await page.locator('.css-47sehv')
    await expect(agree).toBeVisible()
    await expect(agree).toBeEnabled()
    await agree.click()

    await page.locator('.multiselect').click() // click on the dropdown

    // 1)
    const options = await page.locator('ul>li label input')
    await expect(options).toHaveCount(11)

    // 2)
    const optionsArray = await page.$$('ul>li label input')
    await expect(optionsArray.length).toBe(11)

    // 3) select options from dropdown
    const optionsBoot = await page.$$('ul>li label')
    for (let option of optionsBoot) {
        const value = await option.textContent()
        console.log("Value is: ", value)
        if(value.includes('Angular') || value.includes('Java')) {
            await option.click()
        }
    }


    await page.waitForTimeout(5000)
})