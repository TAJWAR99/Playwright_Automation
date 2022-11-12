import { Browser, BrowserContext, chromium, Page } from "playwright";

describe("Work with elements", () => {
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;
    beforeAll(async () => {
        browser = await chromium.launch({
            headless: false,
        });
        context = await browser.newContext();
        page = await context.newPage();

        await page.goto("https://letcode.in/elements");
    })

    test("Enter git user name", async () => {
        const ele = await page.$("input[name='username']");
        await ele?.fill("ortonikc");
        await ele?.press("Enter");
    })
    test("Print all the repos", async () => {
        await page.waitForSelector("app-gitrepos ol li", { timeout: 5000 })
        const repos = await page.$$("app-gitrepos ol li");
        console.log(repos.length);
        // for await 
        // for await (const repo of repos) {
        //     console.log(await repo.innerText());
        // }
        // map
        const allUrls = await Promise.all(repos.map(async (repo, i) => {
            return await repo.innerText()
        }))
        console.log(allUrls);
        //full page Screenshot
        //await page.screenshot({ path: Date.now() + "fs.png", fullPage: true })
        //Element wise screenshot
        // const header = await page.$("nav[role='navigaion']");
        // header?.screenshot({path: "header.png"})
    })
    afterAll( async () => {
        page.close();
        context.close();
        browser.close();
    })
})