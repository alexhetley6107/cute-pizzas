export const categories = [
  {
    name: 'Пиццы',
  },
  {
    name: 'Завтрак',
  },
  {
    name: 'Закуски',
  },
  {
    name: 'Коктейли',
  },
  {
    name: 'Напитки',
  },
];

export const _ingredients = [
  {
    name: 'Сырный бортик',
    price: 179,
    imageUrl: '/images/ingredients/cheeze_bortik.png',
  },
  {
    name: 'Сливочная моцарелла',
    price: 79,
    imageUrl: '/images/ingredients/slivochnaya_mozzarella.png',
  },
  {
    name: 'Сыры чеддер и пармезан',
    price: 79,
    imageUrl: '/images/ingredients/cheeze_cheddr_and_parmezan.png',
  },
  {
    name: 'Острый перец халапеньо',
    price: 59,
    imageUrl: '/images/ingredients/ostriy_perets_halapenu.png',
  },
  {
    name: 'Нежный цыпленок',
    price: 79,
    imageUrl: '/images/ingredients/nezhniy_ciplenok.png',
  },
  {
    name: 'Шампиньоны',
    price: 59,
    imageUrl: '/images/ingredients/shampinyoni.png',
  },
  {
    name: 'Ветчина',
    price: 79,
    imageUrl: '/images/ingredients/vetchina.png',
  },
  {
    name: 'Пикантная пепперони',
    price: 79,
    imageUrl: '/images/ingredients/pikantnaya_paperoni.png',
  },
  {
    name: 'Острая чоризо',
    price: 79,
    imageUrl: '/images/ingredients/ostraya_chorizo.png',
  },
  {
    name: 'Маринованные огурчики',
    price: 59,
    imageUrl: '/images/ingredients/marinovannie_ogurchiki.png',
  },
  {
    name: 'Свежие томаты',
    price: 59,
    imageUrl: '/images/ingredients/svezhie_tomati.png',
  },
  {
    name: 'Красный лук',
    price: 59,
    imageUrl: '/images/ingredients/krasniy_luk.png',
  },
  {
    name: 'Сочные ананасы',
    price: 59,
    imageUrl: '/images/ingredients/sochnie_ananasi.png',
  },
  {
    name: 'Итальянские травы',
    price: 39,
    imageUrl: '/images/ingredients/italianskie_travi.png',
  },
  {
    name: 'Сладкий перец',
    price: 59,
    imageUrl: '/images/ingredients/sladkiy_perets.png',
  },
  {
    name: 'Кубики брынзы',
    price: 79,
    imageUrl: '/images/ingredients/kubiki_brinzi.png',
  },
  {
    name: 'Митболы',
    price: 79,
    imageUrl: '/images/ingredients/mitboli.png',
  },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const products = [
  {
    name: 'Омлет с ветчиной и грибами',
    imageUrl: '/images/products/omlet_s_vetchinoy_i_gribami.webp',
    categoryId: 2,
  },
  {
    name: 'Омлет с пепперони',
    imageUrl: '/images/products/omlet_s_peperoni.webp',
    categoryId: 2,
  },
  {
    name: 'Кофе Латте',
    imageUrl: '/images/products/kofe_latte.webp',
    categoryId: 2,
  },
  {
    name: 'Дэнвич ветчина и сыр',
    imageUrl: '/images/products/denvich_vetchina_i_sir.webp',
    categoryId: 3,
  },
  {
    name: 'Куриные наггетсы',
    imageUrl: '/images/products/kurinie_naggetsi.webp',
    categoryId: 3,
  },
  {
    name: 'Картофель из печи с соусом 🌱',
    imageUrl: '/images/products/kartofel_iz_pechi_s_sousom.webp',
    categoryId: 3,
  },
  {
    name: 'Додстер',
    imageUrl: '/images/products/dodster.webp',
    categoryId: 3,
  },
  {
    name: 'Острый Додстер 🌶️🌶️',
    imageUrl: '/images/products/ostriy_dodster.webp',
    categoryId: 3,
  },
  {
    name: 'Банановый молочный коктейль',
    imageUrl: '/images/products/bananoviy_molochniy_kokteil.webp',
    categoryId: 4,
  },
  {
    name: 'Карамельное яблоко молочный коктейль',
    imageUrl: '/images/products/karamenoe_yabloko_molochniy_kokteil.webp',
    categoryId: 4,
  },
  {
    name: 'Молочный коктейль с печеньем Орео',
    imageUrl: '/images/products/molochniy_kokteil_s_pecheniem_oreo.webp',
    categoryId: 4,
  },
  {
    name: 'Классический молочный коктейль 👶',
    imageUrl: '/images/products/klassicheskiy_molochniy_kokteil.webp',
    categoryId: 4,
  },
  {
    name: 'Ирландский Капучино',
    imageUrl: '/images/products/irlandskiy_kapucino.webp',
    categoryId: 5,
  },
  {
    name: 'Кофе Карамельный капучино',
    imageUrl: '/images/products/kofe_karamelniy_kapuchino.webp',
    categoryId: 5,
  },
  {
    name: 'Кофе Кокосовый латте',
    imageUrl: '/images/products/kofe_kokosoviy_latte.webp',
    categoryId: 5,
  },
  {
    name: 'Кофе Американо',
    imageUrl: '/images/products/kofe_amerikano.webp',
    categoryId: 5,
  },
  {
    name: 'Кофе Латте',
    imageUrl: '/images/products/kofe_latte.webp',
    categoryId: 5,
  },
];
