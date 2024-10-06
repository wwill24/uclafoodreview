'use client'

import React, { useEffect, useState } from 'react';

import { Circle, CircleUserRound, UserRound, UserRoundPen } from 'lucide-react';
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { useParams } from 'next/navigation';
import ReviewCard from '@/components/ReviewCard';
import BusinessCardSkeleton from '@/components/BusinessCardSkeleton';
import { Toaster } from 'react-hot-toast';

interface ReviewData {
  title: string,
  rating: number,
  reviewText: string,
  reviewDate: string,
  reviewTime: string,
  upvotes: number
}
export default function Profile() {
  const [reviewData, setReviewData] = useState<ReviewData[]|null>(null);

  const params = useParams();
  const username = params.name.toString();

  useEffect(() => { getReviewsByUser() }, []);

  async function getReviewsByUser() {
    try {
      const userIdReq = await fetch(`http://localhost:8080/user/profile/${username}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        },
      });
      if (userIdReq.ok){
        const userId: number = await userIdReq.json();

        try {
          const reviewsReq = await fetch(`http://localhost:8080/reviews/user/${userId}`);
          if (reviewsReq.ok) {
            const reviews: ReviewData[]= await reviewsReq.json();
            setReviewData(reviews);
          }
        }
        catch (e) {
            console.error(e);
        }
      }
    }
    catch (e) {
      console.error(e);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start justify-center mt-8">
        <Card className="w-[40vw]">
          <CardHeader className="items-center">
            <CircleUserRound className="scale-400 mt-5 mb-8" stroke="#6b7280" />
            <div className="text-lg">Admin</div>
          </CardHeader>
          <CardContent className="flex flex-row items-center justify-center">
            <div className="flex flex-col items-center mr-5 transition ease-in-out hover:scale-125 delay-100 hover:cursor-pointer">
              <Dialog>
                <DialogTrigger asChild>
                  <UserRoundPen className="" />
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Name
                      </Label>
                      <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="username" className="text-right">
                        Username
                      </Label>
                      <Input id="username" defaultValue="@peduarte" className="col-span-3" />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <p className="text-xs">Edit Profile</p>
            </div>
            <div className="flex flex-col items-center ml-5">
              <p className="text-xs">Change Profile Picture</p>
            </div>
          </CardContent>
        </Card>
  
        <div className="flex flex-col gap-4 items-center">
          {reviewData
            ? reviewData.map((data: any, index: number) => (
                <ReviewCard
                  key={index}
                  id={data.id}
                  title={data.title}
                  rating={data.rating}
                  reviewText={data.reviewText}
                  reviewDate={data.reviewDate}
                  reviewTime={data.reviewTime}
                  upvotes={data.upvotes}
                  userid={data.userId}
                />
              ))
            : Array.from({ length: 1 }).map((_, i) => <BusinessCardSkeleton key={i} />)}
        </div>
      </div>
    </div>
  )  
}