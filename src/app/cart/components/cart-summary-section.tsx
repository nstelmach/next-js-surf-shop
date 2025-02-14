import Typography from "@/src/components/typography/typography"

interface CartSummarySectionProps {
  title: string
  price: number
}

export default function CartSummarySection({ title, price }: CartSummarySectionProps) {
  return (
    <div className="flex flex-row items-start justify-between gap-4 p-2 max-w-xs xl:max-w-full w-full">
      <Typography as="p" variant="base">
        {title}:
      </Typography>
      <Typography as="p" variant="base">
        {price} €
      </Typography>
    </div>
  )
}
