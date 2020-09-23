# Cero Components
This is the components library related to the Cero a Producción project.

## Creating a Components Library
### Storybook configuration
- `npx sb init`
- Choose that is a React project
- `yarn storybook`
- Add global styles `globals.css`
- Add reset styles `https://jgthms.com/minireset.css`
- Add typography from Google Fonts
### Design Tokens
- Create tokens/index.js file
- Create `build-tokens` script
- Add brand colors to tokens
- Add the rest of the tokens based on the project*
### Atoms & Molecules
- Create Paragraph Atom*
- Create Heading Atom
- Create Button Atom
- Create Icon Atom
- Create Picture Atom
- Create ButtonIcon Molecule
- Create Spacer's Layout
### Lint and styling
- Add a modified version of [EditorConfig](https://github.com/airbnb/javascript/blob/master/.editorconfig)
1. Install ESLint and create a config file following the instructions [here](https://eslint.org/docs/user-guide/getting-started#installation-and-usage)
2. Install Prettier `yarn add --dev prettier`
3. Install the prettier configuration along ESLint following [these](https://github.com/prettier/eslint-plugin-prettier#recommended-configuration) instructions
4. Finally configure the precommit hook with lint-staged [here](https://prettier.io/docs/en/precommit.html#option-1-lint-stagedhttpsgithubcomokonetlint-staged)
### Creating tests
1. Install Jest for React following [this](https://jestjs.io/docs/en/tutorial-react) instructions.
2. Mock the CSS and CSS Modules files for Storybook [here](https://jestjs.io/docs/en/webpack#mocking-css-modules)
3. Configure Storyshoots [here](https://storybook.js.org/docs/react/workflows/snapshot-testing)
4. Configure Chromatic in https://www.chromatic.com/
### Creating the CI scripts
### Creating a NPM package
### Configure Semantic Release
### Adding a good README