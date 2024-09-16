'use client'

import React from 'react';

// Form
import { z } from "zod";
import ReusableForm from '../../../../frontend/components/ResusableForm';

const formSchema = z.object({
  username: z.string().min(1, "Please enter a username"),
  password: z.string().min(1, "Please enter a password")
})

export default function SignIn() {
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await fetch("http://localhost:8080/signin", { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(values) });
      console.log(res);
    } catch (e) {
      console.error(e);
      alert(e);
    }
  }

  return (
    <ReusableForm
      schema={formSchema}
      formInputs={[
        { name: 'username', label: 'Username', placeholder: 'Username' },
        { name: 'password', label: 'Password', placeholder: 'Password', type: 'password' }
      ]}
      onSubmit={onSubmit}
      cardTitle="Welcome Back!"
      submitButtonText="Sign In"
    />
  );
  
}
