# 🎭 Playwright E2E Automation Framework

An enterprise-grade UI and API test automation framework built with **Playwright** and **TypeScript**, demonstrating modern QA architecture and Continuous Integration.

## 🚀 Tech Stack
- **Framework:** Playwright
- **Language:** TypeScript
- **Design Pattern:** Page Object Model (POM)
- **CI/CD:** GitHub Actions

## 🏗️ Project Architecture
- **UI Testing:** Automates the complete checkout flow for SauceDemo (Login, Inventory, Cart, Checkout) including positive and negative authentication scenarios.
- **API Testing:** Validates REST endpoints (GET, POST) for Reqres.in, checking status codes and JSON response bodies using Playwright's `APIRequestContext`.
- **Data-Driven Testing:** Parameterized authentication flows to iterate over multiple user roles dynamically.

## ⚙️ CI/CD Pipeline
This repository is integrated with **GitHub Actions**. On every push to the `main` branch, the pipeline automatically:
1. Installs Node.js and dependencies.
2. Installs Playwright browsers.
3. Executes the full UI and API test suite in headless mode.
4. Uploads the HTML Test Report and failure traces as pipeline artifacts.

## 💻 How to Run Locally

**1. Clone the repository:**
\`\`\`bash
git clone https://github.com/ambujsolanki/E2E-Automation-Framework.git
cd your-repo-name
\`\`\`

**2. Install dependencies:**
\`\`\`bash
npm install
npx playwright install
\`\`\`

**3. Execute tests:**
- Run all tests: `npx playwright test`
- Run UI tests with browser visible: `npx playwright test --headed`
- View HTML Report: `npx playwright show-report`