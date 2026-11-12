import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

// 1. Define the test data array
const validUsers = [
  'standard_user',
  'problem_user',
  'visual_user'
];

test.describe('Data-Driven Authentication Tests', () => {
  
  // 2. Loop through the array
  for (const user of validUsers) {
    
    // 3. Dynamically inject the username into the test title
    test(`Login validation for: ${user}`, async ({ page }) => {
      const loginPage = new LoginPage(page);
      
      await loginPage.goto();
      
      // 4. Inject the username into the POM method
      await loginPage.login(user, 'secret_sauce');
      
      await expect(page).toHaveURL(/.*inventory.html/);
    });
    
  }
});