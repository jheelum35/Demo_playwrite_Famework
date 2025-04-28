export interface Tool {
    goto(url: string): Promise<void>;
    click(selector: string): Promise<void>;
    fill(selector: string, value: string): Promise<void>;
    type(selector: string, value: string): Promise<void>;
    press(selector: string, key: string): Promise<void>;
    waitForSelector(selector: string): Promise<void>;
    isVisible(selector: string): Promise<boolean>;
    screenshot(options?: any): Promise<void>;
    // add more methods if you want (hover, check, uncheck, etc.)
  }