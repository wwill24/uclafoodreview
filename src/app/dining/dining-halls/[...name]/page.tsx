'use client'

import { useEffect, useState } from 'react';

import ReviewCard from '@/components/ReviewCard';
import toast, { Toaster } from "react-hot-toast";
import BusinessCardSkeleton from "@/components/BusinessCardSkeleton";

import { useRouter, useParams } from 'next/navigation';

interface ReviewData {
    title: string,
    rating: number,
    reviewText: string,
    reviewDate: string,
    reviewTime: string,
    upvotes: number
}

export default function BusinessReviews({  } : {  }) {
    const params = useParams();
    const id = params.name[1].toString();
    parseInt(id);

    const [reviewData, setReviewData] = useState<ReviewData[]|null>(null);
    useEffect(() => { getReviews() }, []);
    async function getReviews() {
      try {
        const getReviewsReq = await fetch(`http://localhost:8080/getReviews?businessID=${id}`, {
          method: "GET",
          headers: {
              'Content-Type': 'application/json',
          },
      });
        const req: ReviewData[] = await getReviewsReq.json();
        setReviewData(req);
      }
      catch (err: any) {
        console.error(err);
        toast.error("Could not retrieve business reviews");
      }
    }
    
    return (
        <div className="flex flex-col gap-4 items-center mt-8">
          {reviewData ? reviewData.map((data: any, index: number) => (
            <ReviewCard key={index} id={data.id} title={data.title} rating={data.rating} reviewText={data.reviewText} reviewDate={data.reviewDate} reviewTime={data.reviewTime} upvotes={data.upvotes}/>
          )) : Array.from({ length: 1 }).map((_, i) => ( <BusinessCardSkeleton key={i} /> ))}
          {/* <BusinessCardSkeleton /> */}
          <Toaster position="bottom-right" />
        </div>
    );
}