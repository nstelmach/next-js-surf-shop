import Typography from "@/src/components/typography/typography"

interface ParagraphSectionProps {
  title: string
  name: string
}

export default function ParagraphSection({ title, name }: ParagraphSectionProps) {
  return (
    <div className="flex justify-between w-full">
      <Typography as="p" variant="base">
        {title}
      </Typography>
      <Typography as="p" variant="base">
        {name}
      </Typography>
    </div>
  )
}
