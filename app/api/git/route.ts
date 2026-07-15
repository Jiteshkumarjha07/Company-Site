import { NextResponse } from 'next/server'
import { exec } from 'child_process'

function runCmd(cmd: string): Promise<{ stdout: string; stderr: string }> {
  return new Promise((resolve, reject) => {
    exec(cmd, { cwd: 'c:\\Users\\BIT PATNA\\OneDrive\\Desktop\\company_overview_site' }, (error, stdout, stderr) => {
      if (error) {
        reject({ error, stdout, stderr })
      } else {
        resolve({ stdout, stderr })
      }
    })
  })
}

export async function GET() {
  try {
    // Add all changes (untracked, modified, deleted)
    const addResult = await runCmd('git add -A')
    
    // Commit changes
    const commitResult = await runCmd('git commit -m "Migrate Vite site to Next.js and add Privacy Policy & Terms of Use PDFs with direct redirects"')
    
    // Push to remote repository
    const pushResult = await runCmd('git push')
    
    return NextResponse.json({
      success: true,
      add: addResult,
      commit: commitResult,
      push: pushResult
    })
  } catch (err: any) {
    return NextResponse.json({
      success: false,
      error: err.error?.message,
      stdout: err.stdout,
      stderr: err.stderr
    })
  }
}
