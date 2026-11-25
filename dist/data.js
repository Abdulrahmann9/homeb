/* HomeBite project demo: every chef, kitchen, rating, review count and menu is fictional.
   Food photographs are illustrative Unsplash images; prices are in USD. */
window.HOMEBITE_DATA = {
  cuisines: [
    { id: 'indian', name: 'Indian', emoji: '🍛' },
    { id: 'italian', name: 'Italian', emoji: '🍕' },
    { id: 'middle-eastern', name: 'Middle Eastern', emoji: '🥙' },
    { id: 'asian', name: 'Asian', emoji: '🍜' },
    { id: 'mexican', name: 'Mexican', emoji: '🌮' },
    { id: 'healthy', name: 'Healthy', emoji: '🥗' },
    { id: 'desserts', name: 'Desserts', emoji: '🍰' }
  ],
  chefs: [
    {
      id: 'aisha', name: 'Aisha Patel', kitchen: 'Aisha’s Kitchen', cuisine: 'indian',
      avatar: 'https://i.pravatar.cc/160?img=47', rating: 4.9, reviews: 128,
      time: '25–35', deliveryFee: 1.99,
      bio: 'Slow-simmered curries, freshly ground spices, and the family recipes I grew up sharing. A little taste of home in every bowl.',
      tags: ['Family recipes', 'Made to order']
    },
    {
      id: 'marco', name: 'Marco Rossi', kitchen: 'Nonna’s Table', cuisine: 'italian',
      avatar: 'https://i.pravatar.cc/160?img=12', rating: 4.9, reviews: 96,
      time: '30–40', deliveryFee: 2.49,
      bio: 'My grandmother taught me that good food needs simple ingredients and a little patience. Expect hand-stretched pizza and comforting pasta.',
      tags: ['Handmade dough', 'Italian classics']
    },
    {
      id: 'layla', name: 'Layla Hassan', kitchen: 'Layla’s Little Kitchen', cuisine: 'middle-eastern',
      avatar: 'https://i.pravatar.cc/160?img=44', rating: 4.8, reviews: 84,
      time: '20–30', deliveryFee: 0,
      bio: 'Bright herbs, warm flatbreads, and generous bowls inspired by long lunches around our family table. There is always room for one more.',
      tags: ['Fresh every day', 'Vegetarian options']
    },
    {
      id: 'mei', name: 'Mei Chen', kitchen: 'The Little Wok', cuisine: 'asian',
      avatar: 'https://i.pravatar.cc/160?img=49', rating: 4.9, reviews: 152,
      time: '25–35', deliveryFee: 1.49,
      bio: 'Hand-folded dumplings and sizzling wok favorites, made in small batches with the recipes my mum passed down to me.',
      tags: ['Small batches', 'Comfort food']
    },
    {
      id: 'sofia', name: 'Sofía Ramírez', kitchen: 'Casa Sofía', cuisine: 'mexican',
      avatar: 'https://i.pravatar.cc/160?img=45', rating: 4.8, reviews: 113,
      time: '25–35', deliveryFee: 1.99,
      bio: 'Slow-braised birria, fresh salsas, and a generous squeeze of lime. These are the joyful, colorful meals my family gathers for.',
      tags: ['Homemade salsa', 'Family favorites']
    },
    {
      id: 'emma', name: 'Emma Brooks', kitchen: 'The Green Spoon', cuisine: 'healthy',
      avatar: 'https://i.pravatar.cc/160?img=48', rating: 4.7, reviews: 67,
      time: '20–30', deliveryFee: 0,
      bio: 'Feel-good food that is full of flavor. I build colorful bowls around seasonal vegetables, hearty grains, and dressings made from scratch.',
      tags: ['Plant forward', 'Seasonal ingredients']
    },
    {
      id: 'amelie', name: 'Amélie Laurent', kitchen: 'A Little Sweet', cuisine: 'desserts',
      avatar: 'https://i.pravatar.cc/160?img=32', rating: 4.9, reviews: 91,
      time: '20–30', deliveryFee: 1.49,
      bio: 'Small-batch bakes for little celebrations and ordinary Tuesdays. Real butter, good chocolate, and a kitchen that always smells like vanilla.',
      tags: ['Small-batch bakes', 'Made with love']
    },
    {
      id: 'fatima', name: 'Fatima Yılmaz', kitchen: 'The Olive Table', cuisine: 'middle-eastern',
      avatar: 'https://i.pravatar.cc/160?img=46', rating: 4.8, reviews: 74,
      time: '30–40', deliveryFee: 2.49,
      bio: 'From hand-shaped köfte to colorful mezze, I cook the Turkish dishes that turn a simple dinner into a table worth gathering around.',
      tags: ['Turkish favorites', 'Freshly prepared']
    }
  ],
  dishes: [
    {
      id: 'butter-chicken', name: 'Homestyle Butter Chicken', chefId: 'aisha', cuisine: 'indian',
      description: 'Tender chicken in a slow-simmered tomato and butter sauce, with fluffy basmati rice and warm naan.',
      price: 14.50, image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=85',
      rating: 4.9, popular: true, vegetarian: false, spicy: true, tag: 'Bestseller'
    },
    {
      id: 'margherita-pizza', name: 'Nonna’s Margherita', chefId: 'marco', cuisine: 'italian',
      description: 'Hand-stretched sourdough, rich tomato sauce, creamy mozzarella, and fresh basil. Simple, just like Nonna made it.',
      price: 13.00, image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=85',
      rating: 4.9, popular: true, vegetarian: true, spicy: false, tag: 'Community favorite'
    },
    {
      id: 'mediterranean-bowl', name: 'Mediterranean Sunshine Bowl', chefId: 'layla', cuisine: 'middle-eastern',
      description: 'Crispy falafel, lemony couscous, crunchy vegetables, creamy hummus, and a generous drizzle of tahini.',
      price: 12.50, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85',
      rating: 4.8, popular: true, vegetarian: true, spicy: false, tag: 'Fresh & wholesome'
    },
    {
      id: 'birria-tacos', name: 'Slow-Cooked Birria Tacos', chefId: 'sofia', cuisine: 'mexican',
      description: 'Three golden tacos filled with tender braised beef and melted cheese, served with rich consommé for dipping.',
      price: 15.00, image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=900&q=85',
      rating: 4.9, popular: true, vegetarian: false, spicy: true, tag: 'Selling fast'
    },
    {
      id: 'chicken-dumplings', name: 'Mum’s Chicken Dumplings', chefId: 'mei', cuisine: 'asian',
      description: 'Eight hand-folded dumplings with chicken, ginger, and spring onion. Pan-fried and served with homemade dipping sauce.',
      price: 12.00, image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=900&q=85',
      rating: 4.9, popular: true, vegetarian: false, spicy: false, tag: 'Handmade'
    },
    {
      id: 'harvest-bowl', name: 'Roasted Harvest Bowl', chefId: 'emma', cuisine: 'healthy',
      description: 'Roasted sweet potato, quinoa, avocado, and crisp greens with a bright lemon-tahini dressing.',
      price: 13.50, image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=85',
      rating: 4.8, popular: true, vegetarian: true, spicy: false, tag: 'Feel-good favorite'
    },
    {
      id: 'paneer-tikka', name: 'Creamy Paneer Tikka Masala', chefId: 'aisha', cuisine: 'indian',
      description: 'Golden paneer and sweet peppers in a fragrant tomato masala, served with cumin rice and fresh coriander.',
      price: 13.00, image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=85',
      rating: 4.8, popular: false, vegetarian: true, spicy: true, tag: 'Vegetarian'
    },
    {
      id: 'chicken-biryani', name: 'Sunday Chicken Biryani', chefId: 'aisha', cuisine: 'indian',
      description: 'Aromatic basmati rice layered with spiced chicken, caramelized onions, and saffron. Cooling cucumber raita on the side.',
      price: 15.50, image: 'https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=900&q=85',
      rating: 4.9, popular: false, vegetarian: false, spicy: true, tag: 'Family recipe'
    },
    {
      id: 'pesto-pasta', name: 'Basil Pesto Pasta', chefId: 'marco', cuisine: 'italian',
      description: 'Pasta tossed in homemade basil pesto with cherry tomatoes, toasted pine nuts, and vegetarian hard cheese.',
      price: 14.00, image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85',
      rating: 4.8, popular: false, vegetarian: true, spicy: false, tag: 'Kitchen favorite'
    },
    {
      id: 'lasagna', name: 'Sunday Beef Lasagna', chefId: 'marco', cuisine: 'italian',
      description: 'Layers of slow-cooked beef ragù, silky béchamel, and pasta, baked until bubbling and golden.',
      price: 16.00, image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=900&q=85',
      rating: 4.9, popular: false, vegetarian: false, spicy: false, tag: 'Comfort food'
    },
    {
      id: 'shawarma-wrap', name: 'Chicken Shawarma Wrap', chefId: 'layla', cuisine: 'middle-eastern',
      description: 'Warm flatbread wrapped around spiced chicken, pickles, crisp vegetables, and fluffy homemade garlic sauce.',
      price: 11.50, image: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=900&q=85',
      rating: 4.8, popular: false, vegetarian: false, spicy: false, tag: 'Lunch favorite'
    },
    {
      id: 'noodle-bowl', name: 'Sesame Ginger Noodles', chefId: 'mei', cuisine: 'asian',
      description: 'Springy noodles, colorful vegetables, and golden tofu tossed in a fragrant sesame-ginger sauce.',
      price: 12.50, image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=85',
      rating: 4.8, popular: false, vegetarian: true, spicy: false, tag: 'Plant powered'
    },
    {
      id: 'teriyaki-chicken', name: 'Sticky Teriyaki Chicken', chefId: 'mei', cuisine: 'asian',
      description: 'Glazed chicken with steamed jasmine rice, broccoli, pickled cucumber, and a sprinkle of sesame.',
      price: 14.50, image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85',
      rating: 4.9, popular: false, vegetarian: false, spicy: false, tag: 'Chef’s pick'
    },
    {
      id: 'burrito-bowl', name: 'Smoky Black Bean Bowl', chefId: 'sofia', cuisine: 'mexican',
      description: 'Cilantro-lime rice, smoky black beans, roasted corn, fresh pico de gallo, and homemade guacamole.',
      price: 12.00, image: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=900&q=85',
      rating: 4.7, popular: false, vegetarian: true, spicy: true, tag: 'Vegetarian'
    },
    {
      id: 'chicken-quesadilla', name: 'Golden Chicken Quesadilla', chefId: 'sofia', cuisine: 'mexican',
      description: 'Toasted tortilla packed with seasoned chicken and melted cheese, with salsa roja and cooling sour cream.',
      price: 11.50, image: 'https://images.unsplash.com/photo-1618040996337-56904b7850b9?auto=format&fit=crop&w=900&q=85',
      rating: 4.8, popular: false, vegetarian: false, spicy: false, tag: 'Golden & crispy'
    },
    {
      id: 'avocado-toast', name: 'Garden Avocado Toast', chefId: 'emma', cuisine: 'healthy',
      description: 'Two slices of toasted sourdough with creamy avocado, cherry tomatoes, microgreens, and lemon.',
      price: 10.50, image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=85',
      rating: 4.7, popular: false, vegetarian: true, spicy: false, tag: 'Brunch ready'
    },
    {
      id: 'chocolate-cake', name: 'Chocolate Fudge Cake', chefId: 'amelie', cuisine: 'desserts',
      description: 'A generous slice of soft chocolate cake layered with silky dark chocolate ganache. Best shared, but we understand.',
      price: 9.00, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85',
      rating: 4.9, popular: true, vegetarian: true, spicy: false, tag: 'Sweet treat'
    },
    {
      id: 'berry-pancakes', name: 'Berry Sunday Pancakes', chefId: 'amelie', cuisine: 'desserts',
      description: 'A fluffy homemade pancake stack with seasonal berries, vanilla cream, and maple syrup on the side.',
      price: 11.00, image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=900&q=85',
      rating: 4.8, popular: false, vegetarian: true, spicy: false, tag: 'Weekend favorite'
    },
    {
      id: 'kofte-plate', name: 'Turkish Köfte Plate', chefId: 'fatima', cuisine: 'middle-eastern',
      description: 'Hand-shaped beef köfte with fluffy bulgur, roasted peppers, a fresh chopped salad, and yogurt sauce.',
      price: 16.50, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=85',
      rating: 4.9, popular: false, vegetarian: false, spicy: false, tag: 'Family recipe'
    },
    {
      id: 'mezze-box', name: 'The Homemade Mezze Box', chefId: 'fatima', cuisine: 'middle-eastern',
      description: 'Creamy hummus, smoky eggplant dip, stuffed vine leaves, olives, and warm pita for a relaxed little feast.',
      price: 14.00, image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=85',
      rating: 4.8, popular: false, vegetarian: true, spicy: false, tag: 'Made for sharing'
    }
  ]
};
