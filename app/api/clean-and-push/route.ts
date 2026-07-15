import { NextResponse } from 'next/server'
import { exec } from 'child_process'
import fs from 'fs'
import path from 'path'

export async function GET() {
  return new Promise((resolve) => {
    const root = 'c:\\Users\\BIT PATNA\\OneDrive\\Desktop\\company_overview_site'

    const deleteRecursive = (itemPath: string) => {
      if (!fs.existsSync(itemPath)) return
      const stats = fs.statSync(itemPath)
      if (stats.isDirectory()) {
        fs.readdirSync(itemPath).forEach(child => deleteRecursive(path.join(itemPath, child)))
        try { fs.rmdirSync(itemPath) } catch (_) {}
      } else {
        try { fs.unlinkSync(itemPath) } catch (_) {}
      }
    }

    // All leftover files and temp API folders to clean up
    const itemsToDelete = [
      path.join(root, 'app', 'api', 'git-clean'),
      path.join(root, 'app', 'api', 'git-status'),
      path.join(root, 'app', 'api', 'push'),
      path.join(root, 'app', 'api', 'git-force-push'),
      path.join(root, 'app', 'api', 'final-cleanup'),
      path.join(root, 'app', 'api', 'convert'),
    ]

    itemsToDelete.forEach(deleteRecursive)

    // Commit the clean page.tsx + delete API routes + push
    exec('git add -A', () => {
      exec('git commit -m "fix: restore clean page.tsx and remove diagnostic API routes"', (err2, stdout2) => {
        exec('git push origin main', (err3, stdout3, stderr3) => {
          // Self-delete this route after response
          setTimeout(() => deleteRecursive(path.join(root, 'app', 'api', 'clean-and-push')), 2000)
          resolve(NextResponse.json({
            success: !err3,
            commit: stdout2,
            push: stdout3,
            error: err3 ? err3.message : null,
          }))
        })
      })
    })
  })
}
