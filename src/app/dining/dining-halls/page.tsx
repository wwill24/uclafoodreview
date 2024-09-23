'use client'

import BusinessCard from "@/components/BusinessCard"

import toast, { Toaster } from "react-hot-toast";

interface Business{
  businessName: string,
  address: string,
  rating: number
}

export default function DiningHalls() {
  async function getBusinesses() {
    try {
      const getBusinessesReq = await fetch ("http://localhost:8080/getBusiness", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const businessData = await getBusinessesReq.json();
      console.log(businessData);
    }
    catch (err: any) {
      console.error(err);
      toast.error("Could not retrieve businesses");
    }
  }

  return (
    <div className="flex flex-col gap-4 m-[2em]">
      <BusinessCard />
      <BusinessCard />
    </div>
  )
}
  