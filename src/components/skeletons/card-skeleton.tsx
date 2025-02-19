import { Skeleton } from "@/src/components/ui/skeleton"

export default function CardSkeleton() {
  return (
    <div className="flex flex-col justify-start items-center w-screen h-screen py-4">
      <Skeleton className="w-5/6 h-1/2 md:h-2/3 lg:w-3/5" />
    </div>
  )
}
