const {expect, test} = require('@playwright/test')

const url = 'https://ui.vision/demo/webtest/frames/'

test.skip('Frames', async ({page}) => {

    await page.goto(url)

    // total frames
    const totalFrames = page.frames()
    console.log("Number of frames", totalFrames.length)

    // approach 1: using name or url
    // const frame1 = await page.frame('name')      // use this if the name is present
    const frame1 = await page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_1.html'})
    await frame1.fill("[name='mytext1']", 'Hello')


    // approach 2: using frame locator
    const input = await page.frameLocator('frame[src="frame_1.html"]').locator("[name='mytext1']")
    await input.fill("Hello again")

    await page.waitForTimeout(5000)

})

test('Handle Inner Frames', async ({page}) => {

    await page.goto(url)

    const frame3 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})

    await frame3.locator("[name='mytext3']").fill('Welcome')

    // nested frame

    const childFrames = frame3.childFrames()
    await childFrames[0].locator('//*[@id="i6"]/div[3]/div').check()        // radio button

    await page.waitForTimeout(5000)

})