'use client'

import React from 'react';
import Link from 'next/link';
import { Star } from 'lucide-react';
import Image from 'next/image';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import epicimg from '../../frontend/img/epicuriaimg.png';

export default function ReviewCard() {
  const router = useRouter();
  return(
    <div className='flex flex-col items-center'>
      <Card className='w-[40vw] flex flex-row items-center'>
        <CardHeader className='flex flex-col'>
          <div className='items-center'>
            <Image 
              src={epicimg} 
              height={200}
              width={200}
              alt='epicuria image'
            />
          </div>
          <CardTitle className=''>
            Epicuria
          </CardTitle>
          <div className='flex flex-row gap-1 items-center'>
            <CardDescription className='text-lg'>
              4.5
            </CardDescription>
            <Star />
          </div>
          <CardDescription>
            Italian restaurant with lots of pasta and pizza lol
          </CardDescription>
        </CardHeader>
        <Button className="bg-[#007ec4] hover:bg-[#00a6ff]"/>
      </Card>
    </div>
  );
}