'use strict';

const dropinfo = require('../src/components/dropinfo');

beforeAll(done => {
  done();
});

test('It should return monster drop info', async () => {
  const monster = await dropinfo('poring');
  expect(monster).toHaveProperty('name');
  expect(monster).toHaveProperty('thumb');
  expect(monster).toHaveProperty('url');
  expect(monster).toHaveProperty('itemdrops');
});
