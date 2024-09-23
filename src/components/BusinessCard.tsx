'use client';

import React from 'react';
import Link from 'next/link';
import { Star } from 'lucide-react';
import Image from 'next/image';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import epicimg from '../../frontend/img/epicuriaimg.png';

import { useState } from 'react';

interface Props {
  businessName: string,
  address: string,
  rating: number
}

export default function BusinessCard(props: Props) {
  const router = useRouter();
  const name = props.businessName;
  const starRating = props.rating;
  const reviewsCount = 12;

  return (
    <Card className="w-[40vw] h-[20vh] flex flex-row p-4 gap-4 items-center shadow-lg hover:shadow-2xl">
      <div>
        <Image src={epicimg} height={120} width={120} alt="epicuria image" className="rounded-md" />
      </div>
      <div className='flex items-center'>
        <div className='w-[27vw] h-full'>
          <CardTitle className="text-xl text-[#238dd3]">{name}</CardTitle>
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`${i < Math.floor(starRating) ? 'text-[#2b6db8]' : 'text-gray-300'}`}
              />
            ))}
            <span className="text-gray-600 text-sm">{starRating} ({reviewsCount} reviews)</span>
          </div>
          <CardDescription className="text-gray-500 text-sm mt">PIZZA PIZZA SO YUMMY!</CardDescription>
          <div className='flex flex-row items-end justify-end'>
            <Button className="mt-2 bg-[#4773ec] text-white rounded-md text-sm" onClick={() => router.push('/review/epicuria')}>Leave Review</Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
