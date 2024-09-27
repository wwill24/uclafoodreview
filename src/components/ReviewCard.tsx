'use client'

import React from 'react';

import Star from "@/components/ui/star";
import { ArrowBigDown, ArrowBigUp } from 'lucide-react';
import { useEffect } from 'react';

import {
    Card,
    CardDescription,
    CardTitle,
    CardHeader,
    CardContent
} from '@/components/ui/card';

import { Button } from '@/components/ui/button';

interface Props {
    title: string,
    rating: number,
    reviewText: string,
    reviewDate: string,
    reviewTime: string
}

export default function ReviewCard( props: Props ) {
    return (
        <div className='w-[40vw]'>
            <Card className=''>
                <CardHeader>
                    <div className='flex flex-col'>
                      <CardTitle>{props.title}</CardTitle>
                      <div className='flex flex-row gap-2'>
                          <Star isHighlighted></Star>
                          <CardDescription>user's name</CardDescription>
                      </div>
                      <CardContent>{props.reviewText}</CardContent>
                    </div>
                    <div className='flex flex-row justify-end'>
                      <ArrowBigUp className='hover:bg-blue-500'/>
                      <ArrowBigDown />
                    </div>
                </CardHeader>
            </Card>
        </div>
    );
}