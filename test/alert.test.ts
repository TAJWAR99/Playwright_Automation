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
        await page.goto("https://letcode.in/alert");
    })
    test("Handle dialogs", async () => {
        const element = await page.$("#prompt");
        page.on("dialog", (dialog) => {
            // console.log("Message: "+ dialog.message());
            // console.log("Default value: "+ dialog.defaultValue());
            // console.log("Type: "+ dialog.type())

            // dialog.accept();
            // dialog.dismiss();
            dialog.accept("tajwar");
        })
        await element?.click();
    })

    afterAll( async () => {
        page.close();
        context.close();
        browser.close();
    })
})