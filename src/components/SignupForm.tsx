'use client';

import React from 'react';
import Link from 'next/link';

// Form
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form"

// Shadcn
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage
} from "@/components/ui/form";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
    name: z.string().min(1, { message: "Name must contain at least 1 character(s)" }),
    username: z.string().min(5, { message: "Username must contain at least 1 character(s)" }),
    // TEMP EMAIL TEST
    email: z.string().email().refine(val => val.includes('g.ucla.edu') || val.includes('gamesteven101@gmail.com'), "Email must be a UCLA student address"),
    phoneNumber: z.string().length(10),
    password: z.string().min(1, { message: "Password must contain at least 1 character(s)" }),
    confirmPassword: z.string().min(1, { message: "Confirm Password must contain at least 1 character(s)" })
}).refine(values => values.password == values.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"]
});

export default function SignupForm({ setFormData }: { setFormData: Function }) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            username: "",
            email: "",
            phoneNumber: "",
            password: "",
            confirmPassword: ""
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setFormData(values);
    }

    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <Card className='p-4 w-[50vh]'>
                <CardHeader className='flex flex-col gap-2 text-center'>
                    <CardTitle>Sign Up</CardTitle>
                    <CardDescription>Sign Up to Give Food Reviews at UCLA!</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form className='flex flex-col items-center space-y-2' onSubmit={form.handleSubmit(onSubmit)}>
                            {/* Name */}
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem className='w-full'>
                                        <FormControl>
                                            <Input placeholder="Name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Username */}
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem className='w-full'>
                                        <FormControl>
                                            <Input placeholder="Username" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Email */}
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className='w-full'>
                                        <FormControl>
                                            <Input placeholder="UCLA Email" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Phonenumber */}
                            <FormField
                                control={form.control}
                                name="phoneNumber"
                                render={({ field }) => (
                                    <FormItem className='w-full'>
                                        <FormControl>
                                            <Input placeholder="Phone Number" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Password */}
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem className='w-full'>
                                        <FormControl>
                                            <Input placeholder="Password" type="password" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Confirm Password */}
                            <FormField
                                control={form.control}
                                name="confirmPassword"
                                render={({ field }) => (
                                    <FormItem className='w-full'>
                                        <FormControl>
                                            <Input placeholder="Confirm Password" type="password" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button className='w-full h-1/2 bg-[#007ec4] hover:bg-[#00a6ff] text-[#fff] hover:text-[#fff]' variant="ghost" type="submit">Sign Up</Button>
                        </form>
                    </Form>
                    <span className="inline-flex gap-1 mt-2">
                        <p>Already have an account?</p>
                        <Link className="hover:underline" href="/auth/signin">Login here.</Link>
                    </span>
                </CardContent>
            </Card>
        </div>
    );
}
