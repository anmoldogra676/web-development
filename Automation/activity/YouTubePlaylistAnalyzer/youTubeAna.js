// no of videos,views
// Average length of videos
//  Detail of each video -> {name,duration}
//  average watch time
// -> pdf fill
// https://www.youtube.com/playlist?list=PLzkuLC6Yvumv_Rd5apfPRWEcjf9b1JRnq

const puppeteer = require("puppeteer");
const youtubeLink =
"https://www.youtube.com/playlist?list=PLzkuLC6Yvumv_Rd5apfPRWEcjf9b1JRnq"
let cTab
async function fn() {
    try {
        let browserOpenPromise = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
            args: ["--start-maximized"]
        })
        let browser = await browserOpenPromise
        let allTabsArr = await browser.pages()
        cTab = allTabsArr[0]
        await cTab.goto(youtubeLink)
    } 
    catch (err) {
        console.log(err);
                }
};
fn()



