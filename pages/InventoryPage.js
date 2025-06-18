export class InventoryPage {
    constructor(page) {
        this.page = page;
    }

    // Locators
    productTitle() {
        return this.page.locator(".title");
    }

    inventoryItems() {
        return this.page.locator(".inventory_item");
    }

    cartIcon() {
        return this.page.locator(".shopping_cart_link");
    }

    addToCartButtons() {
        return this.page.locator('button:has-text("Add to cart")');
    }

    sortDropdown() {
        return this.page.locator(".product_sort_container");
    }

    bagAddtoCart(){
        return this.page.locator('#add-to-cart-sauce-labs-backpack');
    }

    bagRemovefromCart(){
        return this.page.locator('#remove-sauce-labs-backpack');
    }

    lightAddtoCart(){
        return this.page.locator('#add-to-cart-sauce-labs-bike-light');
    }

    lightRemovefromCart(){
        return this.page.locator('#remove-sauce-labs-bike-light');
    }

    tshirtAddtoCart(){
        return this.page.locator('#add-to-cart-sauce-labs-bolt-t-shirt');
    }

    tshirtRemovefromCart(){
        return this.page.locator('#remove-sauce-labs-bolt-t-shirt');
    }

    jacketAddtoCart(){
        return this.page.locator('#add-to-cart-sauce-labs-fleece-jacket');
    }

    jacketRemovefromCart(){
        return this.page.locator('#remove-sauce-labs-fleece-jacket');
    }

    onesieAddtoCart(){
        return this.page.locator('#add-to-cart-sauce-labs-onesie');
    }

    onesieRemovefromCart(){
        return this.page.locator('#remove-sauce-labs-onesie');
    }

    redTshirtAddtoCart(){
        return this.page.locator('#add-to-cart-test.allthethings()-t-shirt-(red)');
    }

    redTshirtRemovefromCart(){
        return this.page.locator('#remove-test.allthethings()-t-shirt-(red)');
    }

    // Actions
    async verifyInventoryPageVisible() {
        await this.page.waitForURL("**/inventory.html");
        await this.page.waitForSelector(".inventory_list");
    }

    async getItemCount() {
        return await this.inventoryItems().count();
    }

    async addAllItemsToCart() {
        const count = await this.addToCartButtons().count();
        for (let i = 0; i < count; i++) {
            await this.addToCartButtons().nth(i).click();
        }
    }
}
