import { Star } from 'lucide-react';
import Image from 'next/image';

import {
  Card,
  CardDescription,
  CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Skeleton } from "@/components/ui/skeleton";

export default function BusinessCardSkeleton() {
  return (
    <Card className="w-[40vw] h-[20vh] flex flex-row p-4 gap-4 items-center shadow-lg">
      <Skeleton className="w-[120px] h-[120px] rounded-md" />
      <div className='flex items-center'>
        <div className='w-[27vw] h-full'>
          <Skeleton className="w-[15vw] h-[24px] mb-2" />
          <div className="flex items-center gap-0.5 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="w-5 h-5 rounded" />
            ))}
            <Skeleton className="w-[8vw] h-[16px]" />
          </div>
          <Skeleton className="w-[100%] h-[16px] mb-1" />
          <Skeleton className="w-[100%] h-[16px] mb-1" />
          <div className='flex flex-row items-end justify-end'>
            <Skeleton className="w-[8vw] h-[32px] rounded-md mt-2" />
          </div>
        </div>
      </div>
    </Card>
  );
}
