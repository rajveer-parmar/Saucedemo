import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Verify login page UI elements are visible', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();

    await expect(page).toHaveTitle(/Swag Labs/);
    await expect(loginPage.usernameInput()).toBeVisible();
    await expect(loginPage.passwordInput()).toBeVisible();
    await expect(loginPage.loginButton()).toBeVisible();
    await expect(loginPage.user_credentials()).toBeVisible();
    await expect(loginPage.user_password()).toBeVisible();
});

test('Verify failed login with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();

    await loginPage.login('invalid_user', 'invalid_pass');
    await expect(loginPage.errorMessage()).toBeVisible();
});

test('Verify successful login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();

    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory/);
});
