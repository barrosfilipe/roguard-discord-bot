'use strict';

const tabletojson = require('tabletojson');
const jsdom = require('jsdom');
const utils = require('./utils');
const { JSDOM } = jsdom;

const itemNotFoundMessages =
  utils.itemNotFoundMessages[
    Math.floor(Math.random() * utils.itemNotFoundMessages.length)
  ];

const getItemUrl = async itemName => {
  try {
    const dom = await JSDOM.fromURL(
      `https://www.roguard.net/db/search/?search=${itemName}`
    );

    let itemUrl = dom.window.document.querySelector(
      '#content > div > table > tbody > tr > td:nth-child(2) > div:nth-child(1) > a'
    ).href;

    if (!itemUrl.includes('/db/items')) {
      itemUrl = null;
    }

    if (itemUrl.includes('items')) {
      const itemDom = await JSDOM.fromURL(itemUrl);
      return getCommonInfo(itemUrl, itemDom);
    }

    return false;
  } catch (err) {
    return {
      error:
        '`' +
        itemNotFoundMessages +
        '`' +
        `\n**Veja se encontra o que procura no site oficial:** \nhttps://www.roguard.net/db/search/?search=${itemName.replace(
          ' ',
          '+'
        )}`
    };
  }
};

const getCommonInfo = async (itemUrl, dom) => {
  let dropInfo = await getDropInfo(dom);

  if (!dropInfo) {
    dropInfo = false;
  }

  return new Promise((resolve, reject) => {
    try {
      tabletojson.convertUrl(itemUrl).then(tablesAsJson => {
        const tableInfo = {
          name: dom.window.document.querySelector('#content > div > h1')
            .textContent,

          url: itemUrl,

          thumb: Array.from(dom.window.document.querySelectorAll('img')).find(
            img => img.src.includes('/icons/items')
          ).src,

          desc: tablesAsJson[0]
            .filter(key => Object.keys(key).length === 1 && key['0'] !== '')
            .map(text => text['0'])
            .join(', ')
            .replace(/\n/g, ', '),

          level:
            tablesAsJson[0][
              tablesAsJson[0].map(key => key['0']).indexOf('Level')
            ]['1'],

          maxstack:
            tablesAsJson[0][
              tablesAsJson[0].map(key => key['0']).indexOf('Max Stack')
            ]['1'],

          sellable:
            tablesAsJson[0][
              tablesAsJson[0].map(key => key['0']).indexOf('Sellable')
            ]['1'],

          sellprice:
            tablesAsJson[0][
              tablesAsJson[0].map(key => key['0']).indexOf('Sell Price')
            ]['1'],

          auctionable:
            tablesAsJson[0][
              tablesAsJson[0].map(key => key['0']).indexOf('Auctionable')
            ]['1'],

          storageable:
            tablesAsJson[0][
              tablesAsJson[0].map(key => key['0']).indexOf('Storageable')
            ]['1'],

          drop: dropInfo ? dropInfo.join(', ') : null
        };

        resolve(tableInfo);
      });
    } catch (error) {
      reject(error);
    }
  });
};

const getDropInfo = dom => {
  try {
    const droppedBy = Array.from(
      dom.window.document.querySelectorAll('h2')
    ).find(el => el.textContent === 'Dropped By').parentNode;

    const monster = Array.from(droppedBy.children)
      .filter(div => div.tagName === 'DIV')
      .map(div => div.childNodes[2].childNodes[1].textContent);

    const rate = Array.from(droppedBy.children)
      .filter(div => div.tagName === 'DIV')
      .map(div => `(${div.childNodes[2].childNodes[5].textContent})`);

    return monster.map((mob, i) => `${mob} ${rate[i]}`);
  } catch (err) {
    return false;
  }
};

module.exports = getItemUrl;
