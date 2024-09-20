'use client';

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

import SignupForm from "@/components/SignupForm";
import Verify from "@/components/Verify";

import toast, { Toaster } from "react-hot-toast";

const x = true;

export default function SignUp() {

    const router = useRouter();
    const [signUpFormData, setSignUpFormData] = useState({});

    useEffect(() => {
        console.log(signUpFormData);
    }, [signUpFormData]);

    async function signupFormSubmit(values: any) {
        try {
            const signupReq = await fetch("http://localhost:8080/signup", {
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

            router.push("/auth/verify")

        } catch (err: any) {
            console.error(err);
            toast.error("Something went wrong. Please try again later.");
        }
    }

    return (
        <>
            {x ? <SignupForm setFormData={setSignUpFormData} /> : <Verify />}
            <Toaster position="bottom-right" />
        </>
    );
}
