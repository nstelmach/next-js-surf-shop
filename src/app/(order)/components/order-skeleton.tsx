import { Skeleton } from "@/src/components/ui/skeleton"

export default function OrderSkeleton() {
  return (
    <div className="flex flex-col justify-start items-center w-screen h-screen py-4">
      <Skeleton className="w-5/6 h-1/2 md:h-2/3 md:w-2/3 lg:h-1/2 lg:w-1/4" />
    </div>
  )
}
