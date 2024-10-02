'use client';

import React from 'react';
import Link from 'next/link';
import { useState, useEffect } from 'react' 

// Form
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form"

// Shadcn
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage
} from "@/components/ui/form";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";


import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Star from "@/components/ui/star";
import { Textarea } from './ui/textarea';
import { ST } from 'next/dist/shared/lib/utils';
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from 'next/navigation'

import { removeNonAlphabetic } from "@/lib/utils";

const formatDate = (date: Date) => {
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const year = date.getFullYear();
  
  return `${month}-${day}-${year}`;
};
  
const today = formatDate(new Date());

const formatTime = (time: Date) => {
  const hours = String(time.getHours() % 12).padStart(2, '0');
  const minutes = String(time.getMinutes()).padStart(2, '0');

  return `${hours}:${minutes}`;
}

const timePosted = formatTime(new Date())

const formSchema = z.object({
  title: z.string().min(1, "Review title can not be empty"),
  rating: z.number().min(1, "Rating must be at least 1"),
  reviewText: z.string(),
  reviewDate: z.string(),
  reviewTime: z.string(),
  businessName: z.string(),
  businessid: z.number().min(1)
})

export default function ReviewForm({ name, businessID, category }: { name: string, businessID: number, category: string }) {
    const router = useRouter();
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            rating: 0,
            reviewText: "",
            businessName: name,
            reviewDate: today,
            reviewTime: timePosted,
            businessid: businessID
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        reviewFormSubmit(values);
    }

    const handleStarClick = (index: number) => {
      setSelectedIndex(index);
      form.setValue('rating', index + 1);
    }

    async function reviewFormSubmit(values: any) {
      try {
        console.log(values);
          const reviewReq = await fetch("http://localhost:8080/createReview", {
              method: "POST",
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  title: values.title,
                  rating: values.rating,
                  reviewText: values.reviewText,
                  reviewDate: values.reviewDate,
                  reviewTime: values.reviewTime,
                  businessId: values.businessid
              })
          });
          if (reviewReq.status == 200) {
              const reviewCountReq = await fetch(`http://localhost:8080/getBusiness/incrementReviewCount/${values.businessid}`, {
                  method: "PUT",
                  headers: {
                      'Content-Type': 'application/json'
                  },
              })
          }

          if (reviewReq.status == 500) {
              toast.error("Internal server error. Please try again.");
              return;
          }

          if (!reviewReq.ok) {
              const errMsg = (await reviewReq.json()).message;
              toast.error(errMsg);
              return;
          }

          toast.success("Review submitted!");
          router.push(`/dining/${category.toLowerCase().replace(/\s+/g, '-')}/${name}/${businessID.toString()}`);
      } catch (err: any) {
          console.error(err);
          toast.error("Something went wrong. Please try again later.");
      }
    }

    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <Card className='p-4 w-[50vh]'>
                <CardHeader className='flex flex-col gap-2 text-center'>
                    <CardTitle>{removeNonAlphabetic(name)}</CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                    <form className='flex flex-col items-center space-y-2' onSubmit={form.handleSubmit(onSubmit)}>

                            {/* Name */}
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem className='w-full'>
                                        <FormControl>
                                            <Input placeholder="Title" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Rating */}
                            <div
                              className="flex flex-row justify-start"
                              onMouseLeave={() => setHoveredIndex(null)}
                            >
                              {[...Array(5)].map((_, index: number) => (
                                <div
                                  key={index}
                                  onMouseEnter={() => setHoveredIndex(index)}
                                  onClick={() => handleStarClick(index)}
                                  className='cursor-pointer w-3/2 h-3/2'
                                >
                                  <Star isHighlighted={index <= (hoveredIndex ?? -1) || index <= (selectedIndex ?? -1)} />
                                </div>
                              ))}
                            </div>

                            {/* Review Text Body */}
                            <FormField
                                control={form.control}
                                name="reviewText"
                                render={({ field }) => (
                                    <FormItem className='w-full'>
                                        <FormControl>
                                            <Textarea className='h-[20vh]' placeholder="Write your review!" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button className='w-full h-1/2 bg-[#007ec4] hover:bg-[#00a6ff] text-[#fff] hover:text-[#fff]' variant="ghost" type="submit">Submit Review</Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
            <Toaster position='bottom-right'/>
        </div>
    );
}
