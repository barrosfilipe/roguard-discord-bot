'use strict';

const jsdom = require('jsdom');
const utils = require('./utils');
const { JSDOM } = jsdom;

const errorMessage =
  utils.mobNotFoundMessages[
    Math.floor(Math.random() * utils.mobNotFoundMessages.length)
  ];

const getMobCard = async mobUrl => {
  try {
    const dom = await JSDOM.fromURL(mobUrl);

    const card = Array.from(dom.window.document.querySelectorAll('h2')).find(
      el => el.textContent === 'Card'
    ).parentNode;

    const cardImg = Array.from(card.children).map(img => img.children)[1][0]
      .src;

    const mobDesc = dom.window.document.querySelector('#content > div > p')
      .textContent;

    const cardInfo = Array.from(card.children)
      .filter(div => div.tagName === 'DIV')
      .map(div => div.childNodes[0])
      .filter(text => text)
      .map(text => text.textContent)
      .filter((c, i) => i > 0)
      .join(', ');

    return {
      mob: mobDesc ? mobDesc : null,
      thumb: cardImg ? cardImg : null,
      desc: cardInfo ? cardInfo : null
    };
  } catch (err) {
    return false;
  }
};

const getMobLocations = async mobUrl => {
  try {
    const dom = await JSDOM.fromURL(mobUrl);

    const locations = Array.from(
      dom.window.document.querySelectorAll('h2')
    ).find(el => el.textContent === 'Locations').parentNode;

    const mobLocations = Array.from(locations.children)
      .filter(div => div.tagName === 'DIV')
      .map(div => div.childNodes[0].textContent);

    const mobLocationsLevel = Array.from(locations.children)
      .filter(div => div.tagName === 'DIV')
      .map(div => div.childNodes[1].textContent.trim());

    return mobLocations.map(
      (location, i) => `${location} ${mobLocationsLevel[i]}`
    );
  } catch (err) {
    return false;
  }
};

const getMobUrl = async mobName => {
  try {
    const dom = await JSDOM.fromURL(
      `https://www.roguard.net/db/search/?search=${mobName}`
    );

    const mobUrl = dom.window.document.querySelector(
      '#content > div > table:nth-child(4) > tbody > tr > td:nth-child(2) > div:nth-child(1) > a'
    ).href;

    const cardData = await getMobCard(mobUrl);
    const locationData = await getMobLocations(mobUrl);

    if (mobUrl.includes('monsters')) {
      const mobInfo = {
        name: dom.window.document.querySelector(
          '#content > div > table:nth-child(4) > tbody > tr > td:nth-child(2) > div:nth-child(1) > a'
        ).textContent,

        thumb: dom.window.document.querySelector(
          '#content > div > table:nth-child(4) > tbody > tr > td:nth-child(1) > img'
        ).src,

        type: dom.window.document.querySelector(
          '#content > div > table:nth-child(4) > tbody > tr > td:nth-child(2) > div:nth-child(2)'
        ).textContent,

        level: dom.window.document
          .querySelector(
            '#content > div > table:nth-child(4) > tbody > tr > td:nth-child(3) > div:nth-child(1)'
          )
          .textContent.split(' ')[1]
          .trim(),

        hp: dom.window.document
          .querySelector(
            '#content > div > table:nth-child(4) > tbody > tr > td:nth-child(3) > div:nth-child(2)'
          )
          .textContent.split(' ')[0]
          .trim(),

        base: dom.window.document
          .querySelector(
            '#content > div > table:nth-child(4) > tbody > tr > td:nth-child(4) > div:nth-child(1)'
          )
          .textContent.split(' ')[0]
          .trim(),

        job: dom.window.document
          .querySelector(
            '#content > div > table:nth-child(4) > tbody > tr > td:nth-child(4) > div:nth-child(2)'
          )
          .textContent.split(' ')[0]
          .trim(),

        url: mobUrl,

        cardimg: cardData.thumb,

        cardinfo: cardData.desc || 'Monster has no card',

        mobdesc: cardData.mob,

        locations: locationData ? locationData.join(', ') : 'Location not found'
      };

      return mobInfo;
    }

    return false;
  } catch (err) {
    return { error: errorMessage };
  }
};

module.exports = getMobUrl;
