
const puppeteer = require("puppeteer");
let link = "https://www.leetcode.com";
let { credential } = require("./id&Pass");
let ProblemFn= require("./ListMaker")
let cTab;

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

console.log(`
              What type of List do you want through Leetcode ?
              1. Full List( All Questions )
              2. Topic Wise 
           `);

  readline.question(" Enter 1 or 2 \n", async choice=> {
    //console.log(` ${choice}`)
    if(choice==1){
        //full
        let topic  ="FullList"
        fullLisT(topic);
    }else if(choice==2){
        // topic Wise
        // readline.question(" Enter 1 or 2 \n", choice=> {})
    const topic = await getTopic("Enter Topic Name: ");
    TopicLisT(topic);
    

    }else{
        console.log(" Enter Correct Choice")
    }

    readline.close()
  })

async function fullLisT(topic) {
    try {
        let browserOpenPromise = puppeteer.launch({
            headless: false,
            defaultViewport: null,
            args: ["--start-maximized"]
        });
        
          
          
        let browser = await browserOpenPromise;
        let allTabsArr = await browser.pages();
        cTab = allTabsArr[0];


        let fullList = await getFullListingFromLeetcode(link, topic);
        console.table(fullList)


    } catch (err) {

        console.log(err);
    }
}

async function TopicLisT(topic) {
    try {
        let browserOpenPromise = puppeteer.launch({
            headless: false,
            defaultViewport: null,
            args: ["--start-maximized"]
        });
 
        let browser = await browserOpenPromise;
        let allTabsArr = await browser.pages();
        cTab = allTabsArr[0];
        let fullList = await getTopicListingFromLeetcode(link, topic);
        console.table(fullList)


    } catch (err) {

        console.log(err);
    }
}
                                   
async function getTopicListingFromLeetcode(link, topic) {
    await cTab.goto(link)
    await cTab.waitForSelector(".nav-right> .nav-menu a", { visible: true });
    let fullLoginLink =await cTab.evaluate( returnRequiredLink,".nav-right> .nav-menu a", 4 )
    cTab.goto(fullLoginLink)
    await cTab.waitForSelector(".input__2W4f ", { visible: true });
    await cTab.type("input[class='input__2W4f '] ", credential[0], { delay: 500 }) // username
    await cTab.type("#id_password", credential[1], { delay: 500 })// password
    await cTab.click("#signin_btn");
    
    let ProblemAllLink=await cTab.evaluate( returnRequiredLink,".nav-item-container__16kF> a", 2 )
    cTab.goto(ProblemAllLink)
    await cTab.waitForSelector(".fa.fa-caret-down", { visible: true }); // click on tag
    await cTab.click(".fa.fa-caret-down ",{ visible: true })
    await cTab.waitForSelector(".filterSearch.form-control", { visible: true });// type name
    await cTab.type(".filterSearch.form-control", topic , { delay: 500 })
    await cTab.waitForSelector(".false.tag-category.filter-dropdown-menu-items .filter-dropdown-menu-item", { visible: true });// click on topic
    await cTab.click(".false.tag-category.filter-dropdown-menu-items .filter-dropdown-menu-item",{ visible: true })
    // get topic list
    ProblemFn.helperFn(cTab, topic);
    
    

    

    

    
    


}
                                                                
async function getFullListingFromLeetcode(link, topic) {
    await cTab.goto(link)
    await cTab.waitForSelector(".nav-right> .nav-menu a", { visible: true });
    let fullLoginLink =await cTab.evaluate( returnRequiredLink,".nav-right> .nav-menu a", 4 )
    cTab.goto(fullLoginLink)
    await cTab.waitForSelector(".input__2W4f ", { visible: true });
    await cTab.type("input[class='input__2W4f '] ", credential[0], { delay: 500 }) // username
    await cTab.type("#id_password", credential[1], { delay: 500 })// password
    await cTab.click("#signin_btn");
    
    let ProblemAllLink=await cTab.evaluate( returnRequiredLink,".nav-item-container__16kF> a", 2 )
    cTab.goto(ProblemAllLink)
     ProblemFn.helperFn(cTab, topic)

}
                       
function returnRequiredLink(selector1, idx){
    let login = document.querySelectorAll(selector1)[idx].getAttribute("href");
    let fullLoginLink ="https://leetcode.com"+login;
    return fullLoginLink
}
                     
function getTopic(query) {
    
        return new Promise(resolve => readline.question(query, ans => {
            readline.close();
            resolve(ans);
        }))
    }
                    
module.exports= {
    cTab  
}