const {test, expect} = require('@playwright/test')

test('Handling table', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    const table = await page.locator('#productTable') // CSS selector for ID

    // 1) count total number of rows and columns
    const columns = await table.locator('thead tr th')
    console.log('Number of columns:', await columns.count())
    expect(await columns.count()).toBe(4)


    const rows = await table.locator('tbody tr')
    console.log('Number of rows:', await rows.count())
    expect(await rows.count()).toBe(5)

    // 2) select check box for Smartwatch product
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: 'Smartwatch'
    })
    await matchedRow.locator('input').check()

    // 3) select multiple product by re-usable function
    await selectProduct(rows, page, 'Smartphone')
    await selectProduct(rows, page, 'Tablet')
    await selectProduct(rows, page, 'Wireless Earbuds')

    // 4) print all product details using a loop
    for (let i = 0; i < await rows.count(); i++) {
        const row = rows.nth(i);
        const tds = await row.locator('td');
        for (let j = 0; j < await tds.count() - 1; j++) {
            console.log(await tds.nth(j).textContent())
        }

    }

    // 5) read data from all pages in the table
    const pages = await page.locator('.pagination li a')    // CSS selector for class
    console.log('Number of pages in the table:', await pages.count())
    for (let p = 0; p < await pages.count(); p++) {
        if (p > 0) {
            await pages.nth(p).click()
        }
        for (let i = 0; i < await rows.count(); i++) {
            const row = rows.nth(i);
            const tds = await row.locator('td');
            for (let j = 0; j < await tds.count() - 1; j++) {
                console.log(await tds.nth(j).textContent())
            }

        }
    }

    await page.waitForTimeout(5000)
})

async function selectProduct(rows, page, name) {
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: name
    })
    await matchedRow.locator('input').check()
}