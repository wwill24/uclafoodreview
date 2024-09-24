import { Card } from '@/components/ui/card';
import { Skeleton } from "@/components/ui/skeleton";

export default function BusinessCardSkeleton() {
  return (
    <Card className="w-[40vw] h-[20vh] flex flex-row p-4 gap-4 items-center shadow-lg">
      <Skeleton className="w-28 h-28 rounded-md" />
      <div className='flex items-center'>
        <div className='w-[27vw] h-full'>
          <Skeleton className="w-[15vw] h-6 mb-2" />
          <div className="flex items-center gap-1 mb-2">
            <Skeleton className="w-[8vw] h-4" />
          </div>
          <Skeleton className="w-full h-4 mb-1" />
          <Skeleton className="w-full h-4 mb-1" />
          <div className='flex flex-row items-end justify-end'>
            <Skeleton className="w-[8vw] h-8 rounded-md mt-2" />
          </div>
        </div>
      </div>
    </Card>
  );
}
