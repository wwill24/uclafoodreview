'use client';

import * as React from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Autoplay from "embla-carousel-autoplay"

import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

import BusinessCard from '@/components/BusinessCard';

const formatResult = (item: any) => {
  return (
    <>
      <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
    </>
  );
};

const items = [
  {
    id: 0,
    name: 'Cobol',
  },
  {
    id: 1,
    name: 'JavaScript',
  },
  {
    id: 2,
    name: 'Basic',
  },
  {
    id: 3,
    name: 'PHP',
  },
  {
    id: 4,
    name: 'Java',
  },
];

interface BusinessData {
  businessName: string,
  address: string,
  rating: number,
  description: string,
  businessID: number,
  reviewCount: number
}

export default function HomePage() {
  const [topFiveBusinesses, setTopFiveBusinesses] = useState<BusinessData[]|null>(null);
  useEffect(() => { getTopFiveBusinesses() }, []);

  const plugin = React.useRef(
    Autoplay({ delay: 2000 })
  )

  const resetAutoplay = () => {
    if (plugin.current) {
      plugin.current.stop(); // Stop the autoplay
      plugin.current.reset(); // Reset the autoplay timer
      plugin.current.play(); // Start it again
    }
  };

  async function getTopFiveBusinesses() {
    try {
      const getTopFiveBusinessesReq = await fetch("http://localhost:8080/businesses/top?n=5", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
      });

      if(getTopFiveBusinessesReq) {
        console.log("Top 5 retrieved correctly");
        const req: BusinessData[] = await getTopFiveBusinessesReq.json();
        setTopFiveBusinesses(req);
      }
      else{
        toast.error("Could not retrieve top 5");
        console.log("Could not retrieve top 5");
      }
    }
    catch(e) {
      console.error(e);
    }
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center items-center mt-20 p-6">
        <ReactSearchAutocomplete
          className='w-[80vh]'
          items={items}
          onSearch={() => {}}
          onHover={() => {}}
          onSelect={() => {}}
          onFocus={() => {}}
          formatResult={formatResult}
          placeholder='Search for Dining Halls, Food Trucks, or Restaurants'
          autoFocus
        />
      </div>
      <CardTitle className='p-4'>Today's Top 5 Places to Eat</CardTitle>
      <Carousel
        opts={{
          align: "start",
          loop: true
        }}
        plugins={[plugin.current]}
        onClick={resetAutoplay}
        className="max-w-sm flex w-full"
      >
        <CarouselContent>
          {topFiveBusinesses?.map((data: any, index: number) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className=''>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <BusinessCard key={index} businessName={data.businessName} category={data.category} address={data.address} rating={data.rating} description={data.description} businessID={data.id} reviewCount={data.reviewCount}/>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Toaster position='bottom-right' />
    </div>
  );
}
