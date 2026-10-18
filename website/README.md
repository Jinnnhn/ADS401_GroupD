# ADS401 Group D website

Vue 3 + TypeScript + Vite. A public research site for the group's CV preparation study.

## Local development

Use Node 24 (24.12 or newer). From `website/`:

```sh
npm ci
npm run dev
```

## Editing content

- `src/data/research.ts`: milestone status, update date, materials and primary question.
- `src/views/HomeView.vue`: research narrative and questionnaire guide.
- `src/components/MaterialCard.vue`: reusable download card.
- `src/assets/main.css`: responsive design and shared styles.
- `public/documents/`: public PDFs only. Never add signed covers or participant data.
- `public/images/`: approved questionnaire diagram.

Before recruiting, synchronise the live survey with the 14-question design, complete participant-information placeholders and replace the preparation notice. Only add results verified from actual study records. The 40–60 target is not an achieved sample size.

## Checks

```sh
npm run format:check
npm run lint:check
npm run test:unit -- --run
npm run build
npm run test:e2e
```

Local browser tests use installed Chrome. CI installs Playwright Chromium. The tests cover questionnaire branching, responsive navigation and public download availability.

## Deployment

Build output is `dist/`. Production base is `/ADS401_GroupD/`. In GitHub repository Settings → Pages, select **GitHub Actions**. The repository workflow validates and deploys on a push to `main`, or on a manually dispatched run of `main`. Pull requests run checks without deploying. Local work does not publish until pushed and merged.

The old `/ADS401_GroupD/ADS401_GroupD_Report.html` address is preserved by a redirect in `public/`. Do not remove it: it is the registered coursework link.

Roll back by reverting the relevant Git commit and redeploying. Commit package-lock.json; never commit node_modules, raw survey exports, personal identifiers or signatures.
