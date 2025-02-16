import Typography from "@/src/components/typography/typography"

interface InformationItemProps {
  title: string
  name: string
}

export default function InformationItem({ title, name }: InformationItemProps) {
  return (
    <div className="flex md:justify-between md:flex-row flex-col">
      <Typography as="p" variant="base" className="m-2 text-center">
        {title}
      </Typography>
      <Typography as="p" variant="base" className="m-2 text-center grow-2">
        {name}
      </Typography>
    </div>
  )
}
