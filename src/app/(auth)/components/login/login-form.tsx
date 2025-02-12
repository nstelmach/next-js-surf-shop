"use client"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form } from "@/src/components/ui/form"
import LoginLinks from "@/src/app/(auth)/components/login/login-links"
import { useMutation } from "@blitzjs/rpc"
import login from "@/src/app/(auth)/mutations/login"
import { useRouter, useSearchParams } from "next/navigation"
import type { Route } from "next"
import { AuthenticationError } from "blitz"
import { Login } from "@/src/lib/validations"
import { FORM_ERROR, INVALID_CREDENTIALS, UNEXPECTED_ERROR } from "@/src/lib/constants"
import Paragraph from "@/src/components/typography/paragraph"
import InputField from "@/src/components/fields/input-field"

export default function LoginForm() {
  const [loginMutation, { isLoading, isError, error }] = useMutation(login)
  const router = useRouter()
  const next = useSearchParams()?.get("next")

  const ERROR = UNEXPECTED_ERROR + " - " + error?.toString()

  const form = useForm<z.infer<typeof Login>>({
    resolver: zodResolver(Login),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof Login>) => {
    try {
      await loginMutation(values)
      router.refresh()
      if (next) {
        router.push(next as Route)
      } else {
        router.push("/my-account")
      }
    } catch (error: any) {
      if (error instanceof AuthenticationError) {
        return { [FORM_ERROR]: INVALID_CREDENTIALS }
      } else {
        return {
          [FORM_ERROR]: ERROR,
        }
      }
    }
  }

  return (
    <>
      {isError && (
        <Paragraph className="m-2 xl:text-base text-xl md:text-2xl text-center">
          {error instanceof AuthenticationError ? INVALID_CREDENTIALS : ERROR}
        </Paragraph>
      )}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 md:max-w-xl xl:max-w-3xl">
          <InputField control={form.control} name="email" label="Email *" type="email" />
          <InputField control={form.control} name="password" label="Password *" type="password" />
          <LoginLinks isLoading={isLoading} />
        </form>
      </Form>
    </>
  )
}
