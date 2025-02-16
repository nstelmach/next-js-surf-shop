"use client"
import { useMutation } from "@blitzjs/rpc"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { ForgotPassword } from "@/src/lib/validations"
import { zodResolver } from "@hookform/resolvers/zod"
import { FORM_ERROR, UNEXPECTED_ERROR } from "@/src/lib/constants"
import { Form } from "@/src/components/ui/form"
import forgotPassword from "@/src/app/(auth)/mutations/forgot-password"
import ButtonWithLoader from "@/src/components/button-with-loader/button-with-loader"
import InputField from "@/src/components/fields/input-field"
import Typography from "@/src/components/typography/typography"

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
      if (msg) {
        const newWindow = window.open()
        newWindow.document.write(msg)
      }
    } catch (error: any) {
      return {
        [FORM_ERROR]: UNEXPECTED_ERROR,
      }
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
        <div className="flex flex-col justify-center items-center">
          <Typography as="p" variant="base" className="m-2 text-center">
            Request Submitted
          </Typography>
          <Typography as="p" variant="base" className="m-2 text-center">
            If your email is in our system, you will receive instructions to reset your password
            shortly.
          </Typography>
        </div>
      ) : (
        <>
          <Typography as="p" variant="base" className="m-4 text-center">
            Please enter the email address you used to register. You will receive a temporary link
            to reset your password.
          </Typography>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 w-full md:max-w-sm xl:max-w-xs"
            >
              <InputField control={form.control} name="email" label="Email *" type="email" />
              <ButtonWithLoader isLoading={isLoading} type="submit" label="SEND" />
            </form>
          </Form>
        </>
      )}
    </>
  )
}
