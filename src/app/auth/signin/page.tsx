'use client'

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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  username: z.string().min(1, "Please enter a username"),
  password: z.string().min(1, "Please enter a password")
})

export default function SignIn() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <Card className='p-4 w-[50vh]'>
        <CardHeader className='flex flex-col gap-2 text-center'>
          <CardTitle>Welcome Back!</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className='flex flex-col items-center space-y-2' onSubmit={form.handleSubmit(onSubmit)}>
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

              {/* Submit Button */}
              <Button className='w-full h-1/2 bg-[#007ec4] hover:bg-[#00a6ff] text-[#fff] hover:text-[#fff]' variant="ghost" type="submit">Sign In</Button>
            </form>
          </Form>
          <span className="inline-flex gap-1 mt-2">
            <Link href="/forgotpassword">Forgot Password?</Link>
          </span>
        </CardContent>
      </Card>
    </div>
  );
  
}
