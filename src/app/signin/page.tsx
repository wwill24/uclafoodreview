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
  username: z.string(),
  password: z.string()
})

export default function SignUp() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  return (
    <div>
      <div className='flex flex-col items-center mt-[30vh]'>
        <Card>
          <CardTitle>Welcome Back!</CardTitle>
          <form className='flex flex-col items-center p-[2vh] gap-2'>
            <Input minLength={5} className='' placeholder='Username'/>
            <Input minLength={8} className='' placeholder='Password'/>
            <Button className='items-center p-[1vh] w-45/100 h-1/2' variant="outline">Log In</Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
