'use client';

import React from 'react';
import { cn } from '@nextui-org/react';

import places from './places';
import PlaceListItem from './place-list-item';

export default function Menu({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'mx-auto my-auto grid max-w-7xl grid-cols-1 gap-5 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5',
        className
      )}
    ></div>
  );
}
