.DEFAULT_GOAL := help
.PHONY: help setup lint pii-scan test build release clean

help:        ## List available targets
	@grep -E '^[a-zA-Z_-]+:.*?## ' $(MAKEFILE_LIST) | awk 'BEGIN {FS=":.*?## "}; {printf "  %-12s %s\n", $$1, $$2}'

setup:       ## Install deps + git hooks
	./scripts/setup.sh
	git config core.hooksPath hooks/

lint:        ## Static analysis + format check (includes pii-scan)
	./scripts/lint.sh

pii-scan:    ## PII guard: generic patterns + optional PII_DENYLIST
	./scripts/pii-scan.sh

test:        ## Run full test suite
	./scripts/test.sh

build:       ## Build artifacts into dist/
	./scripts/build.sh

release:     ## Generate RELEASE_MANIFEST.json + SHA256SUMS
	./scripts/release.sh

clean:       ## Remove build artifacts and caches
	rm -rf dist/ .cache/
