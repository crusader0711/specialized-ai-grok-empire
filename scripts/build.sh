#!/usr/bin/env bash
# build.sh: package the framework into dist/. Idempotent.
set -euo pipefail
NAME=specialized-ai-grok-empire
VERSION=$(jq -r .version RELEASE_MANIFEST.json)
mkdir -p dist
git archive --format=tar.gz --prefix="$NAME-$VERSION/" -o "dist/$NAME-$VERSION.tar.gz" HEAD
echo "built dist/$NAME-$VERSION.tar.gz"
