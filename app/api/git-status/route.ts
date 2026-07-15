import { NextResponse } from 'next/server'
import { exec } from 'child_process'

export async function GET() {
  return new Promise((resolve) => {
    exec('git status', (err1, stdout1, stderr1) => {
      exec('git log -n 5 --oneline', (err2, stdout2, stderr2) => {
        resolve(NextResponse.json({ 
          status: stdout1, 
          log: stdout2,
          err1: err1 ? err1.message : null,
          err2: err2 ? err2.message : null
        }))
      })
    })
  })
}
