import { Skeleton } from "@/src/components/ui/skeleton"

export default function ListSkeleton() {
  return (
    <div className="w-screen h-screen flex justify-center items-start">
      <div className="grid xl:grid-cols-3 grid-cols-1 md:place-items-center w-full h-full lg:w-3/4 lg:h-2/3 gap-8 p-4">
        <Skeleton className="h-[400px] md:w-[600px] md:h-[700px] lg:w-[400px] lg:h-[600px]" />
        <Skeleton className="h-[400px] md:w-[600px] md:h-[700px] lg:w-[400px] lg:h-[600px]" />
        <Skeleton className="h-[400px] md:w-[600px] md:h-[700px] lg:w-[400px] lg:h-[600px]" />
      </div>
    </div>
  )
}
