import { test, expect } from "@playwright/test";

test("kiểm tra thanh tìm kiếm với từ khóa 'installation'", async ({ page }) => {
  await page.goto("https://playwright.dev/", { waitUntil: "domcontentloaded" });

  // Gọi thanh tìm kiếm bằng tổ hợp phím Ctrl + K
  await page.keyboard.press("Control+K");

  // Chờ hộp thoại mở và ô nhập xuất hiện
  await page.getByRole("button", { name: "Search (Ctrl+K)" }).click();
  await page.getByRole("searchbox", { name: "Search" }).click();
  await page.getByRole("searchbox", { name: "Search" }).fill("trace viewer");
  await page.getByRole("searchbox", { name: "Search" }).press("Enter");

  // Kiểm tra URL chuyển hướng đúng trang cài đặt
  await expect(page).toHaveURL(
    "https://playwright.dev/docs/trace-viewer-intro"
  );
});
