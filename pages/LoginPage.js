const { expect } = require('@playwright/test');

exports.LoginPage =
    class LoginPage {

    constructor(page) {
        this.page = page
        this.loginLink = "#login2"
        this.usernameInput = '#loginusername'
        this.passwordInput = '#loginpassword'
        this.loginButton = '//button[normalize-space()="Log in"]'
    }

    async gotoLoginPage() {
        await this.page.goto('https://demoblaze.com/')
    }

    async login(username, password) {
        await this.page.locator(this.loginLink).click()
        await this.page.locator(this.usernameInput).fill(username)
        await this.page.locator(this.passwordInput).fill(password)
        await this.page.locator(this.loginButton).click()
    }
}

exports.PlaywrightDevPage = class PlaywrightDevPage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.getStartedLink = page.locator('a', { hasText: 'Get started' });
        this.gettingStartedHeader = page.locator('h1', { hasText: 'Installation' });
        this.pomLink = page.locator('li', {
            hasText: 'Guides',
        }).locator('a', {
            hasText: 'Page Object Model',
        });
        this.tocList = page.locator('article div.markdown ul > li > a');
    }

    async goto() {
        await this.page.goto('https://playwright.dev');
    }

    async getStarted() {
        await this.getStartedLink.first().click();
        await expect(this.gettingStartedHeader).toBeVisible();
    }

    async pageObjectModel() {
        await this.getStarted();
        await this.pomLink.click();
    }
};