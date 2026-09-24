import {test} from '@playwright/test';   

test('login',async function testplaywright({browser}){
    //fisxture: ready to use setup provided by playwright for test
    //types of fixctures;
    /*
    broweser
    context
    page
    request
    */
   const context=await browser.newContext();
   const page=await context.newPage();
   await page.goto("https://www.automationpracticehub.com/");
   //usernam
   //password
   //login button click
   await page.waitForTimeout(6000);

    });