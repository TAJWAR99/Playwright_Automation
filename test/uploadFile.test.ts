import { chromium } from "playwright";

describe('Upload file', () => {

    const filePath = '/Users/sihan/Desktop/PlayWright/letPlaywright/files/DOCUMENTATION.pdf';

    test("Upload a file", async () => {
        const browser = await chromium.launch({
            headless: false
        });
        const context = await browser.newContext();
        const page = await context.newPage();

        await page.goto("https://www.sendgb.com/");
        await page.locator("input[name='qqfile']").setInputFiles(filePath);
    })
})