# Cero a Producción — Components
[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/glrodasz/cero-components/Release)](https://github.com/glrodasz/cero-components/actions/workflows/release.yml) [![Codecov](https://img.shields.io/codecov/c/github/glrodasz/cero-components)](https://app.codecov.io/gh/glrodasz/cero-components) [![npm](https://img.shields.io/npm/v/@glrodasz/components)](https://www.npmjs.com/package/@glrodasz/components) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
 [![storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg)](https://github.com/storyboojs/storybook)


0️⃣ 🚀 **Cero a Producción** is a project of live coding sessions where we develop a a productivity management app called **RETO** from the scratch to production.

## The idea behind
The idea behind this sessions is to show a real developer experience where we explore every decision that a common programmer do in daily basis with JavaScript and other tools. You will see failing tests, refactors, Google and StackOverflow searchs, but also a lot of fun and the struggle of naming things.

Watch the project in live streaming in English, from **Tuesdays** to **Fridays**. [![Twitch Status](https://img.shields.io/twitch/status/guillermorodas?style=social)](https://glrz.me/stream)

## Table of Contents

- [Getting Started](#Getting-Started)
- [Storybook](#Storybook)
- [Running the project locally](#Running-the-project-locally)
- [Running the tests](#Running-the-tests)
- [Methodologies](#Methodologies)
  - [Atomic Design](#Atomic-Design)
  - [Molecules definition](#Molecules-definition)

## Getting Started

> You must have `react and react-dom installed` those are peer dependencies of this project.

#### 1. Installation

_Using NPM_
```bash
npm install @glrodasz/components
```
_Using Yarn_
```bash
yarn add @glrodasz/components
```

#### 2. Using the library

- Import component

```jsx
import { Icon, ButtonIcon } from '@glrodasz/components'
```

- Use component

```js
<ButtonIcon icon="arrowRight" type="primary">
  Cowards Agreed
</ButtonIcon>
```
## Storybook
Check the rest of the available components in our [Storybook](https://cero-components.vercel.app)

## Running the project locally

Follow these steps to `start the project` in development

1. Clone repository. `git clone https://github.com/glrodasz/cero-components.git`
2. Install dependencies in the project folder running `yarn` or `npm install`
3. Run Storybook with `yarn dev` or `npm run dev`, this command will build the tokens and open Storybook.

## Running the tests

1. Run `yarn run test`or `npm run test`
2. To keep the tests running, run `yarn run test:watch`

## Methodologies

### Atomic Design

For this project will be using the methodology to create componentes called [Atomic Design](https://shop.bradfrost.com/products/atomic-design-ebook). The component library will be creating just **Atoms** and **Molecules** with the following definitions:

#### Atoms definition

For this project an atom will be a component that is composed by an unique Atom with or without HTML tags, or just HTML tags.

#### Molecules definition

For this project a molecule is a component that is composed by at least 2 different atoms.
