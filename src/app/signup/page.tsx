'use client';

import React from 'react';

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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import Navbar from '../frontend/components/Navbar';

const formSchema = z.object({
  name: z.string().min(1, { message: "Name must contain at least 1 character(s)" }),
  username: z.string().min(5, { message: "Username must contain at least 1 character(s)" }),
  email: z.string().email().refine(val => val.includes('g.ucla.edu'), "Email must be a UCLA student address"),
  phoneNumber: z.string().length(10),
  password: z.string().min(1, { message: "Password must contain at least 1 character(s)" }),
  confirmPassword: z.string().min(1, { message: "Confirm Password must contain at least 1 character(s)" })
}).refine(values => values.password == values.confirmPassword, {
  message: "Passwords must match",
  path: ["confirmPassword"]
});

export default function SignUp() {
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
  
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div>
      <h1>Sign Up to Give Food Reviews at UCLA!</h1>
      <Form {...form}>
        <form className='flex flex-col items-center' onSubmit={form.handleSubmit(onSubmit)}>
          {/* Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
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
              <FormItem>
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
              <FormItem>
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
              <FormItem>
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
              <FormItem>
                <FormControl>
                  <Input placeholder="Password" {...field} />
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
              <FormItem>
                <FormControl>
                  <Input placeholder="Confirm Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* <Input minLength={8} className='' placeholder='Password'/> */}
          {/* <Input minLength={8} className='' placeholder='Verify Password'/> */}
          <Button className='items-center p-[1vh] w-45/100 h-1/2' variant="secondary" type="submit">Sign Up</Button>
        </form>
      </Form>
    </div>
  );
}
