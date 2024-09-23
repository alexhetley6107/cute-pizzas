import {
  Categories,
  Container,
  Filters,
  FiltersDrawer,
  ProductsGroupList,
  SortPopup,
  Title,
} from '@/shared/components/shared';
import { prisma } from '@/prisma/prisma-client';
import { Suspense } from 'react';
import { findPizzas, GetSearchParams } from '@/shared/lib/find-pizzas';
import { Stories } from '@/shared/components/shared/stories';

export default async function Home({ searchParams }: { searchParams: GetSearchParams }) {
  const categories = await findPizzas(searchParams);

  return (
    <>
      <Container className="mt-4 xl:mt-10 px-4">
        <Title text="Все пиццы" className="font-extrabold text-[22px] md:text-[36px]" />
      </Container>

      <div className="sticky z-10 top-0 bg-white py-1 sm:py-5 shadow-lg shadow-black/5">
        <Container className="flex flex-wrap items-center justify-between gap-2 px-4">
          <Categories items={categories.filter((c) => c.products.length > 0)} />
          <SortPopup />
          <div className="md:hidden block">
            <FiltersDrawer />
          </div>
        </Container>
      </div>

      <Container className="px-4 hidden md:block">
        <Stories />
      </Container>

      <Container className="mt-10 pb-14 px-4">
        <div className="flex gap-3 xl:gap-[80px]">
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
          </div>

          <div className="hidden md:block w-[250px]">
            <Suspense>
              <Filters />
            </Suspense>
          </div>
        </div>
      </Container>
    </>
  );
}
