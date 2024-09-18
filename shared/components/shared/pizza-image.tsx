import { cn } from '@/shared/lib/utils';
import React from 'react';

interface Props {
  className?: string;
  imageUrl: string;
  size: 20 | 30 | 40;
}

export const PizzaImage: React.FC<Props> = ({ imageUrl, size, className }) => {
  return (
    <div className={cn('flex items-center justify-center flex-1 relative w-full', className)}>
      <div className="flex items-center justify-center h-[350px] sm:h-[400px] xl:h-[500px]">
        <img
          src={imageUrl}
          alt="Logo"
          className={cn('relative left-2 top-2 transition-all z-10 duration-300', {
            'w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] xl:w-[300px] xl:h-[300px]': size === 20,
            'w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] xl:w-[400px] xl:h-[400px]': size === 30,
            'w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] xl:w-[500px] xl:h-[500px]': size === 40,
          })}
        />
      </div>

      <div className="hidden xl:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed border-2 rounded-full border-gray-200 w-[450px] h-[450px]" />
      <div className="hidden xl:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dotted border-2 rounded-full border-gray-100 w-[370px] h-[370px]" />
    </div>
  );
};
