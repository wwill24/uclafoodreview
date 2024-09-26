'use client'

import ReviewForm from '@/components/ReviewForm'
import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';


import toast, { Toaster } from "react-hot-toast";

interface BusinessData {
  businessName: string,
  address: string,
  rating: number,
  description: string
}

export default function Review(){
    const [signUpFormData, setSignUpFormData] = useState({});
    const router = useRouter();
    const params = useParams();
    const businessName = params.name.toString();

    return (
        <ReviewForm name={businessName} setFormData={setSignUpFormData} />
    )
}