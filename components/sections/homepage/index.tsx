'use client';

import React, { useState, useMemo } from 'react';
import {
  Button,
  ButtonGroup,
  Card,
  Chip,
  Image,
  Input,
  ScrollShadow
} from '@nextui-org/react';
import { menuData } from './menu-items';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useInView } from 'react-intersection-observer';
import NotFoundIcon from '@/components/icons/not-found';
import { Heading, MenuItem } from '@/lib/interface';

const MenuItemComponent = React.memo(({ item }: { item: MenuItem }) => {
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
          src={item.image}
          loading="lazy"
        />
      </div>
      <div className="mt-1 flex w-full flex-col gap-2 px-1">
        <div className="flex items-start justify-between gap-1">
          <h3 className="line-clamp-2 text-small font-medium capitalize text-default-700">
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
});

export default function MenuComponent() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [tempSearchQuery, setTempSearchQuery] = useState<string>('');

  const handleCategoryClick = (subheading: string) => {
    setSelectedCategory(subheading);
  };

  const filteredData = useMemo(() => {
    return menuData
      .map((category) => ({
        ...category,
        subcategories: category.subcategories
          .filter((subcategory) =>
            selectedCategory
              ? subcategory.subheading === selectedCategory
              : true
          )
          .map((subcategory) => ({
            ...subcategory,
            items: subcategory.items.filter(
              (item) =>
                item.name.toLowerCase().includes(searchQuery) ||
                (item.description &&
                  item.description.toLowerCase().includes(searchQuery)) ||
                (item.tags &&
                  item.tags.some((tag) =>
                    tag.toLowerCase().includes(searchQuery)
                  ))
            )
          }))
      }))
      .filter((category) =>
        category.subcategories.some(
          (subcategory) => subcategory.items.length > 0
        )
      );
  }, [menuData, selectedCategory, searchQuery]);

  const categoryButtons = useMemo(() => {
    return menuData.map((category, index) =>
      category.subcategories.map((subcategory) => (
        <Button
          key={`${index}-${subcategory.subheading}`}
          onClick={() => handleCategoryClick(subcategory.subheading)}
          radius="full"
          color={
            selectedCategory === subcategory.subheading ? 'primary' : 'default'
          }
          variant="flat"
          as={Button}
        >
          {subcategory.subheading}
        </Button>
      ))
    );
  }, [menuData, selectedCategory]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search Bar */}
      <ScrollShadow
        orientation="horizontal"
        className="no-scrollbar mb-8 flex gap-2 overflow-x-scroll p-1"
      >
        <ButtonGroup>
          <Button
            radius="full"
            color={selectedCategory ? 'default' : 'primary'}
            variant="flat"
            as={Button}
            onClick={() => setSelectedCategory(null)}
          >
            All
          </Button>
          {categoryButtons}
        </ButtonGroup>
      </ScrollShadow>

      <div className="mb-4 flex max-w-sm items-center">
        <Input
          startContent={<Icon icon="eva:search-outline" />}
          type="text"
          placeholder={
            selectedCategory
              ? `Search among ${selectedCategory}`
              : `Search for a dish`
          }
          className="w-full rounded-r-none"
          value={tempSearchQuery}
          onChange={(e) => setTempSearchQuery(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              setSearchQuery(tempSearchQuery.toLowerCase());
            }
          }}
          endContent={
            searchQuery && (
              <Button
                variant="flat"
                onClick={() => {
                  setTempSearchQuery('');
                  setSearchQuery('');
                }}
                size="sm"
                isIconOnly
                radius="full"
              >
                <Icon icon="eva:close-outline" />
              </Button>
            )
          }
          classNames={{
            inputWrapper: 'rounded-r-none'
          }}
        />
        <Button
          isIconOnly
          color="primary"
          className="rounded-l-none"
          onClick={() => {
            setSearchQuery(tempSearchQuery.toLowerCase());
          }}
        >
          <Icon icon="eva:search-outline" />
        </Button>
      </div>

      <Card className="p-4">
        {filteredData.length > 0 ? (
          filteredData.map((category: Heading, categoryIndex) => (
            <div key={categoryIndex}>
              {category.subcategories.length > 0 &&
                category.subcategories.some(
                  (subcategory) => subcategory.items.length > 0
                ) && (
                  <h2 className="mb-4 text-2xl font-bold uppercase text-primary">
                    {category.heading}
                  </h2>
                )}
              {category.subcategories.map((subcategory, subcategoryIndex) => (
                <div key={subcategoryIndex} className="mb-6">
                  {subcategory.items.length > 0 && (
                    <h3 className="mb-2 text-xl font-semibold capitalize text-primary">
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
          ))
        ) : (
          <div className="flex flex-col items-center">
            <NotFoundIcon width="200px" height="200px" class="text-primary" />
            <h3 className="text-2xl font-semibold text-primary">
              No Results Found
            </h3>
            <p className="text-center text-default-700">
              We couldn&apos;t find what you searched for. Try searching again.
            </p>
          </div>
        )}
      </Card>
    </div>
  );
}
