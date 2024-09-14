import Image from 'next/image';
import Link from 'next/link';

// Shadcn Components

import uclalogo from '../img/uclalogo.png';

export default function Navbar() {
  return (
    <div className="flex flex-row items-center gap-4 bg-gray-50 px-6 py-4 shadow-md">
      <Link href="/home">
        <Image 
          src={uclalogo}
          alt="UCLA Bruins Logo"
          height={80}
          width={80}
          className="cursor-pointer"
        />
      </Link>
      
      <nav className="flex space-x-6">
        <Link href="/dining-halls" className="text-blue-600 hover:text-blue-800 font-medium">
          Dining Halls
        </Link>
        <Link href="/food-trucks" className="text-blue-600 hover:text-blue-800 font-medium">
          Food Trucks
        </Link>
        <Link href="/restaurants" className="text-blue-600 hover:text-blue-800 font-medium">
          Restaurants
        </Link>
      </nav>

      <div className="ml-auto space-x-4">
        <Link href="/signin" className="text-blue-600 hover:underline font-medium">
          Sign In
        </Link>
        <Link href="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
          Sign Up
        </Link>
      </div>
    </div>
  );
}
