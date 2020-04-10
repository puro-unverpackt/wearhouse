#!/usr/bin/env sh

# abort on error
set -e

## FRONTEND
# navigate into frontend
cd ./frontend

# build into dist
npm ci
npm run build

# move the build to the backend
rm -rf ../backend/wwwroot
mv ./dist ../backend/wwwroot

#navigate back to main
cd ..

## BACKEND
# navigate into backend
cd ./backend

# start backend
dotnet run