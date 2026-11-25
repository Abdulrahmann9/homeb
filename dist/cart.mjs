export const money = value => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
export function calculateTotals(cart, dishes, chefs, promo = '') {
  const items = cart.flatMap(item => {
    const dish = dishes.find(d => d.id === item.id);
    return dish && Number.isInteger(item.qty) && item.qty > 0 ? [{ ...dish, qty: Math.min(item.qty, 20) }] : [];
  });
  const subtotalCents = items.reduce((sum, item) => sum + Math.round(item.price * 100) * item.qty, 0);
  const chefIds = [...new Set(items.map(item => item.chefId))];
  const rawDeliveryCents = chefIds.reduce((sum, id) => sum + Math.round((chefs.find(c => c.id === id)?.deliveryFee || 0) * 100), 0);
  const discountCents = promo === 'FIRSTBITE' ? Math.min(1000, Math.round(subtotalCents * .2)) : 0;
  const deliveryCents = promo === 'FREEDELIVERY' ? 0 : rawDeliveryCents;
  const serviceCents = items.length ? 99 : 0;
  return { items, subtotal: subtotalCents / 100, delivery: deliveryCents / 100, service: serviceCents / 100, discount: discountCents / 100, total: (subtotalCents + deliveryCents + serviceCents - discountCents) / 100, kitchens: chefIds.length };
}
