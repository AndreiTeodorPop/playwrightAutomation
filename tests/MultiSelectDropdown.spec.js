const {test, expect} = require('@playwright/test')

test("Handle dropdown", async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    // Select multiple options from select dropdown

    const option = await page.locator('#colors')
    await option.scrollIntoViewIfNeeded();
    await option.selectOption(['Blue','Red','Yellow'])

    // await page.selectOption('#colors',['Blue','Red','Yellow'])

    // Assertions
    // 1) Check number of options in dropdown
    const options = await page.locator('#colors option')
    await expect(options).toHaveCount(7)

    // 2) Check number of options in dropdown using JS array
    const optionsArray = await page.$$('#colors option') // return an Array
    console.log("Number of options: ", optionsArray.length)
    await expect(optionsArray.length).toBe(7)

    // 3) Check presence of value in the dropdown
    const content = await page.locator('#colors').textContent()
    await expect(content.includes('Blue')).toBeTruthy()
    await expect(content.includes('Black')).toBeFalsy()

    await page.waitForTimeout(5000)

})