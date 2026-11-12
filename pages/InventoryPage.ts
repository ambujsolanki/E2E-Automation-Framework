import { expect, type Locator, type Page } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly addToCartBackpackButton: Locator;
  readonly shoppingCartBadge: Locator;
  readonly cartIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    // Locators for the inventory elements
    this.addToCartBackpackButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.shoppingCartBadge = page.locator('.shopping_cart_badge');
    this.cartIcon = page.locator('.shopping_cart_link');
  }

  // Action method to click the add to cart button
  async addBackpackToCart() {
    await this.addToCartBackpackButton.click();
  }

  // Helper method to retrieve the number inside the cart badge
  async getCartItemCount() {
    return await this.shoppingCartBadge.textContent(); 
  }
  
  // Navigate to the cart
  async goToCart() {
    await this.cartIcon.click();
  }
}