import test from "@playwright/test";
import { LoginPage } from "../page/Loginpage";

// tests/login.spec.ts
test('User should be able to log in successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToUrl("https://automationexercise.com/")
    await loginPage.login('admin', 'password');
    // Login with provided credentials


   
  });