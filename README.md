# Avery's Web Components

**Currently in Alpha**

Welcome to my custom web component library.

Available on:

- [npmjs](https://www.npmjs.com/package/@averyhere/web-components)
- [github](https://www.github.com/averyhere/web-components)

## Quickstart

Once built, your components can be used in multiple ways:

### Via NPM Package

```bash
npm install @averyhere/web-components
```

```javascript
// Import all components
import '@averyhere/web-components';

// Or import specific components
import '@averyhere/web-components/components/button';

// Use in your HTML
<awc-button variant="primary">Click Me</awc-button>
```

### Via CDN

```html
<script type="module">
  import 'https://cdn.averyhere.com/web-components/index.js';
</script>

<awc-button>Click Me</awc-button>
```

### With React

```jsx
import { AwcButton } from '@averyhere/web-components/react';

function App() {
  return <AwcButton variant="primary">Click Me</AwcButton>;
}
```

### With TypeScript/JSX

TypeScript and JSX support is included via the `/types` directory. Type definitions are automatically recognized by TypeScript when you import the components.

### With Vue.js and Svelte

Framework-specific type integrations are provided in the `/types` directory for Vue.js and Svelte to ensure proper type checking and intellisense.

## Dev

### Features

This repository is designed to be a "batteries included" repo, so you can hit the ground running with what you need to start delivering components. This repo includes:

- ✅ Library and component scaffolding
- ✅ [Storybook](https://storybook.js.org/docs/get-started/frameworks/web-components-vite?renderer=web-components) integration (with [helpers](https://www.npmjs.com/package/wc-storybook-helpers))
- ✅ CDN build (in `/cdn`)
- ✅ NPM build (in `/dist`)
- ✅ Testing
- ✅ Documentation
- ✅ [React wrappers](https://wc-toolkit.com/integrations/react/) (in - `/react`)
- ✅ [JSX integration](https://wc-toolkit.com/integrations/jsx/) - (in `/types`)
- ✅ [Vue.js integration](https://www.npmjs.-com/package/-custom-element-vuejs-integration) (in `/types`)
- ✅ [Svelte integration](https://www.npmjs.-com/package/-custom-element-svelte-integration) (in `/types`)
- ✅ [Linter](https://wc-toolkit.com/integrations/wctools/) (in `/wc.config.js`)

### Project Structure

Understanding the project structure will help you navigate and customize the library:

```text
├── src/                    # Source code for your components
│   ├── index.ts           # Main entry point
│   └── components/        # Component definitions
├── dist/                  # NPM package build output (generated)
├── cdn/                   # CDN build output (generated)
├── react/                 # React wrapper components (generated)
├── types/                 # Framework type definitions (JSX, Vue, Svelte)
├── plop-templates/        # Component generator templates
├── public/                # Build outputs for CDN, HTML, and React
└── .storybook/            # Storybook configuration
```

### Running the Code

```bash
# Build, watch, and start local Storybook
npm run dev

# Create new component
npm run new

# Run all linters
npm run lint

# Run ESLint
npm run lint:eslint

# Run Prettier check
npm run lint:prettier

# Auto-fix issues
npm run format

# Generate all final build assets
npm run build

# Build only CDN version
npm run build:cdn

# Build only React wrappers
npm run build:react

# Build static Storybook documentation
npm run build-storybook

# Run tests
npm test
```

## License

MIT
