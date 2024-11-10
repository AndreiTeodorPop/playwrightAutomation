exports.CartPage = class CartPage {

    constructor(page) {
        this.page = page;
        this.noOfProducts = '//tbody[@id="tbodyid"]/tr/td[2]'
        this.deleteProduct = '//a[contains(@onclick, "deleteItem")]'
    }

    async checkProductsInCart(productName) {
        const productsInCart = await this.page.$$(this.noOfProducts)
        for (const product of productsInCart) {
            console.log(await product.textContent())
            if (productName === await product.textContent()) {
                return true;
            }
        }
    }

    async deleteProductInCart(productName) {
        const productsInCart = await this.page.$$(this.noOfProducts)
        for (const product of productsInCart) {
            if (productName === await product.textContent()) {
                await this.page.locator(this.deleteProduct).click()
            }
        }
    }

}