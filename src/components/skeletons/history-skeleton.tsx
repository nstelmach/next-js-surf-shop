import { Skeleton } from "@/src/components/ui/skeleton"

export default function HistorySkeleton() {
  return (
    <div className="flex flex-col justify-start items-center w-screen h-screen py-4">
      <Skeleton className="w-5/6 h-1/2 lg:w-4/5" />
    </div>
  )
}
