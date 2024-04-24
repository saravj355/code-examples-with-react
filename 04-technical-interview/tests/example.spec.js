// @ts-check
import { test, expect } from "@playwright/test";

const LOCALHOST_URL = "http://localhost:5173";
test("App shows random fact and image", async ({ page }) => {
	await page.goto(LOCALHOST_URL);

	const text = await page.getByRole("paragraph");
	const image = await page.getByRole("img");
	const button = await page.getByRole("button");

	const textContent = await text.textContent();
	const imageSRC = await image.getAttribute("src");
	const buttonContent = await button.click();
	const imageSRCRandom = await image.getAttribute("src");
	await expect(imageSRC).not.toBe(imageSRCRandom);
	await expect(textContent?.length).toBeGreaterThan(0);
	await expect(imageSRC?.startsWith("https://cataas.com")).toBeTruthy();
});
