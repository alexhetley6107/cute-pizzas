'use client';

import React from 'react';
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';
import { FormInput } from '../forms';
import { Input } from '../../ui';

interface Props {
  onChange?: (value?: string) => void;
}

const token = 'b5b8bb983ddcd08648080e0271d9dd367bb7aa65';

export const AddressInput: React.FC<Props> = ({ onChange }) => {
  return (
    <AddressSuggestions
      token={token}
      onChange={(data) => onChange?.(data?.value)}
      containerClassName="address-input"
    />
  );
};
