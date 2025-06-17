export class InventoryPage {
    constructor(page) {
        this.page = page;
        this.productTitle = () => this.page.locator('.title');
        this.inventoryItems = () => this.page.locator('.inventory_item');
        this.cartIcon = () => this.page.locator('.shopping_cart_link');
        this.addToCartButtons = () => this.page.locator('button:has-text("Add to cart")');
        this.sortDropdown = () => this.page.locator('.product_sort_container');
    }

    async verifyInventoryPageVisible() {
        await this.page.waitForURL('**/inventory.html');
        await this.page.waitForSelector('.inventory_list');
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
