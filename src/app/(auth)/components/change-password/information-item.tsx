import Typography from "@/src/components/typography/typography"

interface InformationItemProps {
  title: string
  name: string
}

export default function InformationItem({ title, name }: InformationItemProps) {
  return (
    <div className="flex justify-between md:flex-row flex-col w-full">
      <Typography as="p" variant="base" className="m-2" weight="bold">
        {title}
      </Typography>
      <Typography as="p" variant="base" className="m-2">
        {name}
      </Typography>
    </div>
  )
}
