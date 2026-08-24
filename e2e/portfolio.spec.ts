import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("shows the name and role in the hero", async ({ page }) => {
  await expect(page.getByRole("heading", { name: /hamam/i })).toBeVisible();
});

test("projects grid shows the five featured projects", async ({ page }) => {
  const grid = page.locator("#projects");
  await grid.scrollIntoViewIfNeeded();

  for (const title of [
    "Orderly",
    "Zawwaqa",
    "Exclusive",
    "XStore",
    "Order Easy",
  ]) {
    await expect(
      grid.getByRole("heading", { name: title, exact: true })
    ).toBeVisible();
  }
});

test("filtering by React narrows the grid down", async ({ page }) => {
  const grid = page.locator("#projects");
  await grid.scrollIntoViewIfNeeded();

  await grid.getByRole("button", { name: "React", exact: true }).click();

  await expect(grid.getByRole("heading", { name: "XStore" })).toBeVisible();
  // Orderly is Next.js, so it should drop out of the grid
  await expect(grid.getByRole("heading", { name: "Orderly" })).toBeHidden();
});

test("earlier work is listed but kept out of the main grid", async ({
  page,
}) => {
  const earlier = page.getByRole("heading", { name: "Earlier Work" });
  await earlier.scrollIntoViewIfNeeded();
  await expect(earlier).toBeVisible();

  await expect(
    page.getByRole("link", { name: /Techwix/ })
  ).toBeVisible();
});

test("every project links to a live demo", async ({ page }) => {
  const links = page.locator("#projects a", { hasText: "Live Demo" });

  await expect(links).toHaveCount(5);

  for (const link of await links.all()) {
    await expect(link).toHaveAttribute("href", /^https?:\/\//);
  }
});

test("the resume link points somewhere", async ({ page }) => {
  const resume = page.getByRole("link", { name: /resume/i }).first();
  await expect(resume).toHaveAttribute("href", /drive\.google\.com/);
});
