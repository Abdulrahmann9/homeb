# HomeBite

A responsive homemade food delivery app created as a project demo. Built with HTML, CSS, and JavaScript, without runtime dependencies or a build step.

## Run locally

Requires Node.js 20 or newer.

```sh
npm run dev
```

Open http://127.0.0.1:4173 in your browser. Run commands from this directory (`homebite-app`). The app uses JavaScript modules and should be served over HTTP rather than opened as a file.

## Included

- Eight fictional home chefs and 20 sample dishes across Indian, Italian, Middle Eastern, Asian, Mexican, healthy meals, and desserts.
- Cuisine browsing, live search, vegetarian and price filters, ratings, and sorting.
- Chef menus, dish details, serving quantities, favorites, and a cart.
- Delivery details and simulated card, PayPal, Apple Pay, and cash checkout.
- FIRSTBITE: 20% off food on the first demo order, capped at $10. FREEDELIVERY: all kitchen delivery fees waived. Offers cannot be combined.
- Delivery charged once per kitchen, plus a $0.99 service fee per order. Totals calculated in integer cents.
- Demo order confirmation and order history.
- Responsive navigation, keyboard support, native modal dialogs, and reduced-motion support.

## Demo boundaries

All sellers, menus, ratings, reviews, delivery estimates, and orders are fictional project content. No payment provider is connected, no card information is collected, and no order is transmitted. Cash payments are simulated as well. There is no real authentication or backend. Cart, favorites, address, and order history stay in the current browser's local storage; use fictional delivery details during demonstrations.

The application uses illustrative Unsplash food photographs, Pravatar portraits, and Google Fonts. Internet access is needed for those assets; bundled food illustrations and system fonts provide fallbacks.

## Customize

- `dist/data.js`: cuisines, home chefs, dishes, prices, and images.
- `dist/styles.css`: branding, layouts, and responsive styles.
- `dist/app.js`: navigation, discovery, cart, dialogs, and checkout.
- `dist/cart.mjs`: currency formatting and receipt calculations.
- `dist/index.html`: app shell and metadata.

## Verify

```sh
npm run check
```

Checks JavaScript syntax and runs Node tests for money calculations, per-kitchen delivery fees, discounts, invalid cart entries, and quantity limits.

## Hosting

The deployable static app is in `dist`. The private Sites project identity is in `.openai/hosting.json`. Any static host can serve `dist` directly; no server-side code is required.
