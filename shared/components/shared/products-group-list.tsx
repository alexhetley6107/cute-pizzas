'use client';

import React from 'react';
import { Title } from './title';
import { ProductCard } from './product-card';
import { useIntersection } from 'react-use';
import { useCategoryStore } from '@/shared/store/catagory';

interface Props {
  title: string;
  items: any[];
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
      <div className="grid grid-cols-3 gap-[50px]">
        {items.map((p, i) => (
          <ProductCard
            key={p.id}
            id={p.id}
            name={p.name}
            imageUrl={p.imageUrl}
            price={p.items[0].price}
            // ingredients={p.ingredients}
          />
        ))}
      </div>
    </div>
  );
};
