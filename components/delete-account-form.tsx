'use client'

import { useState } from 'react'
import type { FormEvent } from 'react'
import { CheckCircle2, Loader2 } from 'lucide-react'

const inputClasses =
  'w-full border border-foreground/15 bg-foreground/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-foreground/40'

export function DeleteAccountForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    setStatus('submitting')
    setErrorMessage(null)

    try {
      const response = await fetch('/api/delete-account', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: data.get('fullName'),
          email: data.get('email'),
          phone: data.get('phone'),
          institution: data.get('institution'),
          reason: data.get('reason'),
          confirmed: data.get('confirmed') === 'on',
        }),
      })

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as { error?: string } | null
        throw new Error(payload?.error ?? 'Something went wrong. Please try again.')
      }

      setStatus('success')
      form.reset()
    } catch (error) {
      setStatus('idle')
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="border border-foreground/15 bg-foreground/[0.03] p-8 text-center md:p-12">
        <CheckCircle2 className="mx-auto size-10 text-foreground" aria-hidden="true" />
        <h3 className="mt-6 text-xl font-semibold tracking-tight text-foreground">
          Request received
        </h3>
        <p className="mx-auto mt-3 max-w-md leading-relaxed text-muted-foreground">
          Your account deletion request has been submitted. Our team will verify your identity
          and process the request within thirty (30) days. You will receive a confirmation at
          the email address you provided.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="fullName" className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Full Name *
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            maxLength={200}
            autoComplete="name"
            placeholder="Your full legal name"
            className={inputClasses}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Registered Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={320}
            autoComplete="email"
            placeholder="Email linked to your Alumnest account"
            className={inputClasses}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            maxLength={30}
            autoComplete="tel"
            placeholder="Optional"
            className={inputClasses}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="institution" className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Institution
          </label>
          <input
            id="institution"
            name="institution"
            type="text"
            maxLength={200}
            placeholder="Optional — helps us locate your account"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="reason" className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Reason for Leaving
        </label>
        <textarea
          id="reason"
          name="reason"
          rows={4}
          maxLength={2000}
          placeholder="Optional — your feedback helps us improve"
          className={`${inputClasses} resize-y`}
        />
      </div>

      <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-muted-foreground">
        <input
          type="checkbox"
          name="confirmed"
          required
          className="mt-1 size-4 shrink-0 accent-foreground"
        />
        <span>
          I understand that deleting my account is <strong className="text-foreground">permanent and irreversible</strong>. All my
          personal data, posts, messages, connections, and verification documents will be
          permanently removed in accordance with the{' '}
          <a href="/privacy-policy" className="underline underline-offset-4 hover:text-foreground">
            Privacy Policy
          </a>
          .
        </span>
      </label>

      {errorMessage ? (
        <p role="alert" className="border-l-2 border-destructive bg-destructive/10 px-4 py-3 text-sm text-foreground">
          {errorMessage}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex items-center justify-center gap-2 self-start border border-foreground/60 px-8 py-3 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:bg-foreground hover:text-background disabled:pointer-events-none disabled:opacity-50"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            Submitting…
          </>
        ) : (
          'Submit Deletion Request'
        )}
      </button>
    </form>
  )
}
