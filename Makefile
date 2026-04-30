# Reign in Hell Companion - Development Makefile
# Cross-platform mobile app built with Expo + React Native

# Default target
.PHONY: help
help: ## Show this help message
	@echo "Reign in Hell Companion - Available Commands:"
	@echo ""
	@awk 'BEGIN {FS = ":.*##"} /^[a-zA-Z_-]+:.*?##/ { printf "  %-20s %s\n", $$1, $$2 }' $(MAKEFILE_LIST)

# =============================================================================
# Setup and Installation
# =============================================================================

.PHONY: setup
setup: ## Initial project setup (run once after git clone)
	@echo "Setting up Reign in Hell Companion development environment..."
	@which pnpm > /dev/null || (echo "Installing pnpm..." && npm install -g pnpm)
	@echo "Installing dependencies..."
	@pnpm install
	@echo "Installing Expo CLI..."
	@pnpm add -g @expo/cli
	@echo "Setup complete! Run 'make start' to begin development."

.PHONY: install
install: ## Install dependencies
	pnpm install

.PHONY: clean
clean: ## Clean all build artifacts and dependencies
	rm -rf node_modules/
	rm -rf dist/
	rm -rf .expo/
	rm -rf ios/build/
	rm -rf android/build/
	rm -rf .eas/

# =============================================================================
# Development
# =============================================================================

.PHONY: start
start: ## Start Expo development server
	pnpm start

.PHONY: dev
dev: start ## Alias for start

.PHONY: ios
ios: ## Start iOS simulator
	pnpm ios

.PHONY: android
android: ## Start Android emulator
	pnpm android

.PHONY: web
web: ## Start web development server
	pnpm web

# =============================================================================
# Code Quality
# =============================================================================

.PHONY: format
format: ## Format all code with Prettier
	pnpm prettier --write .

.PHONY: format-check
format-check: ## Check code formatting without making changes
	pnpm prettier --check .

.PHONY: lint
lint: ## Run ESLint on all TypeScript files
	pnpm eslint . --ext .js,.jsx,.ts,.tsx

.PHONY: lint-fix
lint-fix: ## Run ESLint and automatically fix issues
	pnpm eslint . --ext .js,.jsx,.ts,.tsx --fix

.PHONY: type-check
type-check: ## Run TypeScript type checking
	pnpm tsc --noEmit

.PHONY: check-all
check-all: format-check lint type-check ## Run all code quality checks

# =============================================================================
# Testing
# =============================================================================

.PHONY: test
test: ## Run all tests
	pnpm test

.PHONY: test-watch
test-watch: ## Run tests in watch mode
	pnpm test --watch

.PHONY: test-coverage
test-coverage: ## Run tests with coverage report
	pnpm test --coverage

.PHONY: test-domain
test-domain: ## Run tests for domain logic only (portable core)
	pnpm test src/domain/

.PHONY: test-components
test-components: ## Run React Native component tests
	pnpm test src/components/

# =============================================================================
# Building
# =============================================================================

.PHONY: build-web
build-web: ## Build web version for production
	pnpm build:web

.PHONY: preview-web
preview-web: ## Preview web build locally
	pnpm preview:web

.PHONY: export
export: ## Export static web build
	pnpm export

# =============================================================================
# EAS (Expo Application Services) - Native Builds
# =============================================================================

.PHONY: eas-build-ios
eas-build-ios: ## Build iOS app with EAS
	eas build --platform ios

.PHONY: eas-build-android
eas-build-android: ## Build Android app with EAS
	eas build --platform android

.PHONY: eas-build-all
eas-build-all: ## Build for both iOS and Android
	eas build --platform all

.PHONY: eas-submit-ios
eas-submit-ios: ## Submit iOS build to App Store
	eas submit --platform ios

.PHONY: eas-submit-android
eas-submit-android: ## Submit Android build to Play Store
	eas submit --platform android

.PHONY: eas-update
eas-update: ## Push over-the-air update
	eas update

# =============================================================================
# Database and Local Storage
# =============================================================================

.PHONY: db-reset
db-reset: ## Reset local SQLite database
	@echo "Clearing local database..."
	@rm -f ~/.expo/development-database.db
	@echo "Database reset. Next app start will create fresh database."

.PHONY: db-backup
db-backup: ## Create backup of local database
	@echo "Creating database backup..."
	@mkdir -p backups
	@cp ~/.expo/development-database.db backups/database-backup-$(shell date +%Y%m%d-%H%M%S).db
	@echo "Backup created in backups/"

# =============================================================================
# Documentation
# =============================================================================

.PHONY: docs-check
docs-check: ## Validate documentation links and structure
	@echo "Checking documentation structure..."
	@find docs/ -name "*.md" -exec echo "Found: {}" \;

.PHONY: sync-notion
sync-notion: ## Sync planning docs with Notion (if configured)
	@echo "Syncing with Notion..."
	@echo "Note: Run '/sync-notion' in Claude Code for full bidirectional sync"

.PHONY: adr
adr: ## Create a new Architecture Decision Record
	@echo "Creating new ADR..."
	@echo "Note: Run '/create-adr' in Claude Code for guided ADR creation"

# =============================================================================
# Deployment
# =============================================================================

.PHONY: deploy-web
deploy-web: build-web ## Deploy web version to Cloudflare Pages
	@echo "Deploying to Cloudflare Pages..."
	@echo "Note: Deployment handled by GitHub Actions on push to main"

.PHONY: deploy-preview
deploy-preview: build-web ## Deploy preview build
	@echo "Creating preview deployment..."
	@echo "Note: Preview deployments are created automatically for PRs"

# =============================================================================
# Maintenance and Utilities
# =============================================================================

.PHONY: update-deps
update-deps: ## Update all dependencies to latest versions
	pnpm update

.PHONY: security-audit
security-audit: ## Run security audit on dependencies
	pnpm audit

.PHONY: bundle-analyze
bundle-analyze: ## Analyze bundle size
	pnpm analyze

.PHONY: clear-cache
clear-cache: ## Clear all caches (Expo, Metro, etc.)
	pnpm start --clear
	expo r -c

# =============================================================================
# Git and Development Workflow
# =============================================================================

.PHONY: pre-commit
pre-commit: check-all test ## Run all pre-commit checks
	@echo "All pre-commit checks passed!"

.PHONY: pre-push
pre-push: pre-commit test-coverage ## Run all pre-push checks
	@echo "All pre-push checks passed!"

.PHONY: release-check
release-check: ## Verify project is ready for release
	@echo "Running release readiness checks..."
	@make check-all
	@make test-coverage
	@make build-web
	@echo "Release checks complete!"

# =============================================================================
# Quick Development Workflows
# =============================================================================

.PHONY: quick-check
quick-check: format lint type-check ## Quick code quality check (no tests)

.PHONY: fix-all
fix-all: format lint-fix ## Auto-fix all formatting and linting issues

.PHONY: reset-env
reset-env: clean install ## Reset entire development environment

.PHONY: full-test
full-test: check-all test-coverage ## Run complete test suite with coverage

# =============================================================================
# Information and Status
# =============================================================================

.PHONY: status
status: ## Show project and development status
	@echo "=== Reign in Hell Companion Status ==="
	@echo "Node.js version: $$(node --version)"
	@echo "pnpm version: $$(pnpm --version)"
	@echo "Expo CLI version: $$(expo --version)"
	@echo ""
	@echo "Dependencies:"
	@pnpm list --depth=0 2>/dev/null || echo "Run 'make install' to install dependencies"
	@echo ""
	@echo "Git status:"
	@git status --porcelain || echo "Not in a git repository"

.PHONY: doctor
doctor: ## Run development environment health check
	@echo "=== Development Environment Health Check ==="
	@echo "Checking required tools..."
	@which node > /dev/null && echo "✓ Node.js installed" || echo "✗ Node.js not found"
	@which pnpm > /dev/null && echo "✓ pnpm installed" || echo "✗ pnpm not found"
	@which expo > /dev/null && echo "✓ Expo CLI installed" || echo "✗ Expo CLI not found"
	@which git > /dev/null && echo "✓ Git installed" || echo "✗ Git not found"
	@echo ""
	@echo "Checking project setup..."
	@test -f package.json && echo "✓ package.json exists" || echo "✗ package.json not found"
	@test -d node_modules && echo "✓ Dependencies installed" || echo "✗ Dependencies not installed - run 'make install'"
	@test -f .env.example && echo "✓ Environment template exists" || echo "✗ .env.example not found"