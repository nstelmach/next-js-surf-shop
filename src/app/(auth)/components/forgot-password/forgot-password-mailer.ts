type ResetPasswordMailer = {
  to: string
  token: string
}

export function forgotPasswordMailer({ to, token }: ResetPasswordMailer) {
  //TODO In production, set APP_ORIGIN to your production server origin
  const origin = process.env.APP_ORIGIN || process.env.BLITZ_DEV_SERVER_ORIGIN
  const resetUrl = `${origin}/reset-password?token=${token}`

  return `<div>
            <p>From: surfshop@example.com</p>
            <p>To: ${to}</p>

            <p>Subject: Your Password Reset Instructions</p>

            <h1>Reset Your Password</h1>

            <a href="${resetUrl}">
                 Click here to set a new password
            </a>
          </div>`
}
