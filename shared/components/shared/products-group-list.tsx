'use client';

import React from 'react';
import { Title } from './title';
import { ProductCard } from './product-card';
import { useIntersection } from 'react-use';
import { useCategoryStore } from '@/shared/store/category';
import { ProductWithRelations } from '@/@types/prisma';

interface Props {
  title: string;
  items: ProductWithRelations[];
  className?: string;
  categoryId: number;
}

export const ProductsGroupList: React.FC<Props> = ({ title, items, className, categoryId }) => {
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  const setActiveCategoryId = useCategoryStore((st) => st.setActiveId);

  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [categoryId, intersection?.isIntersecting, setActiveCategoryId]);

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[10px] xl:gap-[50px]">
        {items.map((p) => (
          <ProductCard
            key={p.id}
            id={p.id}
            name={p.name}
            imageUrl={p.imageUrl}
            price={p.items[0].price}
            ingredients={p.ingredients}
          />
        ))}
      </div>
    </div>
  );
};
