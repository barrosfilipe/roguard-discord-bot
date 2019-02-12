'use strict';

const puppeteer = require('puppeteer');

const getExchangePrice = async itemName => {
  const browser = await puppeteer.launch({
    ignoreHTTPSErrors: true,
    headless: true
  });

  const page = await browser.newPage();
  await page.goto(`https://global.poporing.life/?search=${itemName}`, {
    waitUntil: 'networkidle0'
  });

  const item = await page.evaluate(() => {
    try {
      const name = document.querySelector(
        '#root > div.container.pt-3 > div:nth-child(1) > div:nth-child(3) > div > div > div.col-12.col-md-3.col-lg-2.d-flex.flex-column.flex-fill.justify-content-between > div:nth-child(1) > h3'
      ).textContent;

      const img = document.querySelector(
        '#root > div.container.pt-3 > div:nth-child(1) > div:nth-child(3) > div > div > div.col-12.col-md-3.col-lg-2.d-flex.flex-column.flex-fill.justify-content-between > div:nth-child(2) > img'
      ).src;

      const price = document.querySelector(
        '#root > div.container.pt-3 > div:nth-child(1) > div:nth-child(3) > div > div > div.col-12.col-md-3.col-lg-2.d-flex.flex-column.flex-fill.justify-content-between > div.d-flex.flex-column > div:nth-child(1) > b'
      ).textContent;

      const volume = document.querySelector(
        '#root > div.container.pt-3 > div:nth-child(1) > div:nth-child(3) > div > div > div.col-12.col-md-3.col-lg-2.d-flex.flex-column.flex-fill.justify-content-between > div.d-flex.flex-column > div:nth-child(2) > b'
      ).textContent;

      const update = document.querySelector(
        '#root > div.container.pt-3 > div:nth-child(1) > div:nth-child(3) > div > div > div.col-12.col-md-3.col-lg-2.d-flex.flex-column.flex-fill.justify-content-between > div.d-flex.flex-column > div.text-muted.mt-1 > abbr > time'
      ).textContent;

      if (name) {
        return {
          name: name,
          thumb: img,
          price: price,
          volume: volume,
          update: update
        };
      }
    } catch (err) {
      return { error: true };
    }

    return false;
  });

  await browser.close();
  return item;
};

module.exports = getExchangePrice;
