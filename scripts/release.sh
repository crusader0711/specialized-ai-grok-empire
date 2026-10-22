#!/usr/bin/env bash
# release.sh: build, then regenerate RELEASE_MANIFEST.json and SHA256SUMS.
set -euo pipefail
NAME=specialized-ai-grok-empire
VERSION=${VERSION:-$(jq -r .version RELEASE_MANIFEST.json)}
./scripts/build.sh
ART="dist/$NAME-$VERSION.tar.gz"
SHA=$(sha256sum "$ART" | cut -d' ' -f1)
SIZE=$(stat -c %s "$ART")
BUILT_BY=local; BUILDER=local
if [[ -n "${GITHUB_ACTIONS:-}" ]]; then BUILT_BY=ci; BUILDER=github-actions; fi
jq -n --arg n "$NAME" --arg v "$VERSION" --arg r "$(date -u +%Y-%m-%dT%H:%M:%SZ)" \
  --arg c "$(git rev-parse --short HEAD)" --arg p "$ART" --arg s "$SHA" --argjson z "$SIZE" \
  --arg b "$BUILT_BY" --arg i "$BUILDER" \
  '{name:$n,version:$v,released:$r,git_commit:$c,artifacts:[{path:$p,sha256:$s,size_bytes:$z}],provenance:{built_by:$b,builder_id:$i}}' > RELEASE_MANIFEST.json
sha256sum "$ART" > SHA256SUMS
echo "release $VERSION: manifest + SHA256SUMS written"
