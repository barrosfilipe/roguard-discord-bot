'use strict';

const mobinfo = require('../src/components/mobinfo');

beforeAll(done => {
  done();
});

test('It should return monster map locations', async () => {
  const monster = await mobinfo('poring');
  expect(monster).toHaveProperty('name');
  expect(monster).toHaveProperty('thumb');
  expect(monster).toHaveProperty('type');
  expect(monster).toHaveProperty('locations');
  expect(monster).toHaveProperty('url');
});
