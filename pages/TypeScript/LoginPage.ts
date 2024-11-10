import {type Locator, type Page} from '@playwright/test';

export class LoginPage {

    readonly page: Page;
    readonly url: string;
    readonly loginLink: Locator
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.url = 'https://demoblaze.com/'
        this.loginLink = page.locator('#login2')
        this.usernameInput = page.locator('#loginusername')
        this.passwordInput = page.locator('#loginpassword')
        this.loginButton = page.locator('//button[normalize-space()="Log in"]')
    }

    async gotoLoginPage() {
        await this.page.goto(this.url)
    }

    async login(username: string, password: string) {
        await this.loginLink.click()
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.loginButton.click()
    }
}