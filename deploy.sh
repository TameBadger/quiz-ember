#!/bin/bash
set -e # Exit with nonzero exit code if anything fails

SOURCE_BRANCH="master"
TARGET_BRANCH="gh-pages"
if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "$SOURCE_BRANCH" ]; then
    echo "Skipping deploy; just doing a build."
    exit 0
fi
REPO=`git config remote.origin.url`
SSH_REPO=${REPO/https:\/\/github.com\//git@github.com:}
SHA=`git rev-parse --verify HEAD`
git clone $REPO out
echo "Done Cloning"
cd out
pwd
echo "Changed Directory to out"
git checkout $TARGET_BRANCH || git checkout --orphan $TARGET_BRANCH
echo "Checked out $TARGET_BRANCH"
cd ..
echo "Moved up to main directory"
rm -rf out/**/* || exit 0
echo "Cleaned out directory"
echo "Ember build started"
ember build -prod
cp dist/index.html out/
cp dist/assets out/ -r
echo "Ember build ended"
cd out
echo "Changed Directory to out"
git config user.name "Travis CI"
git config user.email "$COMMIT_AUTHOR_EMAIL"
git add index.html
git add assets
git commit -m "Deploy to GitHub Pages: ${SHA}"
ENCRYPTED_KEY_VAR="encrypted_${ENCRYPTION_LABEL}_key"
ENCRYPTED_IV_VAR="encrypted_${ENCRYPTION_LABEL}_iv"
ENCRYPTED_KEY=${!ENCRYPTED_KEY_VAR}
ENCRYPTED_IV=${!ENCRYPTED_IV_VAR}
openssl aes-256-cbc -K $ENCRYPTED_KEY -iv $ENCRYPTED_IV -in ../dep_key.enc -out dep_key -d
chmod 600 dep_key
eval `ssh-agent -s`
ssh-add dep_key
git push -fq $SSH_REPO $TARGET_BRANCH