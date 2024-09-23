'use client';

import React from 'react';
import Image from 'next/image';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/shared/components/ui/sheet';
import Link from 'next/link';
import { Button } from '../ui';

import { cn } from '@/shared/lib/utils';
import { Filters } from './filters';

export const FiltersDrawer: React.FC<React.PropsWithChildren> = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className={cn('group relative font-bold')}>Фильтр</Button>
      </SheetTrigger>

      <SheetContent className="flex flex-col justify-between pb-15 bg-[#F4F1EE]">
        <div className={cn('flex flex-col h-full  overflow-auto')}>
          <Filters />
        </div>
      </SheetContent>
    </Sheet>
  );
};
