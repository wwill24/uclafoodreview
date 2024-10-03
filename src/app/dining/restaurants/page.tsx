'use client'

import BusinessCard from "@/components/BusinessCard"
import BusinessCardSkeleton from "@/components/BusinessCardSkeleton";
import { useState, useEffect } from "react";

import toast, { Toaster } from "react-hot-toast";

interface BusinessData {
  businessName: string,
  category: string,
  address: string,
  rating: number,
  description: string,
  businessID: number,
  reviewCount: number
}

export default function Restaurants() {
  const [businessData, setBusinessData] = useState<BusinessData[]|null>(null);
  useEffect(() => { getBusinesses() }, []);
  async function getBusinesses() {
    try {
      const getBusinessesReq = await fetch ("http://localhost:8080/getBusiness/restaurants", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const req: BusinessData[] = await getBusinessesReq.json();
      setBusinessData(req);
      console.log(req);
    }
    catch (err: any) {
      console.error(err);
      toast.error("Could not retrieve food trucks");
    }
  }
  console.log(businessData);

  return (
    <div className="flex flex-col gap-4 m-[2em] items-center">
      {businessData ? businessData.map((data: any, index: number) => (
        <BusinessCard key={index} businessName={data.businessName} category={data.category} address={data.address} rating={data.rating} description={data.description} businessID={data.id} reviewCount={data.reviewCount}/>
      )) : Array.from({ length: 3 }).map((_, i) => ( <BusinessCardSkeleton key={i} /> ))} 
      {/* <BusinessCardSkeleton /> */}
      <Toaster position="bottom-right" />
    </div>
  )
}
  