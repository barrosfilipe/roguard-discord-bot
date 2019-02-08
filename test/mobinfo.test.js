'use strict';

const mobinfo = require('../src/components/mobinfo');

beforeAll(done => {
  done();
});

test('It should return monster base info', async () => {
  const monster = await mobinfo('poring');
  expect(monster).toHaveProperty('name');
  expect(monster).toHaveProperty('thumb');
  expect(monster).toHaveProperty('type');
  expect(monster).toHaveProperty('level');
  expect(monster).toHaveProperty('hp');
  expect(monster).toHaveProperty('base');
  expect(monster).toHaveProperty('job');
  expect(monster).toHaveProperty('url');
});
