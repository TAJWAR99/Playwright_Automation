import { chromium } from "playwright";
//import "@testing-library/jest-dom/extend-expect" ;

describe('Launch browser', () => {
    test('test', async () => {
        const browser = await chromium.launch({
            headless: false,
        });
        const context = await browser.newContext({
            recordVideo: {
                dir: "./videos/",
                size: {
                    width: 800,
                    height: 600
                }
            }
        });
        const page = await context.newPage();
        // Go to https://letcode.in/
        await page.goto('https://letcode.in/');
        // Click text=Log in
        await page.locator('text=Log in').click();
        //await expect(page).toHaveURL('https://letcode.in/signin');
        // Click text=EmailPasswordLOGIN >> [placeholder="Enter registered email"]
        await page.locator('text=EmailPasswordLOGIN >> [placeholder="Enter registered email"]').click();
        // Fill text=EmailPasswordLOGIN >> [placeholder="Enter registered email"]
        await page.locator('text=EmailPasswordLOGIN >> [placeholder="Enter registered email"]').fill('loushik350@gmail.com');
        // Click [placeholder="Enter password"]
        await page.locator('[placeholder="Enter password"]').click();
        // Fill [placeholder="Enter password"]
        await page.locator('[placeholder="Enter password"]').fill('Pass123$');
        // Click text=LOGIN
        await page.locator('text=LOGIN').click();
        // Click text=EmailPasswordLOGIN >> [placeholder="Enter registered email"]
        await page.locator('text=EmailPasswordLOGIN >> [placeholder="Enter registered email"]').click();
        // Press ArrowLeft
        await page.locator('text=EmailPasswordLOGIN >> [placeholder="Enter registered email"]').press('ArrowLeft');
        // Press ArrowLeft
        await page.locator('text=EmailPasswordLOGIN >> [placeholder="Enter registered email"]').press('ArrowLeft');
        // Press ArrowLeft
        await page.locator('text=EmailPasswordLOGIN >> [placeholder="Enter registered email"]').press('ArrowLeft');
        // Press ArrowLeft
        await page.locator('text=EmailPasswordLOGIN >> [placeholder="Enter registered email"]').press('ArrowLeft');
        // Press ArrowLeft
        await page.locator('text=EmailPasswordLOGIN >> [placeholder="Enter registered email"]').press('ArrowLeft');
        // Press ArrowLeft
        await page.locator('text=EmailPasswordLOGIN >> [placeholder="Enter registered email"]').press('ArrowLeft');
        // Press ArrowLeft
        await page.locator('text=EmailPasswordLOGIN >> [placeholder="Enter registered email"]').press('ArrowLeft');
        // Press ArrowLeft
        await page.locator('text=EmailPasswordLOGIN >> [placeholder="Enter registered email"]').press('ArrowLeft');
        // Press ArrowLeft
        await page.locator('text=EmailPasswordLOGIN >> [placeholder="Enter registered email"]').press('ArrowLeft');
        // Press ArrowLeft
        await page.locator('text=EmailPasswordLOGIN >> [placeholder="Enter registered email"]').press('ArrowLeft');
        // Press ArrowLeft
        await page.locator('text=EmailPasswordLOGIN >> [placeholder="Enter registered email"]').press('ArrowLeft');
        // Press ArrowLeft
        await page.locator('text=EmailPasswordLOGIN >> [placeholder="Enter registered email"]').press('ArrowLeft');
        // Press ArrowLeft
        await page.locator('text=EmailPasswordLOGIN >> [placeholder="Enter registered email"]').press('ArrowLeft');
        // Press ArrowLeft
        await page.locator('text=EmailPasswordLOGIN >> [placeholder="Enter registered email"]').press('ArrowLeft');
        // Press ArrowLeft
        await page.locator('text=EmailPasswordLOGIN >> [placeholder="Enter registered email"]').press('ArrowLeft');
        // Press ArrowLeft
        await page.locator('text=EmailPasswordLOGIN >> [placeholder="Enter registered email"]').press('ArrowLeft');
        // Press ArrowLeft
        await page.locator('text=EmailPasswordLOGIN >> [placeholder="Enter registered email"]').press('ArrowLeft');
        // Press ArrowLeft
        await page.locator('text=EmailPasswordLOGIN >> [placeholder="Enter registered email"]').press('ArrowLeft');
        // Press ArrowLeft
        await page.locator('text=EmailPasswordLOGIN >> [placeholder="Enter registered email"]').press('ArrowLeft');
        // Fill text=EmailPasswordLOGIN >> [placeholder="Enter registered email"]
        await page.locator('text=EmailPasswordLOGIN >> [placeholder="Enter registered email"]').fill('koushik350@gmail.com');
        // Click text=LOGIN
        await page.locator('text=LOGIN').click();
        //await expect(page).toHaveURL('https://letcode.in/');
        // Click text=Explore Workspace
        await page.locator('text=Explore Workspace').click();
        //await expect(page).toHaveURL('https://letcode.in/test');
        // Click text=All in One
        await page.locator('text=All in One').click();
        //await expect(page).toHaveURL('https://letcode.in/forms');
        // Click #firstname
        await page.locator('#firstname').click();
        // Fill #firstname
        await page.locator('#firstname').fill('demo');
        // Click #lasttname
        await page.locator('#lasttname').click();
        // Fill #lasttname
        await page.locator('#lasttname').fill('demo');
        // Click [placeholder="Email input"]
        await page.locator('[placeholder="Email input"]').click();
        // Fill [placeholder="Email input"]
        await page.locator('[placeholder="Email input"]').fill('demo@gmail.com');
        // Click [placeholder="Phone Number"]
        await page.locator('[placeholder="Phone Number"]').click();
        // Fill [placeholder="Phone Number"]
        await page.locator('[placeholder="Phone Number"]').fill('9999999999');
        // Click [placeholder="Address Line-1"]
        await page.locator('[placeholder="Address Line-1"]').click();
        // Fill [placeholder="Address Line-1"]
        await page.locator('[placeholder="Address Line-1"]').fill('demo add 1');
        // Click [placeholder="Address Line-2"]
        await page.locator('[placeholder="Address Line-2"]').click();
        // Fill [placeholder="Address Line-2"]
        await page.locator('[placeholder="Address Line-2"]').fill('demo add 2');
        // Click [placeholder="State"]
        await page.locator('[placeholder="State"]').click();
        // Fill [placeholder="State"]
        await page.locator('[placeholder="State"]').fill('NY');
        // Click [placeholder="Postal-Code"]
        await page.locator('[placeholder="Postal-Code"]').click();
        // Fill [placeholder="Postal-Code"]
        await page.locator('[placeholder="Postal-Code"]').fill('1204');
        // Select Algeria
        await page.locator('text=CountryAfghanistanÅland IslandsAlbaniaAlgeriaAmerican SamoaAndorraAngolaAnguilla >> select').selectOption('Algeria');
        // Fill input[name="dob"]
        await page.locator('input[name="dob"]').fill('2022-08-25');
        // Check #male
        await page.locator('#male').check();
        // Check input[type="checkbox"]
        await page.locator('input[type="checkbox"]').check();
        // Click input[type="submit"]
        await page.locator('input[type="submit"]').click();
        //await expect(page).toHaveURL('https://letcode.in/forms');
        // Click text=Sign out
        await page.locator('text=Sign out').click();
        //await expect(page).toHaveURL('https://letcode.in/');
        await context.close();
        await browser.close();

    });
});