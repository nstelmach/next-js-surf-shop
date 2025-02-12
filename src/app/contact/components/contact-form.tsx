"use client"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form"
import { Input } from "@/src/components/ui/input"
import { Textarea } from "@/src/components/ui/textarea"
import { Contact } from "@/src/lib/validations"
import ButtonWithLoader from "@/src/components/button-with-loader/button-with-loader"
import { useMutation } from "@blitzjs/rpc"
import contact from "@/src/app/contact/mutations/contact"
import { FORM_ERROR, UNEXPECTED_ERROR } from "@/src/lib/constants"
import Paragraph from "@/src/components/typography/paragraph"
import Flex from "@/src/components/typography/flex"
import Link from "next/link"

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
        <Paragraph className="m-2 xl:text-base text-xl md:text-2xl text-center">
          {UNEXPECTED_ERROR}
        </Paragraph>
      )}
      {isSuccess ? (
        <Flex className="flex-col">
          <Paragraph className="m-2 xl:text-base text-xl md:text-2xl text-center">
            Your message has been successfully sent!
          </Paragraph>
          <Paragraph className="m-2 xl:text-base text-xl md:text-2xl text-center">
            Go to the{" "}
            <Link className="hover:underline" href="/public">
              homepage
            </Link>
          </Paragraph>
        </Flex>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 md:min-w-96 min-w-72">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name *</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail *</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              // TODO text area field component
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message *</FormLabel>
                  <FormControl>
                    <Textarea className="resize-none" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <ButtonWithLoader type="submit" label="Send" isLoading={isLoading} />
          </form>
        </Form>
      )}
    </>
  )
}
