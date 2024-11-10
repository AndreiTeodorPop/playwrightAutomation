import {test, expect} from '@playwright/test'

test('test1@sanity', async ({page}) => {
    console.log("This is a test message")
})

test('test2@sanity', async ({page}) => {
    console.log("This is a test message")
})

test('test3@regression', async ({page}) => {
    console.log("This is a test message")
})

test('test4@regression', async ({page}) => {
    console.log("This is a test message")
})

test('test5@sanity@regression', async ({page}) => {
    console.log("This is a test message")
})