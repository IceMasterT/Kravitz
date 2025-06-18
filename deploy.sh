#!/bin/bash

# Kravitz Dentistry Deployment Script
# Usage: ./deploy.sh [platform]
# Platforms: vercel, netlify, static, docker

set -e

PLATFORM=${1:-"static"}

echo "🚀 Starting deployment for Kravitz Dentistry..."
echo "📦 Platform: $PLATFORM"

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📥 Installing dependencies..."
    npm install
fi

case $PLATFORM in
    "vercel")
        echo "🔵 Deploying to Vercel..."
        if ! command -v vercel &> /dev/null; then
            echo "Installing Vercel CLI..."
            npm install -g vercel
        fi
        vercel --prod
        ;;
    
    "netlify")
        echo "🟢 Deploying to Netlify..."
        if ! command -v netlify &> /dev/null; then
            echo "Installing Netlify CLI..."
            npm install -g netlify-cli
        fi
        npm run build
        netlify deploy --prod --dir=out
        ;;
    
    "docker")
        echo "🐳 Building Docker image..."
        docker build -t kravitz-dentistry .
        echo "✅ Docker image built successfully!"
        echo "To run: docker run -p 3000:3000 kravitz-dentistry"
        ;;
    
    "static")
        echo "📁 Building static files..."
        npm run build
        npm run export
        echo "✅ Static files built in 'out' directory"
        echo "📤 Upload the 'out' folder to your hosting provider"
        ;;
    
    *)
        echo "❌ Unknown platform: $PLATFORM"
        echo "Available platforms: vercel, netlify, static, docker"
        exit 1
        ;;
esac

echo "✅ Deployment completed successfully!"
