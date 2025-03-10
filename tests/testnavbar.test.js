import { test, expect } from "@playwright/test";

test("kiểm tra navbar Docs có hoạt động đúng", async ({ page }) => {
  // Debug request failures
  page.on("response", (response) =>
    console.log(`Response: ${response.status()} - ${response.url()}`)
  );
  page.on("requestfailed", (request) =>
    console.log(`Request failed: ${request.url()}`)
  );

  // Giảm khả năng timeout
  await page.goto("https://playwright.dev/", {
    timeout: 60000,
    waitUntil: "domcontentloaded",
  });

  // Kiểm tra tiêu đề
  await expect(page).toHaveTitle(/Playwright/);

  // Click vào Docs
  await page.getByRole("link", { name: "Docs" }).click();

  // Kiểm tra URL
  await expect(page).toHaveURL("https://playwright.dev/docs/intro");
});
