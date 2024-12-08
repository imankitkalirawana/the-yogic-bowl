import React from 'react';
import Image from 'next/image';
import { Code } from '@nextui-org/react';
import Menu from '@/components/sections/homepage';
import MenuComponent from '@/components/sections/homepage/store';
export default function Page() {
  return (
    <>
      {/* <Menu /> */}
      <MenuComponent />
    </>
  );
}
