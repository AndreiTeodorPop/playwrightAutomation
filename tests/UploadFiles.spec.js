const {test, expect} = require('@playwright/test')

test('Single file', async ({page}) => {
    await page.goto('https://demo.automationtesting.in/FileUpload.html')

    await page.waitForSelector('[name="input4[]"]')

    await page.locator('[name="input4[]"]').setInputFiles('tests/uploadFiles/SamplePicture.jpg');

    await page.waitForTimeout(5000)
})

// Run just this test with 'only' option
test.only('Multiple file', async ({page}) => {

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')

    await page.locator('#filesToUpload').setInputFiles(['tests/uploadFiles/SamplePicture.jpg',
        'tests/uploadFiles/SamplePicture2.jpg'])

    await expect(page.locator('#fileList li:nth-child(1)')).toHaveText('SamplePicture.jpg')

    await expect(page.locator('#fileList li:nth-child(2)')).toHaveText('SamplePicture2.jpg')

    await page.waitForTimeout(5000)

    // Removing files
    await page.locator('#filesToUpload').setInputFiles([])

    await expect(page.locator('#fileList li:nth-child(1)')).toHaveText('No Files Selected')

    await page.waitForTimeout(5000)
})

