'use client'

import BusinessCard from "@/components/BusinessCard"
import ReviewForm from "@/components/ReviewForm"

import { useState } from 'react';

export default function DiningHalls() {
  const [signUpFormData, setSignUpFormData] = useState({});
  return (
    <div className="flex flex-col gap-4 m-[2em]">
      <BusinessCard />
      <BusinessCard />
    </div>
  )
}
  