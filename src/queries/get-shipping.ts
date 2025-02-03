import db from "@/db"

export default async function getShipping() {
  return await db.shipping.findMany()
}
