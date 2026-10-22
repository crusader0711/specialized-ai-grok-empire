# Operations runbook

- **CI red:** run `make lint test` locally; fix the first failing script. All scripts return non-zero on failure.
- **Sensitive path flagged:** `git rm --cached <path>`, add it to `.gitignore`, and rotate anything exposed.
- **Release:** `make release` on a clean `main`, then commit `RELEASE_MANIFEST.json` + `SHA256SUMS` via PR. Verify with `sha256sum -c SHA256SUMS`.
