import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const REQUEST_INBOX = 'alumnest.pvt@gmail.com'

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

export async function POST(request: Request) {
  let body: {
    fullName?: string
    email?: string
    phone?: string
    institution?: string
    reason?: string
    confirmed?: boolean
  }

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const fullName = body.fullName?.trim() ?? ''
  const email = body.email?.trim() ?? ''
  const phone = body.phone?.trim() ?? ''
  const institution = body.institution?.trim() ?? ''
  const reason = body.reason?.trim() ?? ''

  if (!fullName || fullName.length > 200) {
    return NextResponse.json({ error: 'Please provide your full name.' }, { status: 400 })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 320) {
    return NextResponse.json(
      { error: 'Please provide the email address registered with your Alumnest account.' },
      { status: 400 },
    )
  }
  if (phone.length > 30 || institution.length > 200 || reason.length > 2000) {
    return NextResponse.json({ error: 'One of the fields is too long.' }, { status: 400 })
  }
  if (body.confirmed !== true) {
    return NextResponse.json(
      { error: 'You must confirm that you understand deletion is permanent.' },
      { status: 400 },
    )
  }

  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_APP_PASSWORD

  if (!smtpUser || !smtpPass) {
    console.error('delete-account: SMTP_USER / SMTP_APP_PASSWORD are not configured')
    return NextResponse.json(
      {
        error: `We could not submit your request automatically. Please email us directly at ${REQUEST_INBOX}.`,
      },
      { status: 500 },
    )
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: { user: smtpUser, pass: smtpPass },
  })

  const submittedAt = new Date().toISOString()
  const rows: [string, string][] = [
    ['Full name', fullName],
    ['Registered email', email],
    ['Phone', phone || '—'],
    ['Institution', institution || '—'],
    ['Reason', reason || '—'],
    ['Submitted at (UTC)', submittedAt],
  ]

  try {
    await transporter.sendMail({
      from: `"Alumnest Website" <${smtpUser}>`,
      to: REQUEST_INBOX,
      replyTo: email,
      subject: `Account Deletion Request — ${fullName}`,
      text: [
        'A user has requested deletion of their Alumnest account and all associated data.',
        '',
        ...rows.map(([label, value]) => `${label}: ${value}`),
        '',
        'The user confirmed they understand this action is permanent and irreversible.',
      ].join('\n'),
      html: `
        <h2>Account Deletion Request</h2>
        <p>A user has requested deletion of their Alumnest account and all associated data.</p>
        <table cellpadding="6" style="border-collapse:collapse">
          ${rows
            .map(
              ([label, value]) =>
                `<tr><td style="border:1px solid #ccc"><strong>${escapeHtml(label)}</strong></td><td style="border:1px solid #ccc">${escapeHtml(value)}</td></tr>`,
            )
            .join('')}
        </table>
        <p>The user confirmed they understand this action is permanent and irreversible.</p>
      `,
    })
  } catch (error) {
    console.error('delete-account: failed to send email', error)
    return NextResponse.json(
      {
        error: `We could not submit your request automatically. Please email us directly at ${REQUEST_INBOX}.`,
      },
      { status: 502 },
    )
  }

  return NextResponse.json({ ok: true })
}
