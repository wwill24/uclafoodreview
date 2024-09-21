'use client'

import ReviewForm from '@/components/ReviewForm'
import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

export default function Review(){
    const [signUpFormData, setSignUpFormData] = useState({});
    const router = useRouter();
    const params = useParams();
    const businessName = params.name.toString();
    return (
        <ReviewForm name={businessName} setFormData={setSignUpFormData} />
    )
}