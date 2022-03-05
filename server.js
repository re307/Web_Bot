const puppeteer = require('puppeteer');

const randomUseragent = require('random-useragent');

const inicializa = async () =>{

    const header = randomUseragent.getRandom();

    const browser = await puppeteer.launch();

    const page = await browser.newPage();

    await page.setUserAgent(header);

    await page.setViewport({width:1920,height:1080});

    await page.goto('https://www.youtube.com/watch?v=DeWyVfdgKG4');

    await page.screenshot({path:'example.jpg'});

    await page.close();

    await browser.close();

}

inicializa();