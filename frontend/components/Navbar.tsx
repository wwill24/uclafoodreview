'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

// Shadcn Components
import { Button } from "@/components/ui/button";

import uclalogo from '../img/uclalogo.png';

interface LoginProps {
  isLoggedIn: boolean
}

export default function Navbar( props: LoginProps ) {
  const router = useRouter();

  return (
    <div className="flex flex-row items-center gap-4 bg-gray-50 px-6 py-4 shadow-md h-[var(--navBarHeight)]">
      <Link href="/">
        <Image
          src={uclalogo}
          alt="UCLA Bruins Logo"
          height={80}
          width={80}
          className="cursor-pointer"
        />
      </Link>
      <Button className="text-lg" variant="ghost" onClick={() => {router.push('/dining/dining-halls')}}>Dining Halls</Button>
      <Button className="text-lg" variant="ghost" onClick={() => {router.push('/dining/food-trucks')}}>Food Trucks</Button>
      <Button className="text-lg" variant="ghost" onClick={() => {router.push('/dining/restaurants')}}>Restaurants</Button>

      <div className='ml-auto'>
        {props.isLoggedIn ? (    
          <>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>   
          </>
        ) : (
          <>
            <div>
              <Button variant="secondary" className="rounded-r-none" onClick={() => {router.push('/auth/signin')}}>Sign In</Button>
              <Button variant="default" className="rounded-l-none bg-[#007ec4] hover:bg-[#00a6ff]" onClick={() => {router.push('/auth/signup')}}>Sign Up</Button>
            </div>       
          </>
        )
      }
      </div>
    </div>
  );
}
