'use client'

import ReviewCard from "@/components/Business"
import ReviewForm from "@/components/ReviewForm"

import { useState } from 'react';

export default function DiningHalls() {
  const [signUpFormData, setSignUpFormData] = useState({});
  return (
    <div>
      <ReviewCard />
      <ReviewForm setFormData={setSignUpFormData} />
    </div>
  )
}
  