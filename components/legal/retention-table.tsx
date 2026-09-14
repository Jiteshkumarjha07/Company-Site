import type { RetentionRow } from '@/lib/legal/types'

export function RetentionTable({ rows }: { rows: RetentionRow[] }) {
  return (
    <div className="overflow-x-auto border border-foreground/10">
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-foreground/10 bg-foreground/[0.03]">
            <th className="px-4 py-3 font-semibold text-foreground">Data category</th>
            <th className="px-4 py-3 font-semibold text-foreground">Deleted immediately?</th>
            <th className="px-4 py-3 font-semibold text-foreground">Retention period</th>
            <th className="px-4 py-3 font-semibold text-foreground">Legal basis for retention</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.dataCategory} className="border-b border-foreground/10 last:border-b-0">
              <td className="px-4 py-3 text-foreground">{row.dataCategory}</td>
              <td className="px-4 py-3 text-muted-foreground">
                {row.deletedImmediately ? 'Yes, on deletion' : 'No, retained'}
              </td>
              <td className="px-4 py-3 text-muted-foreground">{row.retentionPeriod ?? '—'}</td>
              <td className="px-4 py-3 text-muted-foreground">{row.legalBasis ?? '—'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
