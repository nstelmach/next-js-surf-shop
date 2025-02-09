"use client"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form"
import { Input } from "@/src/components/ui/input"
import LoginLinks from "@/src/app/(auth)/components/login/login-links"
import { useMutation } from "@blitzjs/rpc"
import login from "@/src/app/(auth)/mutations/login"
import { useRouter, useSearchParams } from "next/navigation"
import type { Route } from "next"
import { AuthenticationError } from "blitz"
import { Login } from "@/src/lib/validations"
import { FORM_ERROR, INVALID_CREDENTIALS, UNEXPECTED_ERROR } from "@/src/lib/constants"
import Paragraph from "@/src/components/typohgraphy/paragraph"

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
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password *</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <LoginLinks isLoading={isLoading} />
        </form>
      </Form>
    </>
  )
}
