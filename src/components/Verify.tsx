import {
    Card,
    CardContent,
    CardHeader
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import OTP from "@/components/OTP";

export default function Verify() {
    return (
        <div className="flex flex-col items-center justify-center">
            <Card className="p-4 w-[40vh]">
            <CardHeader className="text-center">Verify Using The OTP Sent To Your Email</CardHeader>
            <CardContent className="flex flex-col items-center gap-4">
                <OTP />
                <Button className='w-full h-1/2 bg-[#007ec4] hover:bg-[#00a6ff] text-[#fff] hover:text-[#fff]' variant="ghost" type="submit">Verify</Button>
            </CardContent>
            </Card>
        </div>
    )
}