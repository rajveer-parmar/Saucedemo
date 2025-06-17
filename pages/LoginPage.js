export class LoginPage {
    constructor(page) {
      this.page = page;
    }
  
    // Locators
    usernameInput() {
      return this.page.locator('#user-name');
    }
  
    passwordInput() {
      return this.page.locator('#password');
    }
  
    loginButton() {
      return this.page.locator('#login-button');
    }
  
    errorMessage() {
      return this.page.locator('[data-test="error"]');
    }
  
    user_credentials() {
      return this.page.locator('#login_credentials');
    }
  
    user_password() {
      return this.page.locator('.login_password');
    }
  
    // Actions
    async goto() {
      await this.page.goto('https://www.saucedemo.com/');
    }
  
    async negative_login(username, password) {
      await this.usernameInput().fill(username);
      await this.passwordInput().fill(password);
      await this.loginButton().click();
    }
  
    async login(username, password) {
      await this.usernameInput().fill(username);
      await this.passwordInput().fill(password);
      await this.loginButton().click();
    }
  }
  