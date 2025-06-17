import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test('Verify inventory page contents after login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await inventoryPage.verifyInventoryPageVisible();
    await expect(inventoryPage.productTitle()).toHaveText('Products');

    const itemCount = await inventoryPage.getItemCount();
    expect(itemCount).toBeGreaterThan(0);

    await expect(inventoryPage.sortDropdown()).toBeVisible();
    await expect(inventoryPage.cartIcon()).toBeVisible();
});
