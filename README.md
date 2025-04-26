🚀 Features
✅ End-to-end (E2E) browser automation

✅ Supports Chromium, Firefox, and WebKit

✅ Headed and Headless execution modes

✅ Parallel test execution

✅ Environment-specific testing (.env support)

✅ Allure Reporting integration

✅ Auto screenshots, videos, and traces on test failures
**
📦 Tech Stack**
playwrite 

Node.js (v18+ recommended)
TypeScript (optional but recommended)
Allure Reports (for beautiful test reports)
**🛠 Setup Instructions**
1. Clone the repository
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
2. Install dependencies
npm install
3. Install Playwright browsers
npx playwright install
🧪 How to Run Tests

npx playwright test

npx playwright test --headed

npx playwright test tests/example.spec.ts

****Run with specific browser:
****
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit

**📊 Allure Report**
To Generate Allure Report:
Run tests with Allure result output:
npx playwright test --reporter=allure-playwright
Generate and open the report:
npx allure generate ./allure-results --clean -o ./allure-report
npx allure open ./allure-report

**📁 Project Structure**

.
├── tests/                  # All test cases
│   └── example.spec.ts
├── pages/                  # Page Object Models (optional)
├── utils/                  # Utility functions (optional)
├── playwright.config.ts    # Playwright configuration file
├── .env                    # Environment-specific variables
├── package.json
└── README.md

**🧹 Useful Commands**

Command	Description
npx playwright test	Run all tests
npx playwright show-report	Show the default HTML test report
npx playwright codegen	Open Playwright Codegen for recording scripts
npx allure open ./allure-report	Open the Allure report

**📜 Environment Variables (.env)**


