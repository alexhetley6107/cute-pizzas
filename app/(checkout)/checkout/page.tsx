'use client';

import {
  CheckoutAddressForm,
  CheckoutCart,
  CheckoutPersonalForm,
  CheckoutSidebar,
  Container,
  Title,
} from '@/shared/components/shared';
import { useCart } from '@/shared/hooks';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { checkoutFormSchema, CheckoutFormValues } from '@/shared/constants';
import toast from 'react-hot-toast';
import { createOrder } from '@/app/api/actions';
import { useRouter } from 'next/navigation';
import qs from 'qs';

export default function CheckoutPage() {
  const { push } = useRouter();
  const [submitting, setSubmitting] = React.useState(false);
  const { totalAmount, updateItemQuantity, items, removeCartItem, loading } = useCart();

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      phone: '',
      address: '',
      comment: '',
    },
  });

  const onClickCountButton = (id: number, quantity: number, type: 'plus' | 'minus') => {
    const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };

  const onSubmit = async (data: CheckoutFormValues) => {
    try {
      setSubmitting(true);

      const orderId = await createOrder(data);

      console.log({ orderId });

      toast.error('Order successfully placed! 📝 Proceed to payment... ', {
        icon: '✅',
      });

      if (orderId) {
        const query = qs.stringify({ orderId });
        push(`/payment?${query}`, { scroll: false });
      }
    } catch (err) {
      console.log(err);
      toast.error('Failed to create order', { icon: '❌' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container className="mt-2 md:mt-10 px-4 ">
      <Title
        text="Placing an order"
        className="font-extrabold mb-2 md:mb-8 text-[22px] md:text-[36px]"
      />

      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <div className="flex-row lg:flex gap-10 pb-20">
            <div className="flex flex-col gap-2 md:gap-10 flex-1 mb-2 md:mb-10">
              <CheckoutCart
                onClickCountButton={onClickCountButton}
                removeCartItem={removeCartItem}
                items={items}
                loading={loading}
              />
              <CheckoutPersonalForm className={loading ? 'opacity-40 pointer-events-none' : ''} />
              <CheckoutAddressForm className={loading ? 'opacity-40 pointer-events-none' : ''} />
            </div>

            <div className="w-full lg:w-[450px]">
              <CheckoutSidebar totalAmount={totalAmount} loading={loading || submitting} />
            </div>
          </div>
        </form>
      </FormProvider>
    </Container>
  );
}
