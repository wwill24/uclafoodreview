'use client'

import React from 'react';

import {
    Card,
    CardDescription,
    CardTitle,
    CardHeader
  } from '@/components/ui/card';
  import { Button } from '@/components/ui/button';

export default function ReviewCard() {
    return (
        <div className='flex flex-col items-center'>
            <Card>
                <CardHeader>
                    <CardTitle></CardTitle>
                </CardHeader>
            </Card>
        </div>
    );
}