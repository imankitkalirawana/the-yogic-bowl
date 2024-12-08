'use client';

import React from 'react';
import { Button, Image, Skeleton } from '@nextui-org/react';
import { cn } from '@nextui-org/react';

const menu = [
  {
    beverages: {
      juices: [
        {
          name: 'Mausambi (sweet lime) juice',
          price: 120
        },
        {
          name: 'Pineapple juice',
          price: 150
        },
        {
          name: 'Watermelon juice',
          price: 120
        },
        {
          name: 'Apple beetroot carrot juice',
          price: 150
        }
      ],
      shakes: [
        {
          name: 'Strawberry milkshake',
          price: 150,
          description:
            'A refreshing blend of fresh strawberries, milk, and creamy ice cream.'
        },
        {
          name: 'Peanut Butter Brownie Shake',
          price: 200,
          description:
            'Decadent shake loaded with peanut butter, brownie chunks, and whipped cream.'
        },
        {
          name: 'Caramel Pretzel Shake',
          price: null,
          description:
            'Sweet and salty indulgence with caramel sauce and crunchy pretzel bits.'
        },
        {
          name: "Boozy S'mores Milkshake",
          price: null,
          description:
            'A sinful mix of chocolate, marshmallow, and a boozy kick.'
        },
        {
          name: 'Oreo Cookies Shake',
          price: 150,
          description:
            'A creamy blend of Oreo cookies, milk, and vanilla ice cream, topped with crushed cookies.'
        }
      ]
    }
  }
];

export type PlaceListItemColor = {
  name: string;
  hex: string;
};

export type PlaceItem = {
  id: string;
  name: string;
  href: string;
  price: number;
  isNew?: boolean;
  rating?: number;
  ratingCount?: number;
  description?: string;
  imageSrc: string;
};

export type PlaceListItemProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'id'
> & {
  isPopular?: boolean;
  isLoading?: boolean;
  removeWrapper?: boolean;
} & PlaceItem;

const PlaceListItem = React.forwardRef<HTMLDivElement, PlaceListItemProps>(
  (
    {
      name,
      price,
      rating,
      isLoading,
      description,
      imageSrc,
      removeWrapper,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'relative flex w-full flex-none flex-col gap-3',
          {
            'rounded-none bg-background shadow-none': removeWrapper
          },
          className
        )}
        {...props}
      >
        <Image
          isBlurred
          isZoomed
          alt={name}
          className="aspect-square w-full hover:scale-110"
          isLoading={isLoading}
          src={imageSrc}
        />

        <div className="mt-1 flex flex-col gap-2 px-1">
          {isLoading ? (
            <div className="my-1 flex flex-col gap-3">
              <Skeleton className="w-3/5 rounded-lg">
                <div className="h-3 w-3/5 rounded-lg bg-default-200" />
              </Skeleton>
              <Skeleton className="mt-3 w-4/5 rounded-lg">
                <div className="h-3 w-4/5 rounded-lg bg-default-200" />
              </Skeleton>
              <Skeleton className="mt-4 w-2/5 rounded-lg">
                <div className="h-3 w-2/5 rounded-lg bg-default-300" />
              </Skeleton>
            </div>
          ) : (
            <>
              <div className="flex items-start justify-between gap-1">
                <h3 className="text-small font-medium text-default-700">
                  {name}
                </h3>
              </div>
              {description ? (
                <p className="text-small text-default-500">{description}</p>
              ) : null}
              <p className="text-small font-medium text-default-500">
                ₹{price}
              </p>
            </>
          )}
        </div>
      </div>
    );
  }
);

PlaceListItem.displayName = 'PlaceListItem';

export default PlaceListItem;
