'use client'

import BusinessCard from "@/components/BusinessCard"
import { useState, useEffect } from "react";

import toast, { Toaster } from "react-hot-toast";

interface BusinessData {
  businessName: string,
  address: string,
  rating: number
}

export default function DiningHalls() {
  const [businessData, setBusinessData] = useState<BusinessData[]|null>(null);
  useEffect(() => { getBusinesses() }, []);
  async function getBusinesses() {
    try {
      const getBusinessesReq = await fetch ("http://localhost:8080/getBusiness", {
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
      toast.error("Could not retrieve businesses");
    }
  }

  return (
    <div className="flex flex-col gap-4 m-[2em]">
      {businessData ? businessData.map((data: any, index: number) => (
        <BusinessCard key={index} businessName={data.businessName} address={data.address} rating={data.rating}/>
      )) : "Loading business data"}
    </div>
  )
}
  