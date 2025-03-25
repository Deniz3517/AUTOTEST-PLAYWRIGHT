import { Before, After } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';

let browser: Browser;
let page: Page;

Before(async function () {
  browser = await chromium.launch();
  page = await browser.newPage();
  globalThis.page = page;  
});

After(async function () {
  await browser.close();
});
