import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("hero states the role and the claim", async ({ page }) => {
  await expect(
    page.getByRole("heading", { level: 1, name: /production web apps/i })
  ).toBeVisible();
  await expect(page.getByText("Front-End Developer").first()).toBeVisible();
});

test("client work shows Zerodroid Labs with its live site", async ({ page }) => {
  const section = page.locator("#experience");
  await section.scrollIntoViewIfNeeded();
  await expect(
    section.getByRole("heading", { name: "Zerodroid Labs" })
  ).toBeVisible();
  await expect(
    section.getByRole("link", { name: /zerodroid\.io/ })
  ).toHaveAttribute("href", /^https:\/\/www\.zerodroid\.io/);
});

test("projects show the four CV projects, Orderly featured", async ({ page }) => {
  const section = page.locator("#projects");
  await section.scrollIntoViewIfNeeded();

  for (const title of ["Orderly", "Zawwaqa", "Exclusive", "XStore"]) {
    await expect(
      section.getByRole("heading", { name: title, exact: true })
    ).toBeVisible();
  }
  await expect(section.getByText("Solo-built SaaS")).toBeVisible();
});

test("every main project links to a live site", async ({ page }) => {
  const links = page.locator("#projects").getByRole("link", {
    name: "Live site",
    exact: true,
  });
  await expect(links).toHaveCount(4);
  for (const link of await links.all()) {
    await expect(link).toHaveAttribute("href", /^https:\/\//);
  }
});

test("earlier work lists OrderEasy and the corporate sites", async ({ page }) => {
  const more = page.getByRole("heading", { name: /More work/ });
  await more.scrollIntoViewIfNeeded();
  await expect(more).toBeVisible();
  await expect(page.getByRole("link", { name: "Techwix live site" })).toBeVisible();
});

test("skills link tools to the work that uses them", async ({ page }) => {
  const section = page.locator("#skills");
  await section.scrollIntoViewIfNeeded();
  const prisma = section.locator("div", { has: page.getByText("Prisma", { exact: true }) }).last();
  await expect(prisma.getByRole("link", { name: "Orderly" })).toHaveAttribute(
    "href",
    "#orderly"
  );
});

test("contact form has labelled fields", async ({ page }) => {
  const section = page.locator("#contact");
  await section.scrollIntoViewIfNeeded();
  for (const label of ["Name", "Email", "Message"]) {
    await expect(section.getByLabel(label, { exact: true })).toBeVisible();
  }
});

test("every resume link is the local PDF, never Google Drive", async ({ page }) => {
  // CLAUDE.md: every CV link points to /Hamam_Sadek_CV.pdf
  const cvLinks = page.locator('a[href*="CV"], a[href*="drive.google"]');
  const hrefs = await cvLinks.evaluateAll((as) =>
    as.map((a) => a.getAttribute("href"))
  );
  const resumeHrefs = hrefs.filter((h) => !h?.includes("drive.google.com/file/d/1Uk4")); // bootcamp certificate
  expect(resumeHrefs.length).toBeGreaterThan(0);
  for (const href of resumeHrefs) expect(href).toBe("/Hamam_Sadek_CV.pdf");
});

test("no horizontal scroll", async ({ page }) => {
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - window.innerWidth
  );
  expect(overflow).toBeLessThanOrEqual(0);
});
