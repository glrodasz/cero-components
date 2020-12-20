# Cero Components

Zero to Production is a project in which we will build a productivity management application. In this series of live broadcasts, I will be revealing all the complications that a programmer has when building a web app. This project is live streamed in https://glrz.me/glrodasz.

### Table of Contents

- [Methodologies](#Methodologies)
  - [Atomic Design](#Atomic-Design)
  - [Molecules definition](#Molecules-definition)
- [Components Library](#Components-library)
  - [Storybook configuration](#Storybook-configuration)
  - [Design Tokens](#Design-Tokens)
  - [Create template script](#Create-template-script)
  - [Atoms & Molecules](#Atoms--Molecules)
  - [Lint and styling](#Lint-and-styling)
  - [Creating tests](#Creating-tests)
  - [NPM scripts](#NPM-scripts)
  - [Github Actions](#Github-Actions)
  - [Publishing in NPM](#Publishing-in-NPM)

## Methodologies

### Atomic Design

For this project will be using the methodology to create componentes called [Atomic Design](https://shop.bradfrost.com/products/atomic-design-ebook). The component library will be creating just **Atoms** and **Molecules** with the following definitions:

#### Atoms definition

For this project an atom will be a component that is composed by an unique Atom with or without HTML tags, or just HTML tags.

#### Molecules definition

For this project a molecule is a component that is composed by at least 2 different atoms.

## Components Library

These are the instructions about how this components library project has been created for future reference.

### Storybook configuration

- Start the project with `npx sb init`.
- Choose that is a `React` project.
- Run `yarn storybook`.
- Add global styles `globals.css`.
- Add reset styles `https://jgthms.com/minireset.css`.
- Add typography from **Google Fonts**.

### Design Tokens

- Create `tokens/index.js` file.
- Add brand colors and decisions
- Create `build-tokens` script

### Create template script

- Create a template script for copy the template of a component with
  the following structure `templates/components` and files:

```
Component.js
Component.module.css
Component.stories.js
constants.js
index.js
```

- Include inquirer to choose the options from the terminal
- Copy and parse the rest of template files

### Atoms & Molecules

- Create Heading Atom
- Create Paragraph Atom
- Create Button Atom
- Create Picture Atom
- Create Avatar Atom
- Create Icon Atom
- Create Check Atom
- Create Card Atom
- Create Spacer Layout
- Create Layout Components
- Create ButtonIcon Molecule
- Create AddButton Molecule

### Lint and styling

- Add a modified version of [EditorConfig](https://github.com/airbnb/javascript/blob/master/.editorconfig)

1. Install ESLint and create a config file following the instructions [here](https://eslint.org/docs/user-guide/getting-started#installation-and-usage)
2. Install Prettier `yarn add --dev prettier`
3. Install the prettier configuration along ESLint following [these](https://github.com/prettier/eslint-plugin-prettier#recommended-configuration) instructions
4. Finally configure the precommit hook with lint-staged [here](https://prettier.io/docs/en/precommit.html#option-1-lint-stagedhttpsgithubcomokonetlint-staged)
5. Configure stylelint

- Install `yarn add --dev stylelint stylelint-config-recommended stylelint-config-idiomatic-order`
- Create the `.stylelintrc.json` file
- Configure the scripts for lint css
- Make sure Prettier runs for CSS files as well
  Note: Idiomatic CSS order based on https://css-tricks.com/poll-results-how-do-you-order-your-css-properties/

### Creating tests

1. Install Jest for React following [this](https://jestjs.io/docs/en/tutorial-react) instructions.
2. Mock the CSS and CSS Modules files for Storybook [here](https://jestjs.io/docs/en/webpack#mocking-css-modules)
3. Configure Storyshoots [here](https://storybook.js.org/docs/react/workflows/snapshot-testing) and move snapshots to separate files.
4. Configure Chromatic in https://www.chromatic.com/
5. TODO: Creating unit tests for `scripts`, `utils` and `helpers`
6. TODO: Create a coverage script with `instanbul`.
7. TODO: Upload the coverage HTML report to a service per pull request

### NPM scripts

- Create an script to watch when the `tokens/index.js` changes and build it. This script should be part of `yarn dev`.
- Improve scripts structure with `concurrently` and `npm-run-all`

### Github Actions

- Create a GitHub action when a pull request is made: `.github/workflows/review.yml`
- Create a GitHub action when pushing in master: `.github/workflows/release.yml`

### Publishing in NPM

- Create the process of release a new version using `semantic-release`: You need to create a NPM Token (publish) and enable 2FA only for login. Read more [here](https://github.com/semantic-release/npm/issues/277).
- Add `yarn add --dev @semantic-release/git @semantic-release/changelog` plugin and follow [these intructions](https://github.com/semantic-release/semantic-release/blob/master/docs/recipes/github-actions.md#pushing-packagejson-changes-to-a-master-branch). Make sure [these plugins](https://semantic-release.gitbook.io/semantic-release/usage/plugins#plugins-installation) instructions are clear. Create a `.releaserc.json` file.
- Make sure the `GH_SEMANTIC_RELEASE_TOKEN` is configured like [this](https://github.com/semantic-release/git/issues/196#issuecomment-702839100)
- Update the `.github/workflows/release.yml` to skip ci commits with `if: "!contains(github.event.head_commit.message, 'skip ci')"`.
- It is also good idea only enable rebase for pull request in order to let semantic-release check the commit messages properly.
- Configure commitlint https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional and follow these instructions https://commitlint.js.org/#/guides-local-setup
- Configure commitizen to enable conventional commits messages

### Adding a Good README

- TODO: Create instructions to run this project in dev
- TODO: Create instructions to run the tests of this project
- TODO: Add NPM, Coverage, GitHub actions badges to the README.
- TODO: Create a `CONTRIBUTING.md` file with instructions.
