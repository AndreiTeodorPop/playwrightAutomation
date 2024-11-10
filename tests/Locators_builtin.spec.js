/*
page.getByAltText() - to locate an element, usually image, by its text alternative.
page.getByPlaceholder() - to locate an input by placeholder.
page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.

page.getByLabel() to locate a form control by associated label's text.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
 */

const {test, expect} = require('@playwright/test')

test('Build-inLocators', async ({page}) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    // page.getByAltText() - to locate an element, usually image, by its text alternative.
    const logo = await page.getByAltText('company-branding')
    await expect(logo).toBeVisible()

    // page.getByPlaceholder() - to locate an input by placeholder.
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')

    // page.getByRole() to locate by explicit and implicit accessibility attributes.
    await page.getByRole('button', {type: 'submit'}).click()

    // page.getByText() to locate by text content.
    const name = await page.locator('//p[@class="oxd-userdropdown-name"]').textContent()

    // await page.pause();

    await expect(await page.getByText(name)).toBeVisible()

    await page.locator('//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name" and normalize-space()="My Info"]').click()

    await sleep(2000)

    await page.fill("[name='firstName']",'Andrei')

    await sleep(5000)



})

async function sleep(msec) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            throw new Error("Whoops!");
        }, msec);
    }).catch(alert);
}
