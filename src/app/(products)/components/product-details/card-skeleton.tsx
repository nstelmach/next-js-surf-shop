import { Skeleton } from "@/src/components/ui/skeleton"

export default function CardSkeleton() {
  return (
    <div className="flex flex-col justify-start items-center w-screen h-screen py-4">
      <Skeleton className="w-5/6 h-3/4 lg:w-3/5" />
    </div>
  )
}
