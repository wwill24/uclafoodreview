'use client'

import React, { useState } from 'react';

import Star from "@/components/ui/star";
import ArrowUp from './ui/arrowup';
import ArrowDown from './ui/arrowdown';

import {
    Card,
    CardDescription,
    CardTitle,
    CardHeader,
    CardContent
} from '@/components/ui/card';

interface Props {
    title: string,
    rating: number,
    reviewText: string,
    reviewDate: string,
    reviewTime: string
}

export default function ReviewCard( props: Props ) {
    const [highlightedArrow, setHighlightedArrow] = useState<'up' | 'down' | null>(null);
    const [isArrowUpHovered, setIsArrowUpHovered] = useState(false);
    const [isArrowDownHovered, setIsArrowDownHovered] = useState(false);

    const handleArrowUpClick = () => {
        setHighlightedArrow(prev => (prev === 'up' ? null : 'up'));
    };

    const handleArrowDownClick = () => {
        setHighlightedArrow(prev => (prev === 'down' ? null : 'down'));
    };

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
                      <ArrowUp 
                        isHighlighted={highlightedArrow === 'up'}
                        isHovered={isArrowUpHovered}
                        onClick={handleArrowUpClick} 
                        onMouseEnter={() => setIsArrowUpHovered(true)}
                        onMouseLeave={() => setIsArrowUpHovered(false)}
                      />
                      <ArrowDown 
                        isHighlighted={highlightedArrow === 'down'}
                        isHovered={isArrowDownHovered}
                        onClick={handleArrowDownClick} 
                        onMouseEnter={() => setIsArrowDownHovered(true)}
                        onMouseLeave={() => setIsArrowDownHovered(false)}
                      />
                    </div>
                </CardHeader>
            </Card>
        </div>
    );
}
