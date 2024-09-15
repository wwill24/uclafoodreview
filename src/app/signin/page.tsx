'use client'

import React from 'react';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Navbar from '../frontend/components/Navbar'

export default function SignUp() {
  return (
    <div>
      <div className='flex flex-col items-center mt-[30vh]'>
        <h1>Welcome Back!</h1>
        <form className='flex flex-col items-center p-[2vh] gap-2'>
          <Input minLength={5} className='' placeholder='Username'/>
          <Input minLength={8} className='' placeholder='Password'/>
          <Button className='items-center p-[1vh] w-45/100 h-1/2' variant="outline">Log In</Button>
        </form>
      </div>
    </div>
  );
}
