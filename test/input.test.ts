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
        await page.goto("https://letcode.in/edit");
    })

    test("Enter a text value", async () => {
        await page.type("id=fullName", "tajwar");
        //clear and fill text
        //await page.fill("id=fullName", "tajwar");
    })
    xtest("Append a text and enter tab", async () => {
        const join = await page.$("#join");
        await join?.focus();
        //await page.locator("#join").press("Command+ArrowRight")
        await page.keyboard.press("End")
        await join?.type(" Human");
    })
    test("What is inside the text box", async () => {
        const text = await page.getAttribute("id=getMe", "value");
        console.log(text);
    })
    test("Clear the text and enter input",async () => {
        await page.locator("#clearMe").fill("Cleared");        
    })
    afterAll(async () => {
        page.close();
        context.close(); 
        browser.close(); 
    })
})