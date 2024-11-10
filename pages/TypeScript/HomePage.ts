import {type Locator, type Page} from '@playwright/test';

export class HomePage {

    readonly page: Page;
    readonly productList: string;
    readonly addToCartBtn: Locator;
    readonly cartBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productList = '//*[@id="tbodyid"]/div/div/div/h4/a'
        this.addToCartBtn = page.locator('//a[normalize-space()="Add to cart"]')
        this.cartBtn = page.locator('#cartur')
    }

    async addProductToCart(productName: string) {
        const productList = await this.page.$$(this.productList)
        for (const product of productList) {
            if (productName === await product.textContent()) {
                await product.click()
                break
            }
        }
        this.page.on('dialog', async (dialog) => {
            if (dialog.message().includes('added')) {
                await dialog.accept();
            }
        })
        await this.addToCartBtn.click()
    }

    async gotoCart() {
        await this.cartBtn.click()
    }
}