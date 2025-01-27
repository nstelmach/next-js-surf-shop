"use client" // Error components must be Client components
import React, { useEffect } from "react"

export default function Error({
  error,
  resetErrorBoundary,
}: {
  error: Error
  resetErrorBoundary: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => resetErrorBoundary()
        }
      >
        Try again
      </button>
    </div>
  )
}
