"use client"
import { useMutation } from "@blitzjs/rpc"
import { useSearchParams } from "next/navigation"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { ResetPassword } from "@/src/lib/validations"
import { zodResolver } from "@hookform/resolvers/zod"
import { FORM_ERROR, UNEXPECTED_ERROR } from "@/src/lib/constants"
import Paragraph from "@/src/components/typography/paragraph"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form"
import { Input } from "@/src/components/ui/input"
import ButtonWithLoader from "@/src/components/button-with-loader/button-with-loader"
import resetPassword from "@/src/app/(auth)/mutations/reset-password"
import Link from "next/link"
import Flex from "@/src/components/typography/flex"
import { Checkbox } from "@/src/components/ui/checkbox"

export default function ResetPasswordForm() {
  const searchParams = useSearchParams()
  const token = searchParams?.get("token")?.toString()
  const [resetPasswordMutation, { isLoading, isSuccess, isError, error }] =
    useMutation(resetPassword)

  const ERROR = error?.message

  const form = useForm<z.infer<typeof ResetPassword>>({
    resolver: zodResolver(ResetPassword),
    defaultValues: {
      password: "",
      passwordConfirmation: "",
      terms: false,
      token,
    },
  })

  const onSubmit = async (values: z.infer<typeof ResetPassword>) => {
    try {
      await resetPasswordMutation({ ...values, token })
    } catch (error: any) {
      if (error.name === "ResetPasswordError") {
        return {
          [FORM_ERROR]: ERROR,
        }
      } else {
        return {
          [FORM_ERROR]: UNEXPECTED_ERROR,
        }
      }
    }
  }

  return (
    <>
      {isError && (
        <Paragraph className="m-2 xl:text-base text-xl md:text-2xl text-center">
          {error.name === "ResetPasswordError" ? ERROR : UNEXPECTED_ERROR}
        </Paragraph>
      )}
      {isSuccess ? (
        <Flex className="flex-col">
          <Paragraph className="m-2 xl:text-base text-xl md:text-2xl text-center">
            Password Reset Successfully
          </Paragraph>
          <Paragraph className="m-2 xl:text-base text-xl md:text-2xl text-center">
            Go to the{" "}
            <Link className="hover:underline" href="/">
              homepage
            </Link>
          </Paragraph>
        </Flex>
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 md:max-w-xl xl:max-w-3xl"
          >
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Password *</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="passwordConfirmation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm New Password *</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="terms"
              render={({ field }) => (
                <FormItem>
                  <Flex className="flex xl:items-center md:items-baseline justify-center gap-2 m-2">
                    <FormControl>
                      <Checkbox id="terms" checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <FormLabel>
                      I have read the{" "}
                      <Link href="/privacy-policy" className="hover:underline">
                        privacy policy
                      </Link>{" "}
                      and accept the{" "}
                      <Link href="/terms-and-conditions" className="hover:underline">
                        terms and conditions
                      </Link>
                    </FormLabel>
                  </Flex>
                  <FormMessage />
                </FormItem>
              )}
            />
            <ButtonWithLoader isLoading={isLoading} type="submit" label="RESET" />
          </form>
        </Form>
      )}
    </>
  )
}
