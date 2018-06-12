const puppeteer = require('puppeteer')

test.skip('launch a browser', async()=>{
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  await page.goto('localhost:3000');

  const text = await page.$eval('h2.nobottommargin.t300', el=>el.innerHTML);
  expect(text).toEqual('Taiwanlent 提供您各領域的專業人才');
})