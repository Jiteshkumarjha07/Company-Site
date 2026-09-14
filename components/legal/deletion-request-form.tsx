import type { TenantConfig } from '@/lib/legal/types'

/**
 * Plain HTML form — no client JS, works with JS disabled. Submits a real POST
 * navigation to the tenant's Cloud Function, which must accept
 * application/x-www-form-urlencoded and respond with a confirmation page.
 */
export function DeletionRequestForm({
  tenant,
  variant,
}: {
  tenant: TenantConfig
  variant: 'full' | 'partial'
}) {
  const formId = `deletion-form-${variant}`

  return (
    <form
      id={formId}
      action={tenant.deletionRequestEndpoint}
      method="POST"
      className="flex flex-col gap-5 border border-foreground/10 p-6"
    >
      <input type="hidden" name="requestType" value={variant === 'full' ? 'full_account' : 'partial_data'} />
      <input type="hidden" name="tenant" value={tenant.slug} />

      <div className="flex flex-col gap-1.5">
        <label htmlFor={`${formId}-name`} className="text-sm font-medium text-foreground">
          Full name
        </label>
        <input
          id={`${formId}-name`}
          name="fullName"
          type="text"
          required
          className="border border-foreground/20 bg-transparent px-3 py-2 text-sm text-foreground outline-none focus:border-foreground/50"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor={`${formId}-email`} className="text-sm font-medium text-foreground">
          Email address registered with your {tenant.appName} account
        </label>
        <input
          id={`${formId}-email`}
          name="registeredEmail"
          type="email"
          required
          className="border border-foreground/20 bg-transparent px-3 py-2 text-sm text-foreground outline-none focus:border-foreground/50"
        />
      </div>

      {variant === 'partial' ? (
        <fieldset className="flex flex-col gap-2">
          <legend className="text-sm font-medium text-foreground">
            Which data would you like deleted?
          </legend>
          {tenant.partialDeletionCategories.map((category) => (
            <label key={category} className="flex items-center gap-2 text-sm text-muted-foreground">
              <input type="checkbox" name="dataCategories" value={category} className="size-4" />
              {category}
            </label>
          ))}
        </fieldset>
      ) : null}

      <div className="flex flex-col gap-1.5">
        <label htmlFor={`${formId}-notes`} className="text-sm font-medium text-foreground">
          Additional notes (optional)
        </label>
        <textarea
          id={`${formId}-notes`}
          name="notes"
          rows={3}
          className="border border-foreground/20 bg-transparent px-3 py-2 text-sm text-foreground outline-none focus:border-foreground/50"
        />
      </div>

      <button
        type="submit"
        className="self-start border border-foreground/60 px-6 py-3 text-xs font-mono uppercase tracking-widest text-foreground transition-colors hover:bg-foreground hover:text-background"
      >
        {variant === 'full' ? 'Submit account deletion request' : 'Submit data deletion request'}
      </button>
    </form>
  )
}
