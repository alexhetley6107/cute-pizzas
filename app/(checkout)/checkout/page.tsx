'use client';

import { Container, Title } from '@/shared/components/shared';
import { Textarea } from '@/shared/components/ui';

export default function CheckoutPage() {
  return (
    <Container className="mt-10">
      <Title text="Оформление заказа" className="font-extrabold mb-8 text-[36px]" />

      <Textarea rows={5} />
    </Container>
  );
}
