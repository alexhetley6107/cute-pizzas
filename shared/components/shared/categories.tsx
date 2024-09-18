'use client';

import { cn } from '@/shared/lib/utils';
import { useCategoryStore } from '@/shared/store/category';
import { Category } from '@prisma/client';
import Link from 'next/link';
import React from 'react';

interface Props {
  className?: string;
  items: Category[];
}

export const Categories: React.FC<Props> = ({ className, items }) => {
  const categoryActiveId = useCategoryStore((st) => st.activeId);

  return (
    <div className={cn('inline-flex  gap-1 bg-gray-50 p-1 rounded-2xl overflow-x-auto', className)}>
      {items.map(({ name, id }) => (
        <Link
          key={name}
          className={cn(
            'flex items-center font-bold h-7 sm:h-11 px-3 sm:px-5 rounded-2xl ',
            categoryActiveId === id && 'bg-white shadow-md shadow-gray-200 text-primary'
          )}
          href={`/#${name}`}
        >
          {name}
        </Link>
      ))}
    </div>
  );
};
