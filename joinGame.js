const puppeteer = require('puppeteer');

async function joinGame(inviteLink, botIndex) {
    const browser = await puppeteer.launch({ headless: false }); // Set to false to see the browser, true for headless mode
    const page = await browser.newPage();
    await page.goto(inviteLink);

    console.log(`Bot ${botIndex} joined the game using the invite link: ${inviteLink}`);

    // Optional: Keep the browser open for a while to see the result
    setTimeout(async () => {
        await browser.close();
    }, 30000); // Adjust the delay as needed
}

const inviteLink = 'https://krunker.io/?game=FRA:ivi29';

async function addMultipleBots(numBots) {
    const promises = [];
    for (let i = 0; i < numBots; i++) {
        promises.push(joinGame(inviteLink, i + 1));
    }
    await Promise.all(promises);
}

// Add 7 bots
addMultipleBots(7);
