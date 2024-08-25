'use client';

import React from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { Product } from '@prisma/client';
// import { ProductWithRelations } from '@/@types/prisma';
// import { useCartStore } from '@/store';
// import toast from 'react-hot-toast';
// import { ProductForm } from '../product-form';

interface Props {
  product: Product;
  // product: ProductWithRelations;
  className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter();

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden',
          className
        )}
      >
        {/* <ProductForm product={product} onSubmit={() => router.back()} /> */}
        <p>{product.name}</p>
      </DialogContent>
    </Dialog>
  );
};
