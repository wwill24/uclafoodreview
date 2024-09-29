'use client'

import ReviewForm from '@/components/ReviewForm'
import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';

import toast, { Toaster } from "react-hot-toast";

import { removeNonAlphabetic } from "@/lib/utils";

interface BusinessData {
    id: number,
    businessName: string,
    address: string,
    rating: number,
    description: string
}

export default function Review() {
    const params = useParams();

    const [businessID, setBusinessID] = useState<number>(0);

    const businessName = params.name.toString();

    useEffect(() => {
        (async () => {
            try {
                const getBusinessIDReq = await fetch(`http://localhost:8080/getBusiness?businessName=${removeNonAlphabetic(businessName)}`, {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })
                const req: BusinessData = await getBusinessIDReq.json();
                setBusinessID(req.id);
            }
            catch (e) {
                console.error(e);
                toast.error("Something went wrong. Please try again later.");
            }
        })();
    }, []);

    return (
        <>
            {businessID == 0 ? "" :
                <ReviewForm name={businessName} businessID={businessID} />
            }
        </>
    )
}