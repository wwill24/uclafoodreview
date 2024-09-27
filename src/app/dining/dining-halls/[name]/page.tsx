'use client'

import { useEffect } from 'react';

import ReviewCard from '@/components/ReviewCard';

export default function BusinessReviews({ name } : { name: string}) {
    useEffect(() => { console.log("business name: " + name) }, []);

    return (
        <div className="flex justify-center items-start mt-8">
            <ReviewCard />
        </div>
    );
}