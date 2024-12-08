'use client';
import React, { useState } from 'react';
import { Button, Chip, cn, Image, Input } from '@nextui-org/react';
import { menuData } from './menu-items';
import { Icon } from '@iconify/react/dist/iconify.js';

interface MenuItem {
  name: string;
  price: number;
  description?: string;
  image?: string;
}

interface Subcategory {
  subheading: string;
  items: MenuItem[];
}

interface Heading {
  heading: string;
  subcategories: Subcategory[];
}

export default function MenuComponent() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleCategoryClick = (heading: string) => {
    setSelectedCategory(selectedCategory === heading ? null : heading);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filteredData = menuData
    .filter((category) =>
      selectedCategory ? category.heading === selectedCategory : true
    )
    .map((category) => ({
      ...category,
      subcategories: category.subcategories.map((subcategory) => ({
        ...subcategory,
        items: subcategory.items.filter(
          (item: MenuItem) =>
            item.name.toLowerCase().includes(searchQuery) ||
            (item.description &&
              item.description.toLowerCase().includes(searchQuery))
        )
      }))
    }))
    .filter(
      (category) =>
        category.heading.toLowerCase().includes(searchQuery) ||
        category.subcategories.some(
          (subcategory) =>
            subcategory.subheading.toLowerCase().includes(searchQuery) ||
            subcategory.items.length > 0
        )
    );

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search Bar */}
      <div className="mb-4 max-w-sm">
        <Input
          startContent={<Icon icon="eva:search-outline" />}
          type="text"
          onClear={() => setSearchQuery('')}
          value={searchQuery}
          onChange={handleSearch}
          isClearable
          placeholder="Search categories, subcategories, or items"
          className="w-full"
        />
      </div>

      {/* Category Navigation */}
      <div className="mb-8 flex flex-wrap gap-2">
        <Chip
          radius="full"
          color={selectedCategory ? 'default' : 'primary'}
          as={Button}
          onClick={() => setSelectedCategory(null)}
        >
          All
        </Chip>
        {menuData.map((category, index) => (
          <Chip
            key={index}
            onClick={() => handleCategoryClick(category.heading)}
            radius="full"
            color={
              selectedCategory === category.heading ? 'primary' : 'default'
            }
            as={Button}
          >
            {category.heading}
          </Chip>
        ))}
      </div>

      {/* Filtered Data Display */}
      {filteredData.map((category: Heading, categoryIndex) => (
        <div key={categoryIndex} className="mb-8">
          {category.subcategories.length > 0 && (
            <h2 className="mb-4 text-2xl font-bold text-secondary">
              {category.heading}
            </h2>
          )}
          {category.subcategories.map((subcategory, subcategoryIndex) => (
            <div key={subcategoryIndex} className="mb-6">
              {subcategory.items.length > 0 && (
                <h3 className="mb-2 text-xl font-semibold text-primary">
                  {subcategory.subheading}
                </h3>
              )}
              <div className="mx-auto my-auto grid max-w-7xl grid-cols-1 gap-5 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {subcategory.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className={cn(
                      'relative flex w-full flex-none flex-col gap-3'
                    )}
                  >
                    <Image
                      isBlurred
                      isZoomed
                      width={800}
                      alt={item.name}
                      className="aspect-[3/4] w-full !max-w-full hover:scale-110"
                      isLoading={item.image ? false : true}
                      src={item.image || '/no-image.png'}
                      loading="lazy"
                    />
                    <div className="mt-1 flex flex-col gap-2 px-1">
                      <div className="flex items-start justify-between gap-1">
                        <h3 className="text-small font-medium capitalize text-default-700">
                          {item.name}
                        </h3>
                      </div>
                      {item.description && (
                        <p className="text-small text-default-500">
                          {item.description}
                        </p>
                      )}
                      <p className="text-small font-medium text-default-500">
                        ₹{item.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
