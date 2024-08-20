import {
  Categories,
  Container,
  Filters,
  ProductsGroupList,
  SortPopup,
  Title,
} from '@/components/shared';

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <div className="sticky top-0 bg-white py-5 shadow-lg shadow-black/5">
        <Container className="flex items-center justify-between ">
          <Categories />
          <SortPopup />
        </Container>
      </div>

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                items={[
                  {
                    id: 1,
                    name: '',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
                    price: 390,
                  },
                  {
                    id: 2,
                    name: '',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
                    price: 390,
                  },
                  {
                    id: 3,
                    name: '',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
                    price: 390,
                  },
                  {
                    id: 4,
                    name: '',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
                    price: 390,
                  },
                  {
                    id: 5,
                    name: '',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
                    price: 390,
                  },
                  {
                    id: 6,
                    name: '',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
                    price: 390,
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title="Комбо"
                items={[
                  {
                    id: 1,
                    name: '',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
                    price: 390,
                  },
                  {
                    id: 2,
                    name: '',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
                    price: 390,
                  },
                  {
                    id: 3,
                    name: '',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
                    price: 390,
                  },
                  {
                    id: 4,
                    name: '',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
                    price: 390,
                  },
                  {
                    id: 5,
                    name: '',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
                    price: 390,
                  },
                  {
                    id: 6,
                    name: '',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
                    price: 390,
                  },
                ]}
                categoryId={2}
              />
            </div>

            <div className="flex items-center gap-6 mt-12">
              {/* <Pagination pageCount={3} /> */}
              <span className="text-sm text-gray-400">5 из 65</span>
            </div>
          </div>

          <div className="w-[250px]">
            <Filters />
          </div>
        </div>
      </Container>
    </>
  );
}
