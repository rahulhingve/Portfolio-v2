#!/bin/bash

echo "Checking deployment environment..."

# Check Node.js
echo "Node.js version:"
node --version

# Check npm
echo -e "\nnpm version:"
npm --version

# Check PM2
echo -e "\nPM2 path and version:"
which pm2
pm2 --version

# Check pnpm
echo -e "\npnpm path and version:"
which pnpm
pnpm --version

# Check project directory
echo -e "\nProject directory contents:"
ls -la ~/Portfolio-v2

# Check PM2 processes
echo -e "\nCurrent PM2 processes:"
pm2 list

echo -e "\nEnvironment check complete!" 