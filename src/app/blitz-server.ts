import { setupBlitzServer } from "@blitzjs/next"
import { AuthServerPlugin, PrismaStorage, simpleRolesIsAuthorized } from "@blitzjs/auth"

import { RpcServerPlugin } from "@blitzjs/rpc"
import { BlitzLogger } from "blitz"

import db from "db"
import { authConfig } from "@/src/app/blitz-auth-config"

const { api, getBlitzContext, useAuthenticatedBlitzContext, invoke, withBlitzAuth } =
  setupBlitzServer({
    plugins: [
      AuthServerPlugin({
        ...authConfig,
        storage: PrismaStorage(db),
        isAuthorized: simpleRolesIsAuthorized,
      }),
      RpcServerPlugin({}),
    ],
    logger: BlitzLogger({}),
  })

export { api, getBlitzContext, useAuthenticatedBlitzContext, invoke, withBlitzAuth }
