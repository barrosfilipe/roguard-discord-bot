'use strict';

const itemprice = require('../src/components/itemprice');

beforeAll(done => {
  done();
});

test('It should return item price', async () => {
  const item = await itemprice('jellopy');
  expect(item).toHaveProperty('name');
  expect(item).toHaveProperty('thumb');
  expect(item).toHaveProperty('price');
  expect(item).toHaveProperty('volume');
});
