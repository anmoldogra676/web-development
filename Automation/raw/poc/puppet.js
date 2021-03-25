// puppet is promise based library

const fs = require('fs');
const puppeteer = require('puppeteer')
let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/ball-by-ball-commentary";
let browserOpen = puppeteer.launch( // gives promise about opens the browser
    {
        headless: false,
        defaultViewport: null,
    args: ["--start-maximized", "--incognito"]
    }
)
// promise has always 2 thing -> then  &  catch
let page ;
browserOpen // if browser opens then give me browser
    .then(function (browser) {
        console.log("browser opened")
        //   let browserClosePromise = browser.close();
        //   browserClosePromise.then(function()
        //   {
        //       console.log("browser is closed ")
        //   })
        let alltabsPromise = browser.pages();// this also give promise
        return alltabsPromise
        })
        .then(function (tabs)// all tabs
            {
                 page = tabs[0]; // one blank tab is always there
                let cricInfoPromise = page.goto(url)
                 return  cricInfoPromise 
            })
         .then(function () {
                        console.log("Welcome to Cricinfo Page")
                    function fn()
                    {
                        return document.querySelector(".best-player-name").innerText;
                    }
                    
                    
                    let PlayernamePromise = page.evaluate(fn)
                    return PlayernamePromise
                })
                .then( function(playerName)
                {
                    console.log(playerName)
                })
        
    
