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
        await page.goto("https://letcode.in/windows");
    })
    xtest("Single window", async () => {
        const [newWindow] = await Promise.all([
            context.waitForEvent("page"),
            await page.click("#home")
        ])
        await newWindow.waitForLoadState();
        expect(newWindow.url()).toContain("test");
        await newWindow.click('"Log in"');
        await newWindow.waitForNavigation();
        expect(newWindow.url()).toContain("signin");
        //await newWindow.close()
        //await page.bringToFront();
        //await page.click('"LetXPath');

    })
    test("Multi window", async () => {
        const [multiWindow] = await Promise.all([
            context.waitForEvent("page"),
            await page.click("#multi")
        ])
        await multiWindow.waitForLoadState();

        const allWindows = multiWindow.context().pages();
        console.log("No of windows: "+ allWindows.length);
        
        allWindows.forEach( page => {
            console.log(page.url())
        })
        await allWindows[1].bringToFront();
        allWindows[1].on("dialog", (dialog) => {
            console.log("Message: "+ dialog.message());
            dialog.accept();
        })
        await allWindows[1].click("id=accept");
    })
})