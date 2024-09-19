<<<<<<< HEAD
'use client';
=======
'use client'
>>>>>>> 093928bc75daf066872309fa508ad388e74bb002

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
<<<<<<< HEAD
          <OTP />
          <Button onClick={() => {verify}} className='w-full h-1/2 bg-[#007ec4] hover:bg-[#00a6ff] text-[#fff] hover:text-[#fff]' variant="ghost" type="submit">Verify</Button>
        </CardContent>
=======
          <InputOTP maxLength={6} className="w-[15vw]">
            <InputOTPGroup>
              <InputOTPSlot 
                index={0} 
              />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <Button onClick={() => {verify}} className='w-[15vw] h-1/2 bg-[#007ec4] hover:bg-[#00a6ff] text-[#fff] hover:text-[#fff]' variant="ghost" type="submit">Verify</Button>
        </CardContent>  
>>>>>>> 093928bc75daf066872309fa508ad388e74bb002
      </Card>
    </div>
  );
}

