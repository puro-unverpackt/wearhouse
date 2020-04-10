#!/bin/bash
project_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
echo $project_path

# get running process
process=$(lsof -i:31800)
echo $process

# abort on error
set -e

## FRONTEND
# navigate into frontend
frontend_path="${project_path}/frontend"
echo $frontend_path
cd $frontend_path

# build into dist
npm ci
npm run build

# move the build to the backend
wwwroot_path="${project_path}/backend/wwwroot"
echo $wwwroot_path

rm -rf $wwwroot_path
mv ./dist $wwwroot_path

## BACKEND
# navigate into backend
backend_path="${project_path}/backend"
echo $backend_path
cd $backend_path

# kill running application
if [[ -n $process ]] 
then
 echo "kill process"
 kill -9 $(lsof -t -i:31800)
fi

# start application
dotnet run
