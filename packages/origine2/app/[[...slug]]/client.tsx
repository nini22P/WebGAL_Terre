'use client';
 
import React from 'react';
import dynamic from 'next/dynamic';
 
const Main = dynamic(() => import('../../src/main'), { ssr: false });
 
export function ClientOnly() {
  return <Main />;
}