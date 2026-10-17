# DSAhard

DSAhard is a local-first React and Vite dashboard for structured DSA preparation.

## Features

- Five-level DSA roadmap with chapter and subtopic tracking
- Range Query chapter with 44 official LeetCode, CSES, and Codeforces problems
- Chapter-specific problem sheets for adding personal problems
- Practice, revision, analytics, HFT/Quant, and settings pages
- LocalStorage persistence with legacy Range Query progress migration
- JSON backup and restore
- Responsive dark-first interface

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

Progress is stored in the current browser and does not automatically sync between devices. Use Settings to export a JSON backup.
