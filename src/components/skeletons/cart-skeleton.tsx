import { Skeleton } from "@/src/components/ui/skeleton"

export default function CartSkeleton() {
  return (
    <div className="flex xl:flex-row flex-col justify-center items-center xl:items-start xl:justify-between gap-6 xl:gap-4 lg:p-4 w-screen h-screen">
      <Skeleton className="w-5/6 h-1/2 md:w-3/5  lg:w-3/4 lg:h-1/3" />
      <Skeleton className="w-5/6 h-1/2 md:w-3/5 lg:w-1/4 lg:h-3/4" />
    </div>
  )
}
