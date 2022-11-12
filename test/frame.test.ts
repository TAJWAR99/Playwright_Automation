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
        await page.goto("https://letcode.in/frame");
    })
    test("Interact with frames", async () => {
        const frame = page.frame({name:"firstFr"})

        if(frame != null){
            await frame.locator("input[name=fname]").fill("Atik");
            await frame.locator("input[name=lname]").fill("Taj");

            const frames = frame.childFrames();

            const parent = frames[0].parentFrame()
            await parent?.fill("input[name=lname]", "sihan");
            //await frames[0].fill("input[name='email']", "demo@gmail.com");
        }else{
            throw new Error('No frame found');
            
        }
    })
})