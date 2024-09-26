'use client'

import React from 'react';

import Star from "@/components/ui/star";
import { ArrowBigDown, ArrowBigUp } from 'lucide-react';

import {
    Card,
    CardDescription,
    CardTitle,
    CardHeader,
    CardContent
} from '@/components/ui/card';

import { Button } from '@/components/ui/button';

export default function ReviewCard() {
    return (
        <div className='flex flex-col w-[40vw] h-full'>
            <Card className=''>
                <CardHeader>
                    <div className='flex flex-col'>
                      <CardTitle>User's review title</CardTitle>
                      <div className='flex flex-row gap-2'>
                          <Star isHighlighted></Star>
                          <CardDescription>user's name</CardDescription>
                      </div>
                      <CardContent>Review text</CardContent>
                    </div>
                    <div className='flex flex-row justify-end'>
                      <ArrowBigUp />
                      <ArrowBigDown />
                    </div>
                </CardHeader>
            </Card>
        </div>
    );
}