import { NextResponse } from 'next/server'
import { exec } from 'child_process'

export async function GET() {
  return new Promise((resolve) => {
    exec('git add -A', (err1, stdout1, stderr1) => {
      if (err1) {
        return resolve(NextResponse.json({ error: 'git add failed', details: err1.message, stderr: stderr1 }))
      }
      
      exec('git commit -m "feat: implement Next.js site with PDF redirects and terms"', (err2, stdout2, stderr2) => {
        exec('git push origin main', (err3, stdout3, stderr3) => {
          if (err3) {
            return resolve(NextResponse.json({ 
              error: 'git push failed', 
              details: err3.message, 
              stdout: stdout3,
              stderr: stderr3 
            }))
          }
          resolve(NextResponse.json({ 
            success: true, 
            add: stdout1, 
            commit: stdout2, 
            push: stdout3 
          }))
        })
      })
    })
  })
}
