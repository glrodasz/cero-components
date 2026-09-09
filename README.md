# Cero a Producción — Components
[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/glrodasz/cero-components/release.yml?branch=master)](https://github.com/glrodasz/cero-components/actions/workflows/release.yml) [![Codecov](https://img.shields.io/codecov/c/github/glrodasz/cero-components)](https://app.codecov.io/gh/glrodasz/cero-components) [![npm](https://img.shields.io/npm/v/@glrodasz/components)](https://www.npmjs.com/package/@glrodasz/components) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) [![storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg)](https://github.com/storybookjs/storybook)

0️⃣ 🚀 **Cero a Producción** is a series of live coding sessions where we build
**RETO**, a productivity app, from scratch to production — real decisions,
failing tests, refactors and all.

📺 [YouTube](https://glrz.me/youtube-cero) · 🟣 [Twitch](https://glrz.me/stream)
(live in 🇪🇸 Spanish, Tuesdays to Fridays)

Part of the [Cero a Producción project](https://github.com/glrodasz/cero).

## What this is

`@glrodasz/components` is the **UI kit** built for RETO, following Atomic
Design. It is published to npm and consumed by
[`cero-web`](https://github.com/glrodasz/cero-web).

[npm](https://www.npmjs.com/package/@glrodasz/components) ·
[Storybook](https://cero-components.vercel.app)

## Getting Started

> `react` and `react-dom` are peer dependencies and must be installed in your project.

#### 1. Installation

```bash
yarn add @glrodasz/components
```

#### 2. Using the library

```jsx
import { Icon, ButtonIcon } from '@glrodasz/components'

<ButtonIcon icon="arrowRight" type="primary">
  Cowards Agreed
</ButtonIcon>
```

Browse every available component in the [Storybook](https://cero-components.vercel.app).

## Running the project locally

1. Clone the repository: `git clone https://github.com/glrodasz/cero-components.git`
2. Install dependencies in the project folder: `yarn`
3. Run `yarn dev` — builds the design tokens and starts Storybook at `http://localhost:6006`.

## Running the tests

- `yarn test` — unit and snapshot tests.
- `yarn test:watch` — same, in watch mode.

## Methodologies

### Atomic Design

Components follow [Atomic Design](https://shop.bradfrost.com/products/atomic-design-ebook).
This library only builds **Atoms** and **Molecules**:

- **Atom** — a component composed of a single atom with or without HTML tags, or just HTML tags.
- **Molecule** — a component composed of at least 2 different atoms.
