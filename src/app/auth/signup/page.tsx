'use client';

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

import SignupForm from "@/components/SignupForm";
import Verify from "@/components/Verify";

import toast, { Toaster } from "react-hot-toast";

interface SignupFormData {
    name: string;
    username: string;
    email: string;
    phoneNumber: string;
    password: string;
}

interface OTPData {
    code: string;
}

export default function SignUp() {

    const router = useRouter();
    const [showSignup, setShowSignup] = useState(true);
    const [signUpFormData, setSignUpFormData] = useState<SignupFormData | null>(null);
    const [otpData, setOtpData] = useState<OTPData | null>(null);

    useEffect(() => {
        if (!signUpFormData) {
            return;
        }

        signupFormSubmit(signUpFormData);
    }, [signUpFormData]);

    useEffect(() => {
        if (!otpData || !signUpFormData?.email) {
            return;
        }

        verifyOTP(otpData, signUpFormData.email);
    }, [otpData]);

    async function signupFormSubmit(values: any) {
        try {
            const signupReq = await fetch("http://localhost:8080/generateOTP", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: values.name,
                    username: values.username,
                    email: values.email,
                    phone: values.phoneNumber,
                    password: values.password
                })
            });

            if (signupReq.status == 500) {
                toast.error("Internal server error. Please try again.");
                return;
            }

            if (!signupReq.ok) {
                const errMsg = (await signupReq.json()).message;
                toast.error(errMsg);
                return;
            }

            setShowSignup(false);
        } catch (err: any) {
            console.error(err);
            toast.error("Something went wrong. Please try again later.");
        }
    }

    async function verifyOTP(otpCode: any, email: any) {
        try {
            const verifyOTPRequest = await fetch("http://localhost:8080/verify", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    code: otpCode
                })
            });

            if (verifyOTPRequest.status == 500) {
                toast.error("Internal server error. Please try again.");
                return;
            }

            if (!verifyOTPRequest.ok) {
                const errMsg = (await verifyOTPRequest.json()).message;
                toast.error(errMsg);
                return;
            }

            router.push('/');
        } catch (err: any) {
            console.error(err);
            toast.error("Something went wrong. Please try again later.");
        }
    }

    return (
        <>
            {showSignup ? <SignupForm setFormData={setSignUpFormData} /> : <Verify setter={setOtpData} />}
            <Toaster position="bottom-right" />
        </>
    );
}
