"use client"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form } from "@/src/components/ui/form"
import { Contact } from "@/src/lib/validations"
import ButtonWithLoader from "@/src/components/button-with-loader/button-with-loader"
import { useMutation } from "@blitzjs/rpc"
import contact from "@/src/app/contact/mutations/contact"
import { FORM_ERROR, UNEXPECTED_ERROR } from "@/src/lib/constants"
import Link from "next/link"
import InputField from "@/src/components/fields/input-field"
import TextAreaField from "@/src/components/fields/text-area-field"
import Typography from "@/src/components/typography/typography"

export default function ContactForm() {
  const [contactMutation, { isLoading, isSuccess, isError }] = useMutation(contact)

  const form = useForm<z.infer<typeof Contact>>({
    resolver: zodResolver(Contact),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof Contact>) => {
    try {
      await contactMutation(values)
    } catch (error: any) {
      return { [FORM_ERROR]: UNEXPECTED_ERROR }
    }
  }

  return (
    <>
      {isError && (
        <Typography as="p" variant="base" className="m-2 text-center">
          {UNEXPECTED_ERROR}
        </Typography>
      )}
      {isSuccess ? (
        <div className="flex flex-col">
          <Typography as="p" variant="base" className="m-2 text-center">
            Your message has been successfully sent!
          </Typography>
          <Typography as="p" variant="base" className="m-2 text-center">
            Go to the{" "}
            <Link className="hover:underline" href="/">
              homepage
            </Link>
          </Typography>
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 md:min-w-96 min-w-72">
            <InputField control={form.control} name="name" label="Name *" type="text" />
            <InputField control={form.control} name="email" label="E-mail *" type="email" />
            <TextAreaField control={form.control} name="message" label="Message *" />
            <ButtonWithLoader type="submit" label="Send" isLoading={isLoading} />
          </form>
        </Form>
      )}
    </>
  )
}
