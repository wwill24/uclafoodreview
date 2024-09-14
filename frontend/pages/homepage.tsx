'use client';

import * as React from 'react';
import Navbar from '../components/NavbarNew';

import { ReactSearchAutocomplete } from 'react-search-autocomplete';

const formatResult = (item: any) => {
  return (
    <>
      <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
    </>
  );
};

const items = [
  {
    id: 0,
    name: 'Cobol',
  },
  {
    id: 1,
    name: 'JavaScript',
  },
  {
    id: 2,
    name: 'Basic',
  },
  {
    id: 3,
    name: 'PHP',
  },
  {
    id: 4,
    name: 'Java',
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div style={{ marginTop: '200px' }}>
        <ReactSearchAutocomplete
          className='w-[500px]'
          items={items}
          onSearch={() => {}}
          onHover={() => {}}
          onSelect={() => {}}
          onFocus={() => {}}
          formatResult={formatResult}
          autoFocus
        />
      </div>
    </div>
  );
}
