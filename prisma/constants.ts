export const categories = [
  {
    name: 'Pizzas',
  },
  {
    name: 'Breakfast',
  },
  {
    name: 'Appetizers',
  },
  {
    name: 'Cocktails',
  },
  {
    name: 'Drinks',
  },
];

export const _ingredients = [
  {
    name: 'Cheese border',
    price: 17,
    imageUrl: '/images/ingredients/cheeze_bortik.png',
  },
  {
    name: 'Creamy mozzarella',
    price: 9,
    imageUrl: '/images/ingredients/slivochnaya_mozzarella.png',
  },
  {
    name: 'Cheddar and Parmesan cheeses',
    price: 8,
    imageUrl: '/images/ingredients/cheeze_cheddr_and_parmezan.png',
  },
  {
    name: 'Hot Jalapeno Pepper',
    price: 5,
    imageUrl: '/images/ingredients/ostriy_perets_halapenu.png',
  },
  {
    name: 'Tender Chicken',
    price: 18,
    imageUrl: '/images/ingredients/nezhniy_ciplenok.png',
  },
  {
    name: 'Champignons',
    price: 16,
    imageUrl: '/images/ingredients/shampinyoni.png',
  },
  {
    name: 'Ham',
    price: 23,
    imageUrl: '/images/ingredients/vetchina.png',
  },
  {
    name: 'Spicy pepperoni',
    price: 7,
    imageUrl: '/images/ingredients/pikantnaya_paperoni.png',
  },
  {
    name: 'Spicy Chorizo',
    price: 8,
    imageUrl: '/images/ingredients/ostraya_chorizo.png',
  },
  {
    name: 'Pickled cucumbers',
    price: 5,
    imageUrl: '/images/ingredients/marinovannie_ogurchiki.png',
  },
  {
    name: 'Fresh tomatoes',
    price: 9,
    imageUrl: '/images/ingredients/svezhie_tomati.png',
  },
  {
    name: 'Red onion',
    price: 11,
    imageUrl: '/images/ingredients/krasniy_luk.png',
  },
  {
    name: 'Juicy pineapples',
    price: 20,
    imageUrl: '/images/ingredients/sochnie_ananasi.png',
  },
  {
    name: 'Italian herbs',
    price: 11,
    imageUrl: '/images/ingredients/italianskie_travi.png',
  },
  {
    name: 'Sweet pepper',
    price: 12,
    imageUrl: '/images/ingredients/sladkiy_perets.png',
  },
  {
    name: 'Feta cheese cubes',
    price: 16,
    imageUrl: '/images/ingredients/kubiki_brinzi.png',
  },
  {
    name: 'Meatballs',
    price: 32,
    imageUrl: '/images/ingredients/mitboli.png',
  },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const products = [
  {
    name: 'Omelette with ham and mushrooms',
    imageUrl: '/images/products/omlet_s_vetchinoy_i_gribami.webp',
    categoryId: 2,
  },
  {
    name: 'Omelette with pepperoni',
    imageUrl: '/images/products/omlet_s_peperoni.webp',
    categoryId: 2,
  },
  {
    name: 'Coffee Latte',
    imageUrl: '/images/products/kofe_latte.webp',
    categoryId: 2,
  },
  {
    name: 'Danwich ham and cheese',
    imageUrl: '/images/products/denvich_vetchina_i_sir.webp',
    categoryId: 3,
  },
  {
    name: 'Chicken Nuggets',
    imageUrl: '/images/products/kurinie_naggetsi.webp',
    categoryId: 3,
  },
  {
    name: 'Oven baked potatoes with sauce 🌱',
    imageUrl: '/images/products/kartofel_iz_pechi_s_sousom.webp',
    categoryId: 3,
  },
  {
    name: 'Dodster',
    imageUrl: '/images/products/dodster.webp',
    categoryId: 3,
  },
  {
    name: 'Sharp Dodster 🌶️🌶️',
    imageUrl: '/images/products/ostriy_dodster.webp',
    categoryId: 3,
  },
  {
    name: 'Banana Milkshake',
    imageUrl: '/images/products/bananoviy_molochniy_kokteil.webp',
    categoryId: 4,
  },
  {
    name: 'Caramel Apple Milkshake',
    imageUrl: '/images/products/karamenoe_yabloko_molochniy_kokteil.webp',
    categoryId: 4,
  },
  {
    name: 'Oreo Cookie Milkshake',
    imageUrl: '/images/products/molochniy_kokteil_s_pecheniem_oreo.webp',
    categoryId: 4,
  },
  {
    name: 'Classic Milkshake 👶',
    imageUrl: '/images/products/klassicheskiy_molochniy_kokteil.webp',
    categoryId: 4,
  },
  {
    name: 'Irish Cappuccino',
    imageUrl: '/images/products/irlandskiy_kapucino.webp',
    categoryId: 5,
  },
  {
    name: 'Coffee Caramel Cappuccino',
    imageUrl: '/images/products/kofe_karamelniy_kapuchino.webp',
    categoryId: 5,
  },
  {
    name: 'Coffee Coconut Latte',
    imageUrl: '/images/products/kofe_kokosoviy_latte.webp',
    categoryId: 5,
  },
  {
    name: 'Americano coffee',
    imageUrl: '/images/products/kofe_amerikano.webp',
    categoryId: 5,
  },
  {
    name: 'Coffee Latte',
    imageUrl: '/images/products/kofe_latte.webp',
    categoryId: 5,
  },
];
