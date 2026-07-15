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

    const toDelete = [
      path.join(root, '11-18'),
      path.join(root, 'dist'),
      path.join(root, 'src'),
      path.join(root, 'app', 'api', 'git'),
      path.join(root, 'IMPLEMENTATION_SUMMARY.md'),
      path.join(root, 'INTEGRATION_GUIDE.md'),
      path.join(root, 'SELECTORS_REFERENCE.md'),
      path.join(root, 'package-lock-DESKTOP-QFO5VUO.json'),
      path.join(root, 'Alumnest_Privacy_Policy.pdf'),
      path.join(root, 'Alumnest_Privacy_Policy_v2.pdf'),
    ]

    toDelete.forEach(deleteRecursive)

    exec('git add -A', () => {
      exec('git commit -m "chore: final cleanup of leftover files"', (err2, stdout2) => {
        exec('git push origin main', (err3, stdout3, stderr3) => {
          setTimeout(() => deleteRecursive(path.join(root, 'app', 'api', 'clean-and-push')), 1500)
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
