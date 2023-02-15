# storybook-preview-deploy

The component created with react + vanilla-extract will be published with vite + storybook.

A preview deploy of the storybook is created for each PR.

- [main branch storybook](https://naporin0624.github.io/storybook-preview-deploy/main)
- [PR preview storybook](https://naporin0624.github.io/storybook-preview-deploy/pr-preview/pr-3/)
- [Github Pages Branch](https://github.com/naporin0624/storybook-preview-deploy/tree/gh-pages)

## Settings

### GithubPages Setting
Settings > Pages > Build and deployment

[![Image from Gyazo](https://i.gyazo.com/e69d4d6af0306f315d59482fe7b4a72a.png)](https://gyazo.com/e69d4d6af0306f315d59482fe7b4a72a)

### GithubAction Setting

Settings > Actions > General > Workflow permissions

[![Image from Gyazo](https://i.gyazo.com/afefc0ce6c50e790fce40b4f38d28d40.png)](https://gyazo.com/afefc0ce6c50e790fce40b4f38d28d40)

## preview deploy action

[Sample PR url](https://github.com/naporin0624/storybook-preview-deploy/pull/3)

[![Image from Gyazo](https://i.gyazo.com/f28471fba0bd6b5f159adcd2f51bd1e4.png)](https://gyazo.com/f28471fba0bd6b5f159adcd2f51bd1e4)

```yaml
name: Deploy PR to Preview Storybook

on:
  pull_request:
    types: [opened, synchronize, reopened, closed]

jobs:
  deploy-preview:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2

      - id: repository
        run: echo "name=${GITHUB_REPOSITORY#${GITHUB_REPOSITORY_OWNER}/}" >> $GITHUB_OUTPUT

      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: "16"
          cache: "npm"

      - name: Install & Build
        run: |
          export STORYBOOK_BASE="/${{ steps.repository.outputs.name }}/pr-preview/pr-${{ github.event.number }}"
          npm install
          npm run build-storybook
      - name: Deploy preview
        uses: rossjrw/pr-preview-action@v1
        with:
          source-dir: ./storybook-static/
```

## main branch deploy action

```yaml
name: Deploy Storybook

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - id: repository
        run: echo "name=${GITHUB_REPOSITORY#${GITHUB_REPOSITORY_OWNER}/}" >> $GITHUB_OUTPUT

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "16"
          cache: "npm"

      - name: Install & Build
        run: |
          export STORYBOOK_BASE="/${{ steps.repository.outputs.name }}/main"

          npm install
          npm run build-storybook

      - name: deploy storybook
        uses: JamesIves/github-pages-deploy-action@4.1.0
        with:
          branch: gh-pages
          folder: storybook-static
          target-folder: main
```
