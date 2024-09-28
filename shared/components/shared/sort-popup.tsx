'use client';

import React from 'react';
import { cn } from '@/shared/lib/utils';
import { ArrowUpDown } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/components/ui';
import { useFilters, useQueryFilters } from '@/shared/hooks';

const sortVariants = [
  { value: 'asc', title: 'cheap', text: 'First the cheap ones' },
  { value: 'desc', title: 'expensive', text: 'First the expensive ones' },
];

interface Props {
  className?: string;
}

export const SortPopup: React.FC<Props> = ({ className }) => {
  const filters = useFilters();
  useQueryFilters(filters);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div
          className={cn(
            'inline-flex items-center gap-1 bg-gray-50 px-1 md:px-5 h-[52px] rounded-2xl cursor-pointer ',
            className
          )}
        >
          <ArrowUpDown size={16} />
          <b>Sorting:</b>

          <b className="text-primary">{filters.sortBy || 'popular'}</b>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[240px]">
        <ul>
          {sortVariants.map(({ value, text }) => (
            <li
              key={value}
              onClick={() => filters.setSortBy(value)}
              className="hover:bg-secondary hover:text-primary p-2 px-4 cursor-pointer rounded-md"
            >
              {text}
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
};
