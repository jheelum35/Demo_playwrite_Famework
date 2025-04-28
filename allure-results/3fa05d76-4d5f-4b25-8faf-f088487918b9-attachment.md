# Test info

- Name: User should be able to log in successfully
- Location: C:\Demo_project_git\myplyprj\tests\LoginTest.spec.ts:5:5

# Error details

```
Error: page.waitForSelector: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#username') to be visible

    at WebTool.waitForElementAndFill (C:\Demo_project_git\myplyprj\utils\WebTool.ts:21:21)
    at LoginPage.login (C:\Demo_project_git\myplyprj\page\Loginpage.ts:22:28)
    at C:\Demo_project_git\myplyprj\tests\LoginTest.spec.ts:8:5
```

# Page snapshot

```yaml
- banner:
  - link "Website for automation practice":
    - /url: /
    - img "Website for automation practice"
  - list:
    - listitem:
      - link " Home":
        - /url: /
    - listitem:
      - link " Products":
        - /url: /products
    - listitem:
      - link " Cart":
        - /url: /view_cart
    - listitem:
      - link " Signup / Login":
        - /url: /login
    - listitem:
      - link " Test Cases":
        - /url: /test_cases
    - listitem:
      - link " API Testing":
        - /url: /api_list
    - listitem:
      - link " Video Tutorials":
        - /url: https://www.youtube.com/c/AutomationExercise
    - listitem:
      - link " Contact us":
        - /url: /contact_us
- heading "Login to your account" [level=2]
- textbox "Email Address"
- textbox "Password"
- button "Login"
- heading "OR" [level=2]
- heading "New User Signup!" [level=2]
- textbox "Name"
- textbox "Email Address"
- button "Signup"
- contentinfo:
  - heading "Subscription" [level=2]
  - textbox "Your email address"
  - button ""
  - paragraph: Get the most recent updates from our site and be updated your self...
  - paragraph: Copyright © 2021 All rights reserved
- insertion:
  - iframe
- insertion:
  - iframe
```

# Test source

```ts
   1 | // utils/WebTool.ts
   2 |
   3 | import { Page } from '@playwright/test';
   4 |
   5 | export class WebTool {
   6 |   private page: Page;
   7 |
   8 |   constructor(page: Page) {
   9 |     this.page = page;
  10 |   }
  11 |
  12 |   async waitForElementAndClick(selector: string): Promise<void> {
  13 |     await this.page.waitForSelector(selector);
  14 |     await this.page.click(selector);
  15 |   }
  16 |   async accessUrl(url: string): Promise<void> {
  17 |     await this.page.goto(url);
  18 |
  19 |   }
  20 |   async waitForElementAndFill(selector: string): Promise<void> {
> 21 |     await this.page.waitForSelector(selector);
     |                     ^ Error: page.waitForSelector: Test timeout of 30000ms exceeded.
  22 |     await this.page.click(selector);
  23 |   }
  24 |   async CheckElemntVisibleAndClick(selector: string): Promise<void> {
  25 |     await this.page.waitForSelector(selector, { state: 'visible' });
  26 |     await this.page.click(selector);
  27 |   }
  28 |   
  29 |   async takeScreenshot(options?: any): Promise<void> {
  30 |     await this.page.screenshot(options);
  31 |   }
  32 |
  33 |
  34 |   
  35 |   // Select an option from a dropdown by visible text or value
  36 |   async selectDropdown(selector: string, option: string): Promise<void> {
  37 |     await this.page.selectOption(selector, { label: option });
  38 |   }
  39 |
  40 |   // Press a key (like Enter, Tab, etc.) inside a specified field
  41 |   async pressKey(selector: string, key: string): Promise<void> {
  42 |     await this.page.press(selector, key);
  43 |   }
  44 |
  45 |   // Type in an input field
  46 |   async type(selector: string, value: string): Promise<void> {
  47 |     await this.page.type(selector, value);
  48 |   }
  49 |
  50 |   async clickOnElementByPosition(selector: string, position: number): Promise<void> {
  51 |     const elements = this.page.locator(selector);
  52 |     await elements.nth(position - 1).click(); // position 1 = first element
  53 |   }
  54 |   
  55 |   // Wait for a selector to appear on the page
  56 |   async waitForSelector(selector: string): Promise<void> {
  57 |     await this.page.waitForSelector(selector);
  58 |   }
  59 |
  60 |   // Screenshot utility
  61 |   async screenshot(options?: any): Promise<void> {
  62 |     await this.page.screenshot(options);
  63 |   }
  64 |
  65 |   // Check if an element is visible
  66 |   async isVisible(selector: string): Promise<boolean> {
  67 |     return await this.page.isVisible(selector);
  68 |   }
  69 | }
  70 |
```