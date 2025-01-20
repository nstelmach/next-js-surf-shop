import { rpcAppHandler } from "@blitzjs/rpc"
import { withBlitzAuth } from "@/src/app/blitz-server"

export const { GET, POST, HEAD } = withBlitzAuth(rpcAppHandler())
