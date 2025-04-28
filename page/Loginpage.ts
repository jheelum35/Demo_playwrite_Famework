// pages/LoginPage.ts

import { WebTool } from "../utils/WebTool";
import { BasePage } from "./Basepage";



export class LoginPage extends BasePage {
    // Locators
    private usernameField = '//*[contains(@class,"login-form")]//input[@name="email"]';
    private passwordField = '//*[contains(@class,"login-form")]//input[@name="password"]';
    private loginButton = '//*[contains(@class,"login-form")]//button';
    private clickonsignbutton = '//*[contains(@class,"nav navbar-nav")]//a';
    constructor(page) {
      super(page); // Pass page to BasePage constructor

    }

    async login(username: string, password: string) {
        // Use webTool from BasePage (inherited)
        await this.webTool.clickOnElementByPosition( this.clickonsignbutton,4);
        await this.webTool.waitForElementAndFill(this.usernameField, "jheelumd@gmail.com");
        await this.webTool.waitForElementAndFill(this.passwordField, "London@123");
        await this.webTool.waitForElementAndClick(this.loginButton);
      }
    


}