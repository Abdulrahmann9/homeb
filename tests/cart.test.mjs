import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateTotals, money } from '../dist/cart.mjs';

const chefs = [
  { id: 'a', deliveryFee: 1.99 },
  { id: 'b', deliveryFee: 2.49 },
  { id: 'free', deliveryFee: 0 },
];
const dishes = [
  { id: 'curry', chefId: 'a', name: 'Curry', price: 12.95 },
  { id: 'rice', chefId: 'a', name: 'Rice', price: 9.25 },
  { id: 'pizza', chefId: 'b', name: 'Pizza', price: 15 },
  { id: 'bowl', chefId: 'free', name: 'Bowl', price: 10 },
];

test('quantities and currency rounding produce a cent-accurate receipt', () => {
  const result = calculateTotals([{ id: 'curry', qty: 3 }, { id: 'rice', qty: 2 }], dishes, chefs);
  assert.equal(result.subtotal, 57.35);
  assert.equal(result.delivery, 1.99);
  assert.equal(result.service, 0.99);
  assert.equal(result.discount, 0);
  assert.equal(result.total, 60.33);
  assert.equal(money(result.total), '$60.33');

  const tinyPrices = [{ id: 'tiny', chefId: 'free', price: 0.1 }];
  assert.equal(calculateTotals([{ id: 'tiny', qty: 3 }], tinyPrices, chefs).total, 1.29);
});

test('mixed-kitchen delivery is charged once for each distinct kitchen', () => {
  const result = calculateTotals([
    { id: 'curry', qty: 2 },
    { id: 'rice', qty: 3 },
    { id: 'pizza', qty: 4 },
    { id: 'bowl', qty: 1 },
  ], dishes, chefs);
  assert.equal(result.kitchens, 3);
  assert.equal(result.delivery, 4.48);
  assert.equal(result.subtotal, 123.65);
  assert.equal(result.service, 0.99);
  assert.equal(result.total, 129.12);
});

test('FIRSTBITE discounts only food and rounds the discount to cents', () => {
  const result = calculateTotals([{ id: 'curry', qty: 1 }], dishes, chefs, 'FIRSTBITE');
  assert.equal(result.discount, 2.59);
  assert.equal(result.delivery, 1.99);
  assert.equal(result.service, 0.99);
  assert.equal(result.total, 13.34);

  const oddPrice = [{ id: 'odd', chefId: 'free', price: 9.99 }];
  assert.equal(calculateTotals([{ id: 'odd', qty: 1 }], oddPrice, chefs, 'FIRSTBITE').discount, 2);
});

test('FIRSTBITE caps the discount at $10 at and above a $50 food subtotal', () => {
  for (const qty of [5, 6, 20]) {
    const result = calculateTotals([{ id: 'bowl', qty }], dishes, chefs, 'FIRSTBITE');
    assert.equal(result.discount, 10);
    assert.equal(result.total, 10 * qty - 10 + 0.99);
  }
});

test('FREEDELIVERY waives every kitchen fee but keeps food and service charges', () => {
  const result = calculateTotals([{ id: 'curry', qty: 1 }, { id: 'pizza', qty: 1 }], dishes, chefs, 'FREEDELIVERY');
  assert.equal(result.subtotal, 27.95);
  assert.equal(result.delivery, 0);
  assert.equal(result.discount, 0);
  assert.equal(result.service, 0.99);
  assert.equal(result.total, 28.94);
});

test('empty carts carry no fees, discount, or kitchen count with any promo', () => {
  for (const promo of ['', 'FIRSTBITE', 'FREEDELIVERY']) {
    assert.deepEqual(calculateTotals([], dishes, chefs, promo), {
      items: [], subtotal: 0, delivery: 0, service: 0, discount: 0, total: 0, kitchens: 0,
    });
  }
});

test('unknown dishes and invalid quantities are excluded from all totals', () => {
  const invalidCart = [
    { id: 'missing', qty: 5 },
    { qty: 2 },
    ...[0, -1, 1.5, '2', undefined, null, NaN, Infinity].map(qty => ({ id: 'pizza', qty })),
  ];
  assert.deepEqual(calculateTotals(invalidCart, dishes, chefs), calculateTotals([], dishes, chefs));

  const result = calculateTotals([...invalidCart, { id: 'bowl', qty: 2 }], dishes, chefs);
  assert.equal(result.items.length, 1);
  assert.equal(result.kitchens, 1);
  assert.equal(result.subtotal, 20);
  assert.equal(result.total, 20.99);
});

test('a valid quantity above the limit is clamped to 20 without mutating the cart', () => {
  const cart = [{ id: 'pizza', qty: 200 }];
  const result = calculateTotals(cart, dishes, chefs);
  assert.equal(result.items[0].qty, 20);
  assert.equal(result.subtotal, 300);
  assert.equal(result.delivery, 2.49);
  assert.equal(result.total, 303.48);
  assert.equal(cart[0].qty, 200);
});

test('an unrecognized promo leaves the ordinary receipt unchanged', () => {
  const cart = [{ id: 'curry', qty: 1 }];
  assert.deepEqual(calculateTotals(cart, dishes, chefs, 'NOTACODE'), calculateTotals(cart, dishes, chefs));
});
