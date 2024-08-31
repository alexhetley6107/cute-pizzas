// import { Prisma } from '@prisma/client';
import { hashSync } from 'bcrypt';
import { categories, _ingredients, products } from './constants';
import { prisma } from './prisma-client';
import { Prisma } from '@prisma/client';

const generateProductItem = ({
  productId,
  price,
  pizzaType,
  size,
}: {
  productId: number;
  price: number;
  pizzaType?: 1 | 2;
  size?: 20 | 30 | 40;
}) => {
  return {
    productId,
    price,
    pizzaType,
    size,
  } as Prisma.ProductItemUncheckedCreateInput;
};

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: 'User Testy',
        email: 'user@test.com',
        password: hashSync('123123', 10),
        verified: new Date(),
        role: 'USER',
      },
      {
        fullName: 'Admin Testy',
        email: 'admin@admin.com',
        password: hashSync('123123', 10),
        verified: new Date(),
        role: 'ADMIN',
      },
    ],
  });

  await prisma.category.createMany({ data: categories });
  await prisma.ingredient.createMany({ data: _ingredients });
  await prisma.product.createMany({ data: products });

  const pizza1 = await prisma.product.create({
    data: {
      name: 'Пепперони фреш',
      imageUrl: '/images/pizzas/pizza_1.webp',
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(0, 5),
      },
    },
  });

  const pizza2 = await prisma.product.create({
    data: {
      name: 'Сырная',
      imageUrl: '/images/pizzas/pizza_2.webp',
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(5, 10),
      },
    },
  });

  const pizza3 = await prisma.product.create({
    data: {
      name: 'Чоризо фреш',
      imageUrl: '/images/pizzas/pizza_3.webp',
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(10, 40),
      },
    },
  });

  await prisma.productItem.createMany({
    data: [
      // Пицца "Пепперони фреш"
      generateProductItem({ productId: pizza1.id, price: 31, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza1.id, price: 54, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza1.id, price: 73, pizzaType: 2, size: 40 }),

      // Пицца "Сырная"
      generateProductItem({ productId: pizza2.id, price: 28, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza2.id, price: 45, pizzaType: 1, size: 30 }),
      generateProductItem({ productId: pizza2.id, price: 59, pizzaType: 1, size: 40 }),
      generateProductItem({ productId: pizza2.id, price: 41, pizzaType: 2, size: 20 }),
      generateProductItem({ productId: pizza2.id, price: 63, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza2.id, price: 78, pizzaType: 2, size: 40 }),

      // Пицца "Чоризо фреш"
      generateProductItem({ productId: pizza3.id, price: 42, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza3.id, price: 64, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza3.id, price: 83, pizzaType: 2, size: 40 }),

      // Остальные продукты
      generateProductItem({ productId: 1, price: 35 }),
      generateProductItem({ productId: 2, price: 28 }),
      generateProductItem({ productId: 3, price: 17 }),
      generateProductItem({ productId: 4, price: 43 }),
      generateProductItem({ productId: 5, price: 16 }),
      generateProductItem({ productId: 6, price: 8 }),
      generateProductItem({ productId: 7, price: 61 }),
      generateProductItem({ productId: 8, price: 70 }),
      generateProductItem({ productId: 9, price: 30 }),
      generateProductItem({ productId: 10, price: 43 }),
      generateProductItem({ productId: 11, price: 36 }),
      generateProductItem({ productId: 12, price: 21 }),
      generateProductItem({ productId: 13, price: 34 }),
      generateProductItem({ productId: 14, price: 25 }),
      generateProductItem({ productId: 15, price: 33 }),
      generateProductItem({ productId: 16, price: 28 }),
      generateProductItem({ productId: 17, price: 17 }),
    ],
  });

  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        totalAmount: 0,
        token: '11111',
      },
      {
        userId: 2,
        totalAmount: 0,
        token: '222222',
      },
    ],
  });

  await prisma.cartItem.create({
    data: {
      productItemId: 1,
      cartId: 1,
      quantity: 2,
      ingredients: {
        connect: [{ id: 1 }, { id: 2 }, { id: 3 }],
      },
    },
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
