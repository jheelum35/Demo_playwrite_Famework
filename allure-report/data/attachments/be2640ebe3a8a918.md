# Test info

- Name: User should be able to log in successfully
- Location: C:\Demo_project_git\myplyprj\tests\LoginTest.spec.ts:5:5

# Error details

```
Error: page.waitForSelector: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#username') to be visible

    at WebTool.waitForElementAndFill (C:\Demo_project_git\myplyprj\utils\WebTool.ts:17:21)
    at LoginPage.login (C:\Demo_project_git\myplyprj\page\Loginpage.ts:21:28)
    at C:\Demo_project_git\myplyprj\tests\LoginTest.spec.ts:10:21
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
  16 |   async waitForElementAndFill(selector: string): Promise<void> {
> 17 |     await this.page.waitForSelector(selector);
     |                     ^ Error: page.waitForSelector: Test timeout of 30000ms exceeded.
  18 |     await this.page.click(selector);
  19 |   }
  20 |   async CheckElemntVisibleAndClick(selector: string): Promise<void> {
  21 |     await this.page.waitForSelector(selector, { state: 'visible' });
  22 |     await this.page.click(selector);
  23 |   }
  24 |   
  25 |   async takeScreenshot(options?: any): Promise<void> {
  26 |     await this.page.screenshot(options);
  27 |   }
  28 |
  29 |
  30 |   
  31 |   // Select an option from a dropdown by visible text or value
  32 |   async selectDropdown(selector: string, option: string): Promise<void> {
  33 |     await this.page.selectOption(selector, { label: option });
  34 |   }
  35 |
  36 |   // Press a key (like Enter, Tab, etc.) inside a specified field
  37 |   async pressKey(selector: string, key: string): Promise<void> {
  38 |     await this.page.press(selector, key);
  39 |   }
  40 |
  41 |   // Type in an input field
  42 |   async type(selector: string, value: string): Promise<void> {
  43 |     await this.page.type(selector, value);
  44 |   }
  45 |
  46 |   // Wait for a selector to appear on the page
  47 |   async waitForSelector(selector: string): Promise<void> {
  48 |     await this.page.waitForSelector(selector);
  49 |   }
  50 |
  51 |   // Screenshot utility
  52 |   async screenshot(options?: any): Promise<void> {
  53 |     await this.page.screenshot(options);
  54 |   }
  55 |
  56 |   // Check if an element is visible
  57 |   async isVisible(selector: string): Promise<boolean> {
  58 |     return await this.page.isVisible(selector);
  59 |   }
  60 | }
  61 |
```