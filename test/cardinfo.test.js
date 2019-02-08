'use strict';

const mobinfo = require('../src/components/mobinfo');

beforeAll(done => {
  done();
});

test('It should return monster card info', async () => {
  const monster = await mobinfo('poring');
  expect(monster).toHaveProperty('name');
  expect(monster).toHaveProperty('thumb');
  expect(monster).toHaveProperty('type');
  expect(monster).toHaveProperty('cardimg');
  expect(monster).toHaveProperty('cardinfo');
  expect(monster).toHaveProperty('url');
});
