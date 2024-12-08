'use client';
import React, { useState } from 'react';
import {
  Button,
  Card,
  Chip,
  cn,
  Divider,
  Image,
  Input,
  ScrollShadow
} from '@nextui-org/react';
import { menuData } from './menu-items';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useInView } from 'react-intersection-observer';

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

      <ScrollShadow
        orientation="horizontal"
        className="no-scrollbar mb-8 flex gap-2 overflow-x-scroll py-4"
      >
        <Chip
          radius="full"
          size="lg"
          color={selectedCategory ? 'default' : 'primary'}
          variant={selectedCategory ? 'bordered' : 'flat'}
          as={Button}
          onClick={() => setSelectedCategory(null)}
        >
          All
        </Chip>
        {menuData.map((category, index) => (
          <Chip
            key={index}
            size="lg"
            onClick={() => handleCategoryClick(category.heading)}
            radius="full"
            color={
              selectedCategory === category.heading ? 'primary' : 'default'
            }
            variant={
              selectedCategory === category.heading ? 'flat' : 'bordered'
            }
            as={Button}
          >
            {category.heading}
          </Chip>
        ))}
      </ScrollShadow>

      <Card className="p-4">
        {filteredData.map((category: Heading, categoryIndex) => (
          <div key={categoryIndex} className="mb-8">
            {category.subcategories.length > 0 && (
              <>
                <h2 className="mb-4 text-2xl font-bold text-secondary">
                  {category.heading}
                </h2>
              </>
            )}
            {category.subcategories.map((subcategory, subcategoryIndex) => (
              <div key={subcategoryIndex} className="mb-6">
                {subcategory.items.length > 0 && (
                  <h3 className="mb-2 text-xl font-semibold text-primary">
                    {subcategory.subheading}
                  </h3>
                )}
                <div className="mx-auto my-auto grid max-w-7xl grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                  {subcategory.items.map((item, itemIndex) => (
                    <MenuItemComponent key={itemIndex} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </Card>
    </div>
  );
}

const MenuItemComponent = ({ item }: { item: MenuItem }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div ref={ref} className="relative flex w-full flex-none gap-3 sm:flex-col">
      <div className="max-w-48 sm:max-w-full">
        <Image
          isBlurred
          isZoomed
          width={400}
          alt={item.name}
          className="aspect-[3/4] w-full !max-w-full bg-center hover:scale-110"
          isLoading={!inView}
          src={item.image || '/no-image.png'}
          loading="lazy"
        />
      </div>

      <div className="mt-1 flex w-full flex-col gap-2 px-1">
        <div className="flex items-start justify-between gap-1">
          <h3 className="text-small font-medium capitalize text-default-700">
            {item.name}
          </h3>
        </div>
        {item.description && (
          <p
            title={item.description}
            className="line-clamp-3 text-small text-default-500 sm:line-clamp-2"
          >
            {item.description}
          </p>
        )}
        <p className="text-small font-medium text-default-500">₹{item.price}</p>
      </div>
    </div>
  );
};
