// utils/WebTool.ts

import { Page } from '@playwright/test';

export class WebTool {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async waitForElementAndClick(selector: string): Promise<void> {
    await this.page.waitForSelector(selector);
    await this.page.click(selector);
  }
  async accessUrl(url: string): Promise<void> {
    await this.page.goto(url);

  }
  async waitForElementAndFill(selector: string): Promise<void> {
    await this.page.waitForSelector(selector);
    await this.page.click(selector);
  }
  async CheckElemntVisibleAndClick(selector: string): Promise<void> {
    await this.page.waitForSelector(selector, { state: 'visible' });
    await this.page.click(selector);
  }
  
  async takeScreenshot(options?: any): Promise<void> {
    await this.page.screenshot(options);
  }


  
  // Select an option from a dropdown by visible text or value
  async selectDropdown(selector: string, option: string): Promise<void> {
    await this.page.selectOption(selector, { label: option });
  }

  // Press a key (like Enter, Tab, etc.) inside a specified field
  async pressKey(selector: string, key: string): Promise<void> {
    await this.page.press(selector, key);
  }

  // Type in an input field
  async type(selector: string, value: string): Promise<void> {
    await this.page.type(selector, value);
  }

  async clickOnElementByPosition(selector: string, position: number): Promise<void> {
    const elements = this.page.locator(selector);
    await elements.nth(position - 1).click(); // position 1 = first element
  }
  
  // Wait for a selector to appear on the page
  async waitForSelector(selector: string): Promise<void> {
    await this.page.waitForSelector(selector);
  }

  // Screenshot utility
  async screenshot(options?: any): Promise<void> {
    await this.page.screenshot(options);
  }

  // Check if an element is visible
  async isVisible(selector: string): Promise<boolean> {
    return await this.page.isVisible(selector);
  }
}
