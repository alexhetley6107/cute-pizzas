'use client';

import { FormInput, Title } from '@/shared/components/shared';
import { Button } from '@/shared/components/ui';
import { paymentFormSchema, PaymentFormValues } from '@/shared/constants';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';

export default function PaymentPage() {
  const form = useForm<PaymentFormValues>({
    resolver: zodResolver(paymentFormSchema),
    defaultValues: {
      accountNumber: '',
      expiringDate: '',
      cvv: '',
    },
  });

  const onSubmit = () => {};

  return (
    <FormProvider {...form}>
      <div className="h-screen flex flex-col justify-center items-center px-5">
        <div className="w-full lg:w-[450px]">
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            <div className="flex flex-col gap-5">
              <Title text="Payment" className="font-extrabold mb-2  text-[22px] md:text-[36px]" />
              <FormInput
                type="number"
                name="accountNumber"
                className="text-base"
                placeholder="Account Number"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FormInput
                  type="number"
                  name="expiringDate"
                  className="text-base"
                  placeholder="Expiring date"
                />
                <FormInput type="number" name="cvv" className="text-base" placeholder="CVV" />
              </div>
              <Button type="submit" className="w-full h-14 rounded-2xl text-base font-bold">
                Pay 57
              </Button>
            </div>
          </form>
        </div>
      </div>
    </FormProvider>
  );
}
