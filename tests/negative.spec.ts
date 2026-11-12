import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Negative UI Tests - Authentication', () => {
  
  test('User cannot log in with locked out credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    // Attempt login with a known bad user provided by SauceDemo
    await loginPage.goto();
    await loginPage.login('locked_out_user', 'secret_sauce');
    
    // Assert the exact error message appears
    const errorText = await loginPage.getErrorMessage();
    expect(errorText).toContain('Epic sadface: Sorry, this user has been locked out.');
  });

  test('User cannot log in with a missing password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    // Attempt login with standard user but blank password
    await loginPage.goto();
    await loginPage.login('standard_user', '');
    
    // Assert the validation warning
    const errorText = await loginPage.getErrorMessage();
    expect(errorText).toContain('Epic sadface: Password is required');
  });

});