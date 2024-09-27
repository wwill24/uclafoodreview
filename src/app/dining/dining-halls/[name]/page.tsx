'use client'

import { useEffect } from 'react';

import ReviewCard from '@/components/ReviewCard';
import toast, { Toaster } from "react-hot-toast";

export default function BusinessReviews({ name } : { name: string}) {
    const [businessData, setBusinessData] = useState<BusinessData[]|null>(null);
    useEffect(() => { getBusinesses() }, []);
    async function getBusinesses() {
      try {
        const getBusinessesReq = await fetch ("http://localhost:8080/getBusiness/dining-halls", {
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
        toast.error("Could not retrieve dining halls");
      }
    }

    return (
        <div className="flex justify-center items-start mt-8">
            <ReviewCard />
        </div>
    );
}