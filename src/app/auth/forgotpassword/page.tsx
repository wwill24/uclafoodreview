'use client'

import React from 'react';
import Link from 'next/link';

// Form
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form"
import toast, { Toaster } from "react-hot-toast";

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
  CardHeader,
  CardTitle
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  email: z.string().email().refine(val => val.includes('g.ucla.edu'), "Email must be a UCLA student address")
})

export default function ForgotPassword() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: ""
    }
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast("Hello World");
  }

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <Card className='p-4 w-[50vh]'>
        <CardHeader className='flex flex-col gap-2 text-center'>
          <CardTitle>Forgot Password</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className='flex flex-col items-center space-y-2' onSubmit={form.handleSubmit(onSubmit)}>
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

              {/* Submit Button */}
              <Button className='w-full h-1/2 bg-[#007ec4] hover:bg-[#00a6ff] text-[#fff] hover:text-[#fff]' variant="ghost" type="submit">Send Link</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      <Toaster />
    </div>
  );
}
