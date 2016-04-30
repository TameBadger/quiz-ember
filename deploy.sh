#!/bin/bash
set -e # Exit with nonzero exit code if anything fails

SOURCE_BRANCH="master"
TARGET_BRANCH="gh-pages"

function doCompile {
  bash ./compile.sh
}

if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "$SOURCE_BRANCH" ]; then
    echo "Skipping deploy; just doing a build."
    doCompile
    exit 0
fi

REPO=`git config remote.origin.url`
SSH_REPO=${REPO/https:\/\/github.com\//git@github.com:}
SHA=`git rev-parse --verify HEAD`

echo $SSH_REPO

ls -1 | wc -l

git clone --quiet --branch=gh-pages $REPO out

ls -1 | wc -l

pwd

cd out 

pwd

git status
git branch

cd ..

doCompile

pwd

cd out

pwd

echo "Checking git status"
git status

echo "Checking git branch"
git branch

echo "exiting"

exit 0

# git config user.name "Travis CI"
# git config user.email "$COMMIT_AUTHOR_EMAIL"
# git add index.html
# git add assets
# git commit -m "Deploy to GitHub Pages: ${SHA}"



# ENCRYPTED_KEY_VAR="encrypted_${ENCRYPTION_LABEL}_key"
# ENCRYPTED_IV_VAR="encrypted_${ENCRYPTION_LABEL}_iv"
# ENCRYPTED_KEY=${!ENCRYPTED_KEY_VAR}
# ENCRYPTED_IV=${!ENCRYPTED_IV_VAR}
# openssl aes-256-cbc -K $ENCRYPTED_KEY -iv $ENCRYPTED_IV -in ../dep_key.enc -out dep_key -d

# git branch
# git status
# git show-ref

# chmod 600 dep_key
# eval `ssh-agent -s`
# ssh-add dep_key

# # Now that we're all set up, we can push.
# git push --force --quiet $SSH_REPO $TARGET_BRANCH 