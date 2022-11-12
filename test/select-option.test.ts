import { Browser, BrowserContext, chromium, Page } from "playwright"

describe("How to handle input fields", () => {
    let browser : Browser;
    let context : BrowserContext;
    let page : Page;
    beforeAll(async () => {
        browser = await chromium.launch({
            headless: false
        }) 
        context = await browser.newContext();
        page = await context.newPage();
        await page.goto("https://letcode.in/dropdowns");
    })

    test("Select a single option", async () => {
        await page.locator('select#fruits').selectOption({ label: 'Mango' });

        const msg = await page.$("div.notification.is-success");
        if(msg){
            expect(await msg.textContent()).toContain("Mango");
        }
        
        // Single selection matching the value
        //await page.locator('select#fruits').selectOption('2'); 
    })
    xtest("Select multiple selection",async () => {
        await page.locator('select#superheros').selectOption(['Aquaman', 'Batman']);
    })
    test("Count the length of select options", async () => {
        const lang = await page.$$("#lang option");
        console.log(lang.length);
    })
    test("Get a selected text",async () => {
        await page.selectOption("#country", {index: 2})
        const text = await page.$eval<string, HTMLSelectElement>("#country", ele => ele.value);
        console.log(text);
        expect(text).toBe("Brazil")
    })
    afterAll(async () => {
        page.close();
        context.close(); 
        browser.close(); 
    })
})
