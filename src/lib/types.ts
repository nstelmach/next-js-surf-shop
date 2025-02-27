import { SimpleRolesIsAuthorized } from "@blitzjs/auth"
import { User } from "@/db"
import { ALREADY_SUBSCRIBED, EMPTY_CART } from "@/src/lib/constants"

export type Role = "ADMIN" | "USER"

declare module "@blitzjs/auth" {
  export interface Session {
    isAuthorized: SimpleRolesIsAuthorized<Role>
    PublicData: {
      userId: User["id"]
      role: Role
      email: string
    }
  }
}

export class AlreadySubscribedError extends Error {
  name = "AlreadySubscribedError"
  message = ALREADY_SUBSCRIBED
}

export class EmptyCartError extends Error {
  name = "EmptyCartError"
  message = EMPTY_CART
}
