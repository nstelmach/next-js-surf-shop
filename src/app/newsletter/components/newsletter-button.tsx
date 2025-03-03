"use client"
import ButtonWithLoader from "@/src/components/button-with-loader/button-with-loader"
import { useMutation } from "@blitzjs/rpc"
import newsletterSignup from "@/src/app/newsletter/mutations/newsletter-signup"
import {
  ALREADY_SUBSCRIBED,
  FORM_ERROR,
  LOGGED_IN,
  UNEXPECTED_ERROR,
  USER_NOT_EXIST,
} from "@/src/lib/constants"
import { AuthenticationError, NotFoundError } from "blitz"
import Typography from "@/src/components/typography/typography"
import { AlreadySubscribedError } from "@/src/lib/types"

export default function NewsletterButton() {
  const [newsletterSignupMutation, { isLoading, isSuccess, isError, error }] =
    useMutation(newsletterSignup)

  const onSubscribeHandler = async () => {
    try {
      await newsletterSignupMutation()
    } catch (error: any) {
      if (error instanceof AuthenticationError) {
        return { [FORM_ERROR]: LOGGED_IN }
      } else if (error instanceof NotFoundError) {
        return { [FORM_ERROR]: USER_NOT_EXIST }
      } else if (error.name === "AlreadySubscribedError") {
        return { [FORM_ERROR]: ALREADY_SUBSCRIBED }
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
        <Typography as="p" variant="base" className="m-2 text-center">
          {error instanceof AuthenticationError
            ? LOGGED_IN
            : error instanceof NotFoundError
            ? USER_NOT_EXIST
            : error instanceof Error && error.name === "AlreadySubscribedError"
            ? ALREADY_SUBSCRIBED
            : UNEXPECTED_ERROR}
        </Typography>
      )}
      {isSuccess ? (
        <Typography as="p" variant="base" className="m-2 text-center">
          You have successfully subscribed to our newsletter!
        </Typography>
      ) : (
        <ButtonWithLoader
          onClick={onSubscribeHandler}
          isLoading={isLoading}
          type="button"
          label="SIGN UP!"
        />
      )}
    </>
  )
}
