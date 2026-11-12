import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test.describe('SauceDemo Full E2E Checkout', () => {
  
  test('User can complete a full purchase journey', async ({ page }) => {
    // 1. Initialize Page Objects
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    // 2. Authentication
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    
    // 3. Inventory - Add to Cart
    await inventoryPage.addBackpackToCart();
    expect(await inventoryPage.getCartItemCount()).toBe('1');
    await inventoryPage.goToCart();

    // 4. Cart Review
    await expect(page).toHaveURL(/.*cart.html/);
    await cartPage.proceedToCheckout();

    // 5. Checkout - Shipping Info
    await expect(page).toHaveURL(/.*checkout-step-one.html/);
    await checkoutPage.fillShippingInfo('Ambuj', 'QA', '10115'); // using a Berlin ZIP code

    // 6. Checkout - Overview & Finish
    await expect(page).toHaveURL(/.*checkout-step-two.html/);
    await checkoutPage.finishCheckout();

    // 7. Final Assertion - Order Success
    await expect(page).toHaveURL(/.*checkout-complete.html/);
    const successText = await checkoutPage.getSuccessMessage();
    expect(successText).toContain('Thank you for your order!');
  });

});