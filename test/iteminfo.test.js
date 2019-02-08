'use strict';

const iteminfo = require('../src/components/iteminfo');

beforeAll(done => {
  done();
});

test('It should return item info', async () => {
  const item = await iteminfo('jellopy');
  expect(item).toHaveProperty('name');
  expect(item).toHaveProperty('thumb');
  expect(item).toHaveProperty('url');
  expect(item).toHaveProperty('level');
  expect(item).toHaveProperty('maxstack');
  expect(item).toHaveProperty('sellable');
  expect(item).toHaveProperty('sellprice');
  expect(item).toHaveProperty('auctionable');
  expect(item).toHaveProperty('storageable');
  expect(item).toHaveProperty('drop');
});
