'use client';

import React from 'react';
import { useEffect } from 'react';
import { Star } from 'lucide-react';
import Image from 'next/image';

import {
  Card,
  CardDescription,
  CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import { useRouter } from 'next/navigation';
import epicimg from '../../frontend/img/epicuriaimg.png';

interface Props {
  businessName: string,
  address: string,
  rating: number,
  description: string,
  businessID: number,
  reviewCount: number
}

export default function BusinessCard(props: Props) {
  const router = useRouter();
  const name = props.businessName;
  const starRating = props.rating;
  const desc = props.description;
  const businessID = props.businessID;
  const reviewCount = props.reviewCount;

  const routePush = () => {
    router.push(`/dining/dining-halls/${props.businessName.toLowerCase()}/${businessID}`);
  }
  return (
    <Card className="w-[40vw] h-[20vh] flex flex-row p-4 gap-4 items-center shadow-lg hover:shadow-2xl">
      <div className='cursor-pointer' onClick={() => routePush()}>
        <Image src={epicimg} height={120} width={120} alt="epicuria image" className="rounded-md" />
      </div>
      <div className='flex items-center'>
        <div className='w-[27vw] h-full'>
          <CardTitle onClick={() => routePush()} className="cursor-pointer text-xl text-[#238dd3]">{name}</CardTitle>
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                fill={i < Math.floor(starRating) ? '#2b6db8' : '#d1d5db'}
                key={i}
                className={`${i < Math.floor(starRating) ? 'text-[#2b6db8]' : 'text-[#d1d5db]'}`}
              />
            ))}
            <span className="text-gray-600 text-sm">{starRating} ({reviewCount} {reviewCount == 1 ? "Review" : "Reviews" })</span>
          </div>
          <CardDescription className="text-gray-500 text-sm mt">{desc}</CardDescription>
          <div className='flex flex-row items-end justify-end'>
            <Button className="mt-2 bg-[#4773ec] text-white rounded-md text-sm" onClick={() => router.push(`/review/${name}`)}>Leave Review</Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
