// const {test, expect} = require('@playwright/test')
import {test, expect} from "@playwright/test"

test.beforeAll(async ({browser}) => {
    console.log('this is beforeAll hook......')
})

test.afterAll(async ({browser}) => {
    console.log('this is afterAll hook......')
})

test.beforeEach(async ({browser}) => {
    console.log('this is beforeEach hook......')
})

test.afterEach(async ({browser}) => {
    console.log('this is afterEach hook......')
})


test.describe.skip('Group1', () => {
    test('Test1', async ({page}) => {
        console.log("this is test 1.....")
    })

    test('Test2', async ({page}) => {
        console.log("this is test 2.....")
    })
})

test.describe('Group2', () => {
    test('Test3', async ({page}) => {
        console.log("this is test 3.....")
    })

    test('Test4', async ({page}) => {
        console.log("this is test 4.....")
    })
})


