
const puppeteer = require("puppeteer");
let links = ["https://www.amazon.in", "https://www.flipkart.com/", "https://paytmmall.com"];
let pName = process.argv[2];
let cTab;
(async function fn() {
    try {
        let browserOpenPromise = puppeteer.launch({
            headless: false,
            defaultViewport: null,
            args: ["--start-maximized"]
        });
        let browser = await browserOpenPromise;
        let allTabsArr = await browser.pages();
        cTab = allTabsArr[0];
        let pName = "iphone11"
        let listAmazon = await getListingFromAmazon(links[0],pName);
        console.log("***********Amazon***************")
        console.table(listAmazon)
        let listFlipkart = await getListingFromFlipkart(links[1],pName);
        console.log("***********Flipkart***************")
        console.table(listFlipkart)
        let listPaytm  = await getListingFromPaytm(links[2],pName);
        console.log("***********Paytm***************")
        console.table(listPaytm)


    } catch (err) {

        console.log(err);
    }
})();

async function getListingFromPaytm(link, pName) {
    await cTab.goto(link)
    await cTab.type("#searchInput", pName, { delay: 100 });
    await cTab.keyboard.press("Enter");
    await cTab.waitForSelector(".UGUy", { visible: true });
    return await cTab.evaluate(consoleFn ,".UGUy","._1kMS" )
    

}

async function getListingFromFlipkart(link, pName) {
    await cTab.goto(link)
    await cTab.click("._2KpZ6l._2doB4z",{ visible: true }) 
    await cTab.type("input[class='_3704LK'] ", pName)
    await cTab.click(".L0Z3Pu",{ visible: true }) 
    await cTab.waitForSelector(".s1Q9rs", { visible: true });
    return await cTab.evaluate(consoleFn ,".s1Q9rs","._30jeq3" )
    // class='L0Z3Pu'

}
async function getListingFromAmazon(link, pName) {
    await cTab.goto(link)
    await cTab.type("input[id='twotabsearchtextbox'] ", pName)
    await cTab.click("input[ id='nav-search-submit-button']" , { visible: true }) 
    await cTab.waitForSelector(".a-size-medium.a-color-base.a-text-normal", { visible: true });
    return await cTab.evaluate(consoleFn ,".a-size-medium.a-color-base.a-text-normal",".a-price-whole" )
    

}

function consoleFn(selector1, selector2) {
    let names = document.querySelectorAll(selector1);
    let price = document.querySelectorAll(selector2);
    let list =[]
    for (let i = 0; i < 5; i++) {
        let cName = names[i].innerText;
        let cprice = price[i].innerText;
        let obj ={
            name: cName,
            price: cprice
        }
        list.push(obj)
       
    }
    return list
}