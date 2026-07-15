import { NextResponse } from 'next/server'
import { exec } from 'child_process'
import fs from 'fs'
import path from 'path'

export async function GET() {
  return new Promise((resolve) => {
    const root = 'c:\\Users\\BIT PATNA\\OneDrive\\Desktop\\company_overview_site'
    
    // List of old files and folders to delete
    const pathsToDelete = [
      path.join(root, 'src'),
      path.join(root, 'dist'),
      path.join(root, '1-8'),
      path.join(root, '11-18'),
      path.join(root, 'sm'),
      path.join(root, 'vite.config.js'),
      path.join(root, 'eslint.config.js'),
      path.join(root, 'index.html'),
      path.join(root, 'copy_frames.js'),
      path.join(root, 'copy_frames2.js'),
      path.join(root, 'cursor-test.html'),
    ]
    
    // Recursive delete function
    const deleteRecursive = (itemPath: string) => {
      if (fs.existsSync(itemPath)) {
        const stats = fs.statSync(itemPath)
        if (stats.isDirectory()) {
          fs.readdirSync(itemPath).forEach(child => {
            deleteRecursive(path.join(itemPath, child))
          })
          try {
            fs.rmdirSync(itemPath)
          } catch (e) {}
        } else {
          try {
            fs.unlinkSync(itemPath)
          } catch (e) {}
        }
      }
    }
    
    // Run deletions
    pathsToDelete.forEach(item => {
      deleteRecursive(item)
    })
    
    // Git add all (including deletions)
    exec('git add -A', (err1, stdout1, stderr1) => {
      exec('git commit -m "chore: remove old Vite/React files and clean repository"', (err2, stdout2, stderr2) => {
        exec('git push origin main', (err3, stdout3, stderr3) => {
          resolve(NextResponse.json({ 
            success: true, 
            deletedPaths: pathsToDelete.filter(p => !fs.existsSync(p)),
            commit: stdout2, 
            push: stdout3,
            error: err3 ? err3.message : null
          }))
        })
      })
    })
  })
}
