"use client" // Error components must be Client components
import React from "react"

export default function Error({ error }: { error: Error }) {
  return <div className="flex">Something went wrong! ({error.message})</div>
}
