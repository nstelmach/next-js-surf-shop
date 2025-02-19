import { Skeleton } from "@/src/components/ui/skeleton"

export default function InfoSkeleton() {
  return (
    <div className="flex flex-col justify-start items-center w-screen h-screen py-4">
      <Skeleton className="w-5/6 h-1/4 lg:h-1/5 lg:w-2/5" />
    </div>
  )
}
