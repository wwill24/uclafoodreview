'use client'

import ReviewForm from '@/components/ReviewForm'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Review(){
    const [signUpFormData, setSignUpFormData] = useState({});
    const router = useRouter();
    return (
        <ReviewForm setFormData={setSignUpFormData} />
    )
}