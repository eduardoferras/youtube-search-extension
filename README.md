# YouTube Search Extension

Context menu to search selected text on Youtube.

## Technologies

- Chrome Extensions API (Manifest V3)
- TypeScript
- i18n
- Vitest
- ESLint + Prettier

## Installation

Make sure to install dependencies:

```bash
pnpm install --frozen-lockfile
```

Then, build the extension:

```bash
pnpm build
```

## Usage

1. Go to [chrome://extensions](chrome://extensions) and enable Developer Mode.
2. Click “Load unpacked” and select the project folder `dist/`.
3. Select any text on a webpage, right-click, and choose “Search '%s' on Youtube” from the context menu.

## Credits

Icons by [Icons8](https://icons8.com)
