import {
  Categories,
  Container,
  Filters,
  ProductsGroupList,
  SortPopup,
  Title,
} from '@/shared/components/shared';
import { prisma } from '@/prisma/prisma-client';
import { Suspense } from 'react';
import { findPizzas, GetSearchParams } from '@/shared/lib/find-pizzas';

export default async function Home({ searchParams }: { searchParams: GetSearchParams }) {
  const categories = await findPizzas(searchParams);

  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <div className="sticky z-10 top-0 bg-white py-5 shadow-lg shadow-black/5">
        <Container className="flex items-center justify-between ">
          <Categories items={categories.filter((c) => c.products.length > 0)} />
          <SortPopup />
        </Container>
      </div>

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {categories.map(
                (c) =>
                  c.products.length > 0 && (
                    <ProductsGroupList
                      key={c.id}
                      title={c.name}
                      items={c.products}
                      categoryId={c.id}
                    />
                  )
              )}
            </div>

            <div className="flex items-center gap-6 mt-12">
              {/* <Pagination pageCount={3} /> */}
              <span className="text-sm text-gray-400">5 из 65</span>
            </div>
          </div>

          <div className="w-[250px]">
            <Suspense>
              <Filters />
            </Suspense>
          </div>
        </div>
      </Container>
    </>
  );
}
