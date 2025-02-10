"use client"
import { useMutation } from "@blitzjs/rpc"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { ForgotPassword } from "@/src/lib/validations"
import { zodResolver } from "@hookform/resolvers/zod"
import { FORM_ERROR, UNEXPECTED_ERROR } from "@/src/lib/constants"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form"
import { Input } from "@/src/components/ui/input"
import forgotPassword from "@/src/app/(auth)/mutations/forgot-password"
import Paragraph from "@/src/components/typohgraphy/paragraph"
import Flex from "@/src/components/typohgraphy/flex"
import ButtonWithLoader from "@/src/components/button-with-loader/button-with-loader"

export default function ForgotPasswordForm() {
  const [forgotPasswordMutation, { isLoading, isError, isSuccess }] = useMutation(forgotPassword)

  const form = useForm<z.infer<typeof ForgotPassword>>({
    resolver: zodResolver(ForgotPassword),
    defaultValues: {
      email: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof ForgotPassword>) => {
    try {
      const msg = await forgotPasswordMutation(values)
      const newWindow = window.open()
      newWindow.document.write(msg)
    } catch (error: any) {
      return {
        [FORM_ERROR]: UNEXPECTED_ERROR,
      }
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
        <Flex className="flex-col justify-center items-center">
          <Paragraph className="text-center text-3xl md:text-4xl xl:text-2xl font-bold m-4">
            Request Submitted
          </Paragraph>
          <Paragraph className="m-2 text-center xl:text-base text-xl md:text-2xl">
            If your email is in our system, you will receive instructions to reset your password
            shortly.
          </Paragraph>
        </Flex>
      ) : (
        <>
          <Paragraph className="m-4 text-center xl:text-base text-xl md:text-2xl">
            Please enter the email address you used to register. You will receive a temporary link
            to reset your password.
          </Paragraph>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 md:max-w-xl xl:max-w-3xl"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email *</FormLabel>
                    <FormControl>
                      <Input type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <ButtonWithLoader isLoading={isLoading} type="submit" label="SEND" />
            </form>
          </Form>
        </>
      )}
    </>
  )
}
