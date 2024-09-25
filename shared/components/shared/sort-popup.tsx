import React from 'react';

import { cn } from '@/shared/lib/utils';
import { ArrowUpDown } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/components/ui';

interface Props {
  className?: string;
}

export const SortPopup: React.FC<Props> = ({ className }) => {
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

          <b className="text-primary">cheap</b>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[240px]">
        <ul>
          <li className="hover:bg-secondary hover:text-primary p-2 px-4 cursor-pointer rounded-md">
            First the cheap ones
          </li>
          <li className="hover:bg-secondary hover:text-primary p-2 px-4 cursor-pointer rounded-md">
            First the expensive ones
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
};
