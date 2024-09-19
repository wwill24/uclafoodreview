'use client';

import { useState, useEffect } from "react";

import OTP from "@/components/OTP";

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
  } from "@/components/ui/input-otp"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
type props = {
  otp: String,
  otpGenerated: String
}

export default function Verification({ otp, otpGenerated }: props) {
  
  async function verify(){
    try {
      if (otp == otpGenerated){

      }
    }
    catch{

    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <Card className="p-4 w-[40vh]">
        <CardHeader className="text-center">
          Verify Using The OTP Sent To Your Email
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4">
          <OTP />
          <Button onClick={() => {verify}} className='w-full h-1/2 bg-[#007ec4] hover:bg-[#00a6ff] text-[#fff] hover:text-[#fff]' variant="ghost" type="submit">Verify</Button>
        </CardContent>
      </Card>
    </div>
  );
}

