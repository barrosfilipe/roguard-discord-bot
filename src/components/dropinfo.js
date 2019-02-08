'use strict';

const jsdom = require('jsdom');
const utils = require('./utils');
const { JSDOM } = jsdom;

const errorMessage =
  utils.mobNotFoundMessages[
    Math.floor(Math.random() * utils.mobNotFoundMessages.length)
  ];

const getDropsUrl = async mobName => {
  try {
    const dom = await JSDOM.fromURL(
      `https://www.roguard.net/db/search/?search=${mobName}`
    );

    const mobUrl = dom.window.document.querySelector(
      '#content > div > table:nth-child(4) > tbody > tr > td:nth-child(2) > div:nth-child(1) > a'
    ).href;

    if (mobUrl.includes('monsters')) {
      const mobDom = await JSDOM.fromURL(mobUrl);
      return getDropInfo(mobUrl, mobDom);
    }

    return false;
  } catch (err) {
    return { error: errorMessage };
  }
};

const getDropInfo = (mobUrl, dom) => {
  try {
    const drops = Array.from(dom.window.document.querySelectorAll('h2')).find(
      el => el.textContent === 'Drops'
    ).parentNode;

    const items = Array.from(drops.children)
      .filter(el => el.tagName === 'DIV')
      .map(drop => drop.childNodes[3])
      .filter(drop => drop)
      .map(drop => drop.childNodes[0].textContent);

    const percentage = Array.from(drops.children)
      .filter(el => el.tagName === 'DIV')
      .filter(drop => drop)
      .map(drop => drop.childNodes[4])
      .filter(drop => drop)
      .map(drop => drop.textContent.trim());

    const itemDrops = items.map((item, i) => `${item} ${percentage[i]}`);

    return {
      url: mobUrl,
      name: dom.window.document.querySelector('#content > div > h1')
        .textContent,
      thumb: dom.window.document.querySelector(
        '#content > div > div:nth-child(4) > table > tbody > tr:nth-child(1) > td > img'
      ).src,
      itemdrops: itemDrops.join(', ')
    };
  } catch (err) {
    return { error: errorMessage };
  }
};

module.exports = getDropsUrl;
