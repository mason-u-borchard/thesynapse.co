// _Last updated: 2026-11-02_
import { test, expect } from "@playwright/test";

test.describe("critical flows", () => {
  test("home renders hero and the Apply CTA reaches /attend", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(/Where women connect/);
    await page.getByRole("link", { name: /Apply to attend/i }).first().click();
    await expect(page).toHaveURL(/\/attend$/);
    await expect(page.getByRole("heading", { level: 1 })).toContainText(/An invitation/);
  });

  test("legacy /register and /schedule URLs redirect to their successors", async ({ page }) => {
    await page.goto("/register");
    await expect(page).toHaveURL(/\/attend$/);
    await page.goto("/schedule");
    await expect(page).toHaveURL(/\/program$/);
  });

  test("/speakers and old per-speaker URLs redirect to the program page", async ({ page }) => {
    await page.goto("/speakers");
    await expect(page).toHaveURL(/\/program$/);
    await page.goto("/speakers/anyone");
    await expect(page).toHaveURL(/\/program$/);
  });

  test("program page renders the three-day arc and the featured speakers", async ({ page }) => {
    await page.goto("/program");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(/living laboratory/i);
    for (const day of ["Day 1: Expand", "Day 2: Weave", "Day 3: Emerge"]) {
      await expect(page.getByText(day).first()).toBeVisible();
    }
    await expect(page.getByText(/Who you.ll hear from/)).toBeVisible();
    await expect(page.getByText("Amber Williams").first()).toBeVisible();
  });

  test("concierge opens and shows its offline banner when the provider is unavailable", async ({ page }) => {
    // Stub /api/chat with the 503 the route returns when no provider key is
    // set, so the test is deterministic and never calls a real model. Ava's
    // actual answers are covered at the prompt layer by the concierge-qa
    // Vitest suite.
    await page.route("**/api/chat", (route) =>
      route.fulfill({ status: 503, contentType: "application/json", body: JSON.stringify({ error: "offline" }) }),
    );
    await page.goto("/");
    await page.getByRole("button", { name: /Open Ava/i }).click();
    await page.locator("textarea").fill("What are the dates?");
    await page.keyboard.press("Enter");
    await expect(page.getByText(/Ava is offline/i).first()).toBeVisible({ timeout: 10_000 });
  });
});
