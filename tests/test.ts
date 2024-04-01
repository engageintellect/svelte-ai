import { expect, test } from '@playwright/test';

test('index page has expected button', async ({ page }) => {
    await page.goto('/');

    // Wait for the page to load and element to be present
    const sendButton = page.locator('button:has-text("Send")');
    if (await sendButton.count() === 0) {
        console.log("Send button not found");
    } else {
        console.log("Send button found");
    }

    await sendButton.waitFor({ state: 'visible' });
    await expect(sendButton).toBeVisible();

    // Check if the button is covered or disabled
    const isDisabled = await sendButton.isDisabled();
    const isCovered = await sendButton.isHidden();
    console.log(`Button isDisabled: ${isDisabled}, isHidden: ${isCovered}`);

    // Attempt to click the button
    try {
        await sendButton.click();
        console.log("Button clicked");
    } catch (error) {
        console.error("Error clicking the button:", error);
    }

    // Add a wait to observe any potential navigation or action
    await page.waitForTimeout(5000); // Adjust the timeout as needed for observation

    // Add any further checks or navigation waits as needed
});
