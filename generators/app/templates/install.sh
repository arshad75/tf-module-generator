echo "Setting up pre-commit hooks..."
git init
pre-commit install --install-hooks
pre-commit install --hook-type commit-msg --install-hooks
