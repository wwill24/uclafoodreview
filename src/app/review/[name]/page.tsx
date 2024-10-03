'use client'

import ReviewForm from '@/components/ReviewForm'
import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';

import toast, { Toaster } from "react-hot-toast";

import { removeNonAlphabetic } from "@/lib/utils";

interface BusinessData {
    id: number,
    businessName: string,
    category: string,
    address: string,
    rating: number,
    description: string
}

export default function Review() {
    const params = useParams();

    const [businessID, setBusinessID] = useState<number>(0);
    const [businessCategory, setBusinessCategory] = useState("");
    const [userid, setUserId] = useState<number>(0);

    useEffect(() => { getUserId() }, []);
    const businessName = params.name.toString();

    useEffect(() => {
        (async () => {
            try {
                businessName.replace(/[^a-zA-Z]+/g, ' ').trim();
                const getBusinessIDReq = await fetch(`http://localhost:8080/getBusiness?businessName=${businessName}`, {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })
                const req: BusinessData = await getBusinessIDReq.json();
                setBusinessID(req.id);
                setBusinessCategory(req.category)
            }
            catch (e) {
                console.error(e);
                toast.error("Something went wrong. Please try again later.");
            }
        })();
    }, []);

    async function getUserId() {
        try {
          const userIdReq = await fetch("http://localhost:8080/user/id", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
          });
          if (userIdReq.ok){
            const userId: number = await userIdReq.json();
            console.log(userId);
            setUserId(userId);
          }
        }
        catch (e) {
          console.error(e);
        }
      }

    return (
        <>
            {businessID == 0 ? "" :
                <ReviewForm name={businessName} businessID={businessID} category={businessCategory} userID={userid}/>
            }
        </>
    )
}