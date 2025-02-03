import db from "@/db"

export default async function getPayment() {
  return await db.payment.findMany()
}
