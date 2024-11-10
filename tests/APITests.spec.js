import {test, expect} from "@playwright/test";

let userid;

// request and page are fixtures
test('Get users', async ({request}) => {
    const response = await request.get('https://reqres.in/api/users?page=2')
    console.log(await response.json())
    expect(response.status()).toBe(200)
})

test('Create users', async ({request}) => {
    const response = await request.post('https://reqres.in/api/users', {
        data: {
            "name": "andrei",
            "job": "tester"
        },
        headers: {
            "content-type": "application/json"
        }
    })
    console.log(await response.json())
    expect(response.status()).toBe(201)
    const res = await response.json();
    userid = res.id
})

test('Update users', async ({request}) => {
    const response = await request.put(`https://reqres.in/api/users/${userid}`, {
        data: {
            "name": "andrei",
            "job": "developer"
        },
        headers: {
            "content-type": "application/json"
        }
    })
    console.log(await response.json())
    expect(response.status()).toBe(200)
})

test('Delete users', async ({request}) => {
    const response = await request.delete(`https://reqres.in/api/users/${userid}`)
    expect(response.status()).toBe(204)
})