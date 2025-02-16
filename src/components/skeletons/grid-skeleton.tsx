import { Skeleton } from "@/src/components/ui/skeleton"

export default function GridSkeleton() {
  return Array.from({ length: 3 }).map((_, index) => (
    <Skeleton key={index} className="h-[600px] w-[400px]" />
  ))
}
