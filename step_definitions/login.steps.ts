import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { BASE_URL, USER_EMAIL, USER_PASSWORD } from '../utils/globalVariables';

let loginPage: LoginPage;

Given('I visit the login page', async function () {
  loginPage = new LoginPage(globalThis.page);  
  await globalThis.page.goto(BASE_URL);  
});

Given('I accept the cookie consent', async function () {
  await loginPage.acceptCookieConsent();  
});

When('I enter my login credentials', async function () {
  await loginPage.clickLoginButton(); 
  await loginPage.enterCredentials(USER_EMAIL, USER_PASSWORD);  
  await loginPage.submitLogin();  
});

Then('I should be logged in successfully', async function () {
  const loginSuccessMessage = await globalThis.page.innerText('.login-success');  
  expect(loginSuccessMessage).toContain('Logged in successfully');  
});
