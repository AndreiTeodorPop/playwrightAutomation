import {type Locator, type Page} from '@playwright/test';

export class CartPage {

    readonly page: Page;
    readonly noOfProducts: string;
    readonly deleteProduct: Locator;

    constructor(page: Page) {
        this.page = page;
        this.noOfProducts = '//tbody[@id="tbodyid"]/tr/td[2]'
        this.deleteProduct = this.page.locator('//a[contains(@onclick, "deleteItem")]')
    }

    async checkProductsInCart(productName: string) {
        const productsInCart = await this.page.$$(this.noOfProducts)
        for (const product of productsInCart) {
            console.log(await product.textContent())
            if (productName === await product.textContent()) {
                return true;
            }
        }
    }

    async deleteProductInCart(productName:string) {
        const productsInCart = await this.page.$$(this.noOfProducts)
        for (const product of productsInCart) {
            if (productName === await product.textContent()) {
                await this.deleteProduct.click()
            }
        }
    }
}