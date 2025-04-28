import test from "@playwright/test";
import { LoginPage } from "../page/Loginpage";

// tests/login.spec.ts
test('User should be able to log in successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
 
  
    // Login with provided credentials
    await loginPage.login('admin', 'password');
  
    // Verify if the welcome message is visible
   
  });