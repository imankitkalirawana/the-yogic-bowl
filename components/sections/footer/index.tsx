'use client';

import React from 'react';
import { Chip, Divider, Image } from '@nextui-org/react';

export default function Footer() {
  return (
    <footer className="flex w-full flex-col">
      <div className="mx-auto w-full max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <a
          href="https://g.co/kgs/qXocccH"
          target="_BLANK"
          className="flex flex-col items-center justify-center gap-2 md:order-2 md:items-end"
        >
          Visit Us
        </a>
        <div className="mt-4 md:order-1 md:mt-0">
          <div className="flex items-center justify-center gap-3 md:justify-start">
            <div className="flex items-center">
              <Image src="/logo.png" width={50} height={50} />
              <span className="text-small font-medium uppercase">
                The Yogic Bowl
              </span>
            </div>
            <Divider className="h-4" orientation="vertical" />
            <Chip
              className="border-none px-0 text-default-500"
              color="success"
              variant="dot"
            >
              Rishikesh, India
            </Chip>
          </div>
          <p className="text-center text-tiny text-default-400 md:text-start">
            Developed by{' '}
            <a
              className="underline"
              href="https://divinely.dev"
              target="_BLANK"
            >
              Divinely Developer
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
