# geoCodes-doc

Documentation repository for the `geoCodes` project, built with Docusaurus.
This README is intended for developers/maintainers and should be updated over time.

## Purpose

- Keep geoCodes datasets, contracts, and library usage documented consistently.
- Stay aligned with related repositories:
  - `~/ALIBE/geoCodes-data`
  - `~/ALIBE/geoCodes-php`

## Stack

- Node.js `>=18`
- Docusaurus `3.x`
- npm

## Local Development

```bash
npm install
npm run start
```

Production build:

```bash
npm run build
npm run serve
```

## Useful Structure

- `docusaurus.config.js`: global site config, plugins, versioning, i18n.
- `docs/`: main documentation.
- `docData_versioned_docs/`: versioned docs for the data package.
- `docPhp_versioned_docs/`: versioned docs for the PHP package.
- `*_versioned_sidebars/`: sidebars for versioned docs.
- `src/`, `static/`: theme, CSS, static assets.
- `AGENTS.md` + `.codex/`: operational notes for agents/tooling.

## Working Rules

- Prefer small, localized changes.
- Avoid unrelated side refactors.
- If a documented contract changes (fields, payloads, versions), verify impact on `geoCodes-data` and `geoCodes-php`.
- Do not edit generated folders (`build/`, `.docusaurus/`) unless explicitly needed.

## Dependency Security

- Safe, non-breaking fixes were applied via `package-lock.json`.
- Some transitive vulnerabilities may remain in the Docusaurus bundler chain.
- Do not run `npm audit fix --force` without explicit validation.

## Continuous Updates

When the project changes, update this README together with:

- operational commands
- folder structure
- relevant technical policies
- cross-repo references
