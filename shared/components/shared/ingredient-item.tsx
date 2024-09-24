import { cn } from '@/shared/lib/utils';
import { CircleCheck } from 'lucide-react';
import React from 'react';

interface Props {
  imageUrl: string;
  name: string;
  price: number;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export const IngredientItem: React.FC<Props> = ({
  className,
  active,
  price,
  name,
  imageUrl,
  onClick,
}) => {
  return (
    <div
      className={cn(
        'flex items-center flex-col p-1 rounded-md w-full text-center relative cursor-pointer shadow-md bg-white border',
        { 'border-primary': active },
        className
      )}
      onClick={onClick}
    >
      {active && <CircleCheck className="absolute top-2 right-2 text-primary" />}
      <img className=" w-[50px] h-[50px] sm:w-[110px] sm:h-[110px]" src={imageUrl} alt="" />
      <span className="text-xs mb-0 sm:mb-1 text-wrap">{name}</span>
      <span className="font-bold text-xs sm:text-base">{price} €</span>
    </div>
  );
};
