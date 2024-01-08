import { test, expect } from "@playwright/test";

test("create product", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByTestId("product-name-input").fill("haha");
  await page.getByRole("button", { name: "Submit" }).click();

  await expect(page.getByText("product created successfully")).toBeAttached();
});
