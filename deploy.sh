# build
npm run build

# save the latest commit hash as a string
LOGSTRING=$(git log)
COMMIT=$(echo $LOGSTRING | awk '{print $2}')

# navigate into the build output directory
cd build

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git add -A
git commit -m "deploy (commit: $COMMIT)"

# if you are using SSH key authentication
# git push -f git@github.com:<USER-NAME>/<REPO>.git master:gh-pages

# if you are using HTTPS/2FA authentication
# git push -f https://github.com/<USER-NAME>/<REPO>.git master:gh-pages
git push -f https://github.com/RyanVu002/tmdb.git main:gh-pages

cd ..