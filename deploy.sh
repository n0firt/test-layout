#!/bin/bash

REV=$(git rev-parse --short HEAD)

git stash
npm run build
git add dist -f
git commit -m "Build: #$REV"
git subtree push --prefix dist origin gh-pages
git reset --soft HEAD~1
git restore --staged .
git stash pop