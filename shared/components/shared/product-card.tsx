import React from 'react';
import { Button } from '@/shared/components/ui/button';
import { Plus } from 'lucide-react';
import { cn } from '@/shared/lib/utils';
import { Title } from './title';
import Link from 'next/link';
import { Ingredient } from '@prisma/client';
// import { CountButton } from './count-button';

interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  ingredients: Ingredient[];
  className?: string;
}

export const ProductCard: React.FC<Props> = ({
  id,
  name,
  price,
  imageUrl,
  ingredients,
  className,
}) => {
  return (
    <div className={cn(' min-w-[215px]', className)}>
      <Link href={`/product/${id}`}>
        <div className="flex justify-center p-2  bg-secondary rounded-lg h-[260px]">
          <img className="w-[255px] h-auto min-w-[255px]" src={imageUrl} alt={name} />
        </div>
        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
        <p className="text-sm text-gray-400">
          {ingredients.map((ingredient) => ingredient.name).join(', ')}
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-[20px]">
            <b>{price} €</b>
          </span>

          <Button variant="secondary">
            <Plus size={20} className="mr-1" />
            Add
          </Button>
        </div>
      </Link>
    </div>
  );
};
