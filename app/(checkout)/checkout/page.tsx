'use client';

import { Container, Title } from '@/shared/components/shared';
import { Textarea } from '@/shared/components/ui';
import { useCart } from '@/shared/hooks';
import React from 'react';

export default function CheckoutPage() {
  const [submitting, setSubmitting] = React.useState(false);
  const { totalAmount, updateItemQuantity, items, removeCartItem, loading } = useCart();

  return (
    <Container className="mt-10">
      <Title text="Оформление заказа" className="font-extrabold mb-8 text-[36px]" />

      <Textarea rows={5} />
    </Container>
  );
}
