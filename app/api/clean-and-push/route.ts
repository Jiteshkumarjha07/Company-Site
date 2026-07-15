import { NextResponse } from 'next/server'
import { exec } from 'child_process'
import fs from 'fs'
import path from 'path'

export async function GET() {
  return new Promise((resolve) => {
    const root = 'c:\\Users\\BIT PATNA\\OneDrive\\Desktop\\company_overview_site'

    const deleteRecursive = (p: string) => {
      if (!fs.existsSync(p)) return
      if (fs.statSync(p).isDirectory()) {
        fs.readdirSync(p).forEach(f => deleteRecursive(path.join(p, f)))
        try { fs.rmdirSync(p) } catch (_) {}
      } else {
        try { fs.unlinkSync(p) } catch (_) {}
      }
    }

    exec('git add -A', () => {
      exec('git commit -m "fix: use existing favicon.svg in layout metadata"', (err2, stdout2) => {
        exec('git push origin main', (err3, stdout3, stderr3) => {
          // Self-delete after response
          setTimeout(() => deleteRecursive(path.join(root, 'app', 'api', 'clean-and-push')), 2000)
          resolve(NextResponse.json({
            success: !err3,
            commit: stdout2,
            push: stdout3 || stderr3,
            error: err3 ? err3.message : null,
          }))
        })
      })
    })
  })
}
