@echo off
set "PATH=%~dp0node-v20.11.1-win-x64;%PATH%"

echo Applying fresh updates (terminating old servers if any)...
taskkill /F /IM node.exe >nul 2>&1

echo Starting AGC Backend Server...
start "Backend" cmd /k "cd backend && npm start"

echo Starting AGC Frontend Server...
start "Frontend" cmd /k "cd frontend && npm run dev"

echo Both servers are starting. You can access the application at http://localhost:5173
pause
