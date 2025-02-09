"use client" // Error components must be Client components
import React from "react"
import Flex from "@/src/components/typohgraphy/flex"

export default function Error({ error }: { error: Error }) {
  return <Flex>Something went wrong! ({error.message})</Flex>
}
