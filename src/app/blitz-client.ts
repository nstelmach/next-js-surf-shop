"use client"
import { setupBlitzClient } from "@blitzjs/next"
import { AuthClientPlugin } from "@blitzjs/auth"
import { BlitzRpcPlugin } from "@blitzjs/rpc"
import { authConfig } from "@/src/app/blitz-auth-config"

export const { BlitzProvider } = setupBlitzClient({
  plugins: [AuthClientPlugin(authConfig), BlitzRpcPlugin({})],
})
