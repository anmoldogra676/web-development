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
browserOpen // if promise is resolved  then (then) statement will execute and simply opens the browser
    .then(function (browser) {
        console.log("browser opened")
        //   let browserClosePromise = browser.close();
        //   browserClosePromise.then(function()
        //   {
        //       console.log("browser is closed ")
        //   })
        let alltabsPromise = browser.pages();// this also give promise and if promise get resolved then it will
        return alltabsPromise                       // return teh array of pages
        })
        .then(function (tabs)// all tabs
            {
                 page = tabs[0]; // one blank tab is always there by default
                let cricInfoPromise = page.goto(url) // goto some url 
                 return  cricInfoPromise 
            })
         .then(function () {
                        console.log("Welcome to Cricinfo Page")
                    function fn()
                    {
                        // document is the global object in browser you can access any thing with document 
                        return document.querySelector(".best-player-name").innerText;
                    }
                    
                    
                    let PlayernamePromise = page.evaluate(fn) // evaluate will run the code in browser console
                    return PlayernamePromise   // evaluate accepts a fxn argument 
                })
                .then( function(playerName)
                {
                    console.log(playerName)
                })
        
    
