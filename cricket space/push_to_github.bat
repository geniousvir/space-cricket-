@echo off
title Push Safe Cricket Space to GitHub
echo ========================================================
echo   Connecting and Pushing to GitHub:
echo   https://github.com/geniousvir/space-cricket-.git
echo ========================================================
echo.
cd /d "%~dp0"
"C:\Users\MOHIT\.cache\codex-runtimes\codex-primary-runtime\dependencies\native\git\cmd\git.exe" add .
"C:\Users\MOHIT\.cache\codex-runtimes\codex-primary-runtime\dependencies\native\git\cmd\git.exe" commit -m "Upload Antigravity project"
"C:\Users\MOHIT\.cache\codex-runtimes\codex-primary-runtime\dependencies\native\git\cmd\git.exe" branch -M main
"C:\Users\MOHIT\.cache\codex-runtimes\codex-primary-runtime\dependencies\native\git\cmd\git.exe" remote set-url origin https://github.com/geniousvir/space-cricket-.git
"C:\Users\MOHIT\.cache\codex-runtimes\codex-primary-runtime\dependencies\native\git\cmd\git.exe" push -u origin main --force
echo.
echo ========================================================
echo   Process completed! Please check status above.
echo ========================================================
pause
