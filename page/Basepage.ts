import { Page } from '@playwright/test';
import { WebTool } from '../utils/WebTool';

export class BasePage {
  protected page: Page;
    webTool: any;

  constructor(page: Page) {
    this.page = page;
    this.webTool = new WebTool(page); // Instantiate WebTool once in the base class
  }



    // Use webTool from BasePage (inherited)
  async navigateToUrl(url: string) {
    await this.webTool.accessUrl(url);
   
  }
}