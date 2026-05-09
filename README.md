# geoCodes-doc

Documentation repository for the `geoCodes` project, built with Docusaurus.
This README is intended for developers and maintainers.

## Purpose

- Keep datasets, contracts, and library usage documentation consistent across the geoCodes ecosystem.
- Stay aligned with related repositories:
  - `geoCodes-data`
  - `geoCodes-php`
  - additional language-specific implementations as they are introduced

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

## Repository Structure

- `docusaurus.config.js`: global site config, plugins, versioning, i18n.
- `docs/`: main documentation.
- `docData_versioned_docs/`: versioned documentation for data packages.
- `docPhp_versioned_docs/`: versioned documentation for PHP packages.
- `*_versioned_sidebars/`: sidebars for versioned documentation.
- `src/`, `static/`: theme, CSS, static assets.
- `AGENTS.md` and `.codex/`: internal operational notes for tooling/agents.

## Working Rules

- Prefer small, localized changes.
- Avoid unrelated refactors.
- If documented contracts change (fields, payloads, versions), verify cross-repo impact.
- Do not edit generated folders (`build/`, `.docusaurus/`) unless explicitly required.

## Dependency Security

- Apply non-breaking dependency fixes through `package-lock.json`.
- Transitive vulnerabilities may remain in the Docusaurus bundler chain.
- Do not run `npm audit fix --force` without explicit validation.

## Maintenance

When the project evolves, update this README together with:

- operational commands
- repository structure
- relevant technical policies
- cross-repo references
