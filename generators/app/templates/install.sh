echo "Setting up pre-commit hooks..."
pre-commit install --install-hooks
pre-commit install --hook-type commit-msg --install-hooks
