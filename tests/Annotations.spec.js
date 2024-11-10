import {test, expect} from '@playwright/test'

// Only
test.only('test1', async ({page}) => {
    console.log('This is test 1')
})

// Skip
test.skip('test2', async ({page}) => {
    console.log('This is test 2')
})

test('test3', async ({page, browserName}) => {
    console.log('This is test 3')
    if(browserName === 'chromium') {
        test.skip()
    }
})

// Fix me
test('test4', async ({page}) => {
    test.fixme()
    console.log('This is test 4')
})

// Fail - the test is expected to fail, it will pass if the test fail
test('test5', async ({page}) => {
    test.fail()     // expected
    console.log('This is test 5')
    expect(2).toBe(1)           // actual
})

test('test6', async ({page, browserName}) => {
    console.log('This is test 6')
    if(browserName === 'chromium') {
        test.fail()
    }
    expect(2).toBe(1)           // actual
})

// Slow
test('test7', async ({page}) => {
    test.slow()
    test.setTimeout(5000)
    console.log('This is test 7')
    await page.goto('https://www.google.com')
})