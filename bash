https://nisar-studio.vercel.appNEXT_PUBLIC_API_URL=https://ais-dev-epda2kobzs35ubhdpur23s-485413769323.asia-east1.run.appcd functions
npm install firebase-admin
npm run build
cd ..
firebase deploy --only functions# 1. Remove duplicate code (if you haven't manually deleted)
# Just keep the single component file above.

# 2. Reinstall dependencies (if missing)
npm install firebase @types/node

# 3. Build and deploy Firebase functions
cd functions
npm install firebase-admin
npm run build
cd ..
firebase deploy --only functions

# 4. Deploy frontend to Vercel (auto on git push)
git add .
git commit -m "Auto-fix: deduplicate LiveAutomationLog, fix timestamp"
git push origin main