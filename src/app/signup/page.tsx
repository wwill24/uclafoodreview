'use client'

import React from 'react';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Navbar from '../frontend/components/Navbar';

export default function SignUp() {
  return (
    <div>
      <Navbar />
      <div className='flex flex-col items-center mt-[30vh]'>
        <h1>Sign Up to Give Food Reviews at UCLA!</h1>
        <form className='flex flex-col items-center p-[2vh] gap-2'>
          <Input minLength={1} className='' placeholder='Name' />
          <Input minLength={5} className='' placeholder='Username'/>
          <Input className='' placeholder='UCLA Email'/>
          <Input minLength={10} className='' placeholder='Phone Number' />
          <Input minLength={8} className='' placeholder='Password'/>
          <Input minLength={8} className='' placeholder='Verify Password'/>
          <Button className='items-center p-[1vh] w-45/100 h-1/2' variant="outline">Sign Up</Button>
        </form>
      </div>
    </div>
  );
}
