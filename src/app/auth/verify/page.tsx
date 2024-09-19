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

export default function Verify() {
    return (
      <Card className="flex flex-col items-center justify-center">
        <CardHeader>
          Verify Using The OTP Sent To Your Email
        </CardHeader>
        <CardContent>
          <InputOTP maxLength={6}>
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
        </CardContent>
      </Card>
    );
}

