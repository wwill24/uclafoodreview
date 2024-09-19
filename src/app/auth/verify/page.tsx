import { useState, useEffect } from "react";

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

export default function Verification() {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [otpGenerated, setOtpGenerator] = useState<string>("");

  const otpGenerator = () => {
    const otp = Math.floor(100000 + Math.random() * 900000);
    setOtpGenerator(otpGenerated);
    console.log(otp);
  }

  useEffect(() => {
    otpGenerator();
  }, [])

  const handleInput = () => {
    
  }

  async function verify(){
    
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <Card className="p-4 w-[50vh]">
        <CardHeader className="text-center">
          Verify Using The OTP Sent To Your Email
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4">
          <InputOTP maxLength={6} className="w-full">
            <InputOTPGroup>
              <InputOTPSlot index={0} />
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
          <Button onClick={() => {verify}} className='w-[20vw] h-1/2 bg-[#007ec4] hover:bg-[#00a6ff] text-[#fff] hover:text-[#fff]' variant="ghost" type="submit">Verify</Button>
        </CardContent>  
      </Card>
    </div>

  );
}

