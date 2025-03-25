import { Page } from 'playwright';

export class LoginPage {
  constructor(private page: Page) {}


  async acceptCookieConsent() {
    await this.page.click('//button[contains(@class, "fc-cta-consent")]');
  }

  
  async clickLoginButton() {
    await this.page.click('//a[contains(text(), "Signup / Login")]');
  }

  
  async enterCredentials(email: string, password: string) {
    await this.page.fill('#email', email);
    await this.page.fill('#password', password);
  }


  async submitLogin() {
    await this.page.click('button[type="submit"]');
  }
}
