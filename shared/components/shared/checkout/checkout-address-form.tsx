'use client';

import React from 'react';
import { WhiteBlock } from '../white-block';
import { FormInput, FormTextarea } from '../forms';

interface Props {
  className?: string;
}

export const CheckoutAddressForm: React.FC<Props> = ({ className }) => {
  return (
    <WhiteBlock title="3. Delivery address" className={className}>
      <div className="flex flex-col gap-5">
        <FormInput name="address" className="text-base" placeholder="Your address" />

        <FormTextarea
          name="comment"
          className="text-base"
          placeholder="Comment to order"
          rows={5}
        />
      </div>
    </WhiteBlock>
  );
};
