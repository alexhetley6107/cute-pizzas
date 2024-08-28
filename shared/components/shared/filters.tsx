'use client';
import React from 'react';
import { CheckboxFiltersGroup } from '@/shared/components/shared';
import { Input } from '@/shared/components/ui';
import { Title } from './title';
import { RangeSlider } from '../ui';
import { useFilters, useIngredients, useQueryFilters } from '@/shared/hooks';

interface Props {
  className?: string;
}

interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}

interface QueryFilters extends PriceProps {
  pizzaTypes: string;
  sizes: string;
  ingredients: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const filters = useFilters();
  useQueryFilters(filters);

  const { ingredients, loading } = useIngredients();
  const items = ingredients.map((item) => ({ value: String(item.id), text: item.name }));

  const updatePrices = (prices: number[]) => {
    filters.setPrices('priceFrom', prices[0]);
    filters.setPrices('priceTo', prices[1]);
  };

  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      <CheckboxFiltersGroup
        name={'pizzaTypes'}
        className="mt-5"
        title="Тип теста"
        selected={filters.pizzaTypes}
        onClickCheckbox={filters.setPizzaTypes}
        items={[
          { text: 'Тонкое', value: '1' },
          { text: 'Традиционное', value: '2' },
        ]}
      />

      <CheckboxFiltersGroup
        name={'sizes'}
        className="mt-5"
        title="Размеры"
        selected={filters.sizes}
        onClickCheckbox={filters.setSizes}
        items={[
          { text: '20 см', value: '20' },
          { text: '30 см', value: '30' },
          { text: '40 см', value: '40' },
        ]}
      />

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            value={String(filters.prices.priceFrom)}
            onChange={(e) => filters.setPrices('priceFrom', Number(e.target.value))}
          />
          <Input
            type="number"
            min={100}
            max={1000}
            placeholder="1000"
            value={String(filters.prices.priceTo)}
            onChange={(e) => filters.setPrices('priceTo', Number(e.target.value))}
          />
        </div>
        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[filters.prices.priceFrom || 0, filters.prices.priceTo || 1000]}
          onValueChange={updatePrices}
        />
      </div>

      <CheckboxFiltersGroup
        className="mt-5"
        title="Формат"
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        selected={filters.selectedIngredients}
        onClickCheckbox={filters.setSelectedIngredients}
        name={'ingredients'}
      />
    </div>
  );
};