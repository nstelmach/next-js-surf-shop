"use client"
import ButtonWithLoader from "@/src/components/button-with-loader/button-with-loader"
import { useMutation } from "@blitzjs/rpc"
import newsletterSignup, { AlreadySubscribedError } from "@/src/mutations/newsletter-signup"
import {
  ALREADY_SUBSCRIBED,
  FORM_ERROR,
  LOGGED_IN,
  UNEXPECTED_ERROR,
  USER_NOT_EXIST,
} from "@/src/lib/constants"
import Paragraph from "@/src/components/typohgraphy/paragraph"
import { AuthenticationError, NotFoundError } from "blitz"

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
      } else if (error instanceof AlreadySubscribedError) {
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
        <Paragraph className="m-2 xl:text-base text-xl md:text-2xl text-center">
          {error instanceof AuthenticationError
            ? LOGGED_IN
            : error instanceof NotFoundError
            ? USER_NOT_EXIST
            : error instanceof AlreadySubscribedError
            ? ALREADY_SUBSCRIBED
            : UNEXPECTED_ERROR}
        </Paragraph>
      )}
      {isSuccess ? (
        <Paragraph className="m-2 xl:text-base text-xl md:text-2xl text-center">
          You have successfully subscribed to our newsletter!
        </Paragraph>
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
