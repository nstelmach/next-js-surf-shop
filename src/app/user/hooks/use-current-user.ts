import { useQuery } from "@blitzjs/rpc"
import getCurrentUser from "../queries/get-current-user"

export const useCurrentUser = () => {
  const [user] = useQuery(getCurrentUser, null)
  return user
}
