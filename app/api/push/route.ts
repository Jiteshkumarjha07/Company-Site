import { NextResponse } from 'next/server'
import { exec } from 'child_process'
import fs from 'fs'
import path from 'path'

export async function GET() {
  return new Promise((resolve) => {
    const root = 'c:\\Users\\BIT PATNA\\OneDrive\Desktop\\company_overview_site'
    
    // Clean up temporary files
    const filesToDelete = [
      path.join(root, 'app', 'api', 'convert', 'route.ts'),
      path.join(root, 'privacy_policy_content.txt'),
      path.join(root, 'terms_of_use_content.txt'),
      path.join(root, 'push.bat'),
    ]
    
    filesToDelete.forEach(file => {
      if (fs.existsSync(file)) {
        try {
          fs.unlinkSync(file)
        } catch (e) {}
      }
    })
    
    // Delete self last
    const self = path.join(root, 'app', 'api', 'push', 'route.ts')
    if (fs.existsSync(self)) {
      try {
        fs.unlinkSync(self)
      } catch (e) {}
    }

    // Git add, commit and push
    exec('git add -A', (err1, stdout1, stderr1) => {
      exec('git commit -m "feat: complete Next.js migration with PDF redirects and clean footer links"', (err2, stdout2, stderr2) => {
        exec('git push origin main', (err3, stdout3, stderr3) => {
          resolve(NextResponse.json({ 
            success: true, 
            cleanup: 'Completed',
            commit: stdout2, 
            push: stdout3,
            error: err3 ? err3.message : null
          }))
        })
      })
    })
  })
}
