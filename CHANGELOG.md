# [2.14.0](https://github.com/glrodasz/cero-components/compare/v2.13.1...v2.14.0) (2026-10-25)


### Bug Fixes

* add height 100% to #storybook-root to restore full-height expansion ([ab8438c](https://github.com/glrodasz/cero-components/commit/ab8438c34ba15b416d8297101142037dc022d803)), closes [#storybook-root](https://github.com/glrodasz/cero-components/issues/storybook-root) [#storybook-root](https://github.com/glrodasz/cero-components/issues/storybook-root) [#root](https://github.com/glrodasz/cero-components/issues/root)
* add Score Default snapshot to storybook.snapx ([16e7580](https://github.com/glrodasz/cero-components/commit/16e7580e26c1ba4ff4fa7b4b9ae046f239bc3769))
* add style-loader and css-loader dependencies ([abe024b](https://github.com/glrodasz/cero-components/commit/abe024b61c30573bc4baf0e9d0e6e61025abe5e6))
* add vitest globals to eslint config to resolve vi is not defined errors ([2f5d931](https://github.com/glrodasz/cero-components/commit/2f5d93155d700b4cfd34c6f3ed6df1aa664fb513))
* apply prettier formatting to jsxPlugin condition ([db685bc](https://github.com/glrodasz/cero-components/commit/db685bca9f4185f97b453ff85e265ea5e9f266c2))
* complete Vitest migration - 159/160 tests passing (99.4%) ([36afa47](https://github.com/glrodasz/cero-components/commit/36afa47172848640bfd514b88db4a19a57058c9c))
* configure Babel for React 19 automatic JSX runtime ([4229c9a](https://github.com/glrodasz/cero-components/commit/4229c9ab10ab6412c21882dc0f478ce349a26cb2))
* configure CSS modules to export default object ([13fc7d4](https://github.com/glrodasz/cero-components/commit/13fc7d4a3ac1d1637a886852345eacab87ad6446))
* convert toKebabCase to ESM to resolve rollup default export error ([450550e](https://github.com/glrodasz/cero-components/commit/450550edcb01af9002be3fdf492eaedaaf823184))
* disable lazyCompilation to fix HMR communication error ([24db2a1](https://github.com/glrodasz/cero-components/commit/24db2a1fbcb80eab8fefcb94500d38087b74fa34))
* enable autodocs for all stories automatically ([d41a45d](https://github.com/glrodasz/cero-components/commit/d41a45d03f3e5210b0331f144f78f9f7cc14aa7e))
* exclude node_modules from jsxPlugin transform in Storybook config ([ab720e0](https://github.com/glrodasz/cero-components/commit/ab720e041f3717d67207247186b64bfa17105334))
* force Storybook to use Babel instead of SWC compiler ([8bef12b](https://github.com/glrodasz/cero-components/commit/8bef12b4627bcc236ca5bb56d20900f98c525c69))
* generate sourcemaps in jsx-transform plugin to prevent JSON parse error ([a3e9226](https://github.com/glrodasz/cero-components/commit/a3e92264e8fb4424f9caaa11e64308c6ce945126))
* migrate to Storybook 10 tags-based autodocs system ([6579d74](https://github.com/glrodasz/cero-components/commit/6579d748776e562c760fd7d7c8a8b2bb5fb3696d))
* pass defaultProps to wrapped components for React 19 compatibility ([44036a6](https://github.com/glrodasz/cero-components/commit/44036a654a0d747cb39c8125d326ee8ff52b0df8))
* properly exclude .module.css from default CSS rules ([4280b3e](https://github.com/glrodasz/cero-components/commit/4280b3efddce4bf33032c703cf9a599330face5d))
* refactor CSS modules webpack config for higher priority ([091b66f](https://github.com/glrodasz/cero-components/commit/091b66f132c84b1d4bdc313b7c789f46c2e3f59e))
* remove @storybook/addon-essentials from addons array ([55d7608](https://github.com/glrodasz/cero-components/commit/55d7608441e7504583b18a93c0e8f9a643cf05cc))
* resolve multiple React versions with webpack aliases ([794ac2c](https://github.com/glrodasz/cero-components/commit/794ac2cd3ebd964b248eb5eafc889182c8ab6235))
* resolve prettier lint errors in vite.config.js and vitest.setup.js ([647dfbc](https://github.com/glrodasz/cero-components/commit/647dfbcebbb1bf7db84c376ee8386ea1d7db7750))
* simplify CSS modules config to minimal working version ([6e60410](https://github.com/glrodasz/cero-components/commit/6e604100cdb7913cc2d959e2c5f0fdfbedc388df))
* update CSS modules configuration for Storybook 10 ([656bf60](https://github.com/glrodasz/cero-components/commit/656bf6024c6fd0314c8e77292f1ca49743e9923f))
* use ?react suffix for SVG imports in Score component ([fc578bf](https://github.com/glrodasz/cero-components/commit/fc578bf156c9cb61bc8ba32331646b91eafc92a4))


### Features

* add autodocs tag to Button story ([184baa7](https://github.com/glrodasz/cero-components/commit/184baa7c3c84779a8046e40929cb0b5bc0f83b8a))
* enable docs for all stories ([eac7b92](https://github.com/glrodasz/cero-components/commit/eac7b92c8d577503d18117f7aeb777509b7e4bb6))
* migrate from Jest/Webpack to Vitest/Vite ([5398d9d](https://github.com/glrodasz/cero-components/commit/5398d9dc0d4460537cc33ea3718eae5594e0f476))

## [2.13.1](https://github.com/glrodasz/cero-components/compare/v2.13.0...v2.13.1) (2023-04-08)


### Bug Fixes

* **ci:** fix ci publishing ([bf971a9](https://github.com/glrodasz/cero-components/commit/bf971a9bf44e45f8d1cfd92882070dea7a629c88))

# [2.13.0](https://github.com/glrodasz/cero-components/compare/v2.12.1...v2.13.0) (2023-04-07)


### Features

* **heading:** make heading editable ([5226d2c](https://github.com/glrodasz/cero-components/commit/5226d2c30efcce3a43885f2c710cea849a87d019))

## [2.12.1](https://github.com/glrodasz/cero-components/compare/v2.12.0...v2.12.1) (2022-04-14)


### Bug Fixes

* **score:** remove temporarily Score component ([458e814](https://github.com/glrodasz/cero-components/commit/458e814624855a5a2387f2e0785bd42c8ca6fb89))

# [2.12.0](https://github.com/glrodasz/cero-components/compare/v2.11.1...v2.12.0) (2022-02-18)


### Features

* **modal:** add modal animation ([e49a5a4](https://github.com/glrodasz/cero-components/commit/e49a5a4e01cb54047db4c9a2166b36bb69e09211))

## [2.11.1](https://github.com/glrodasz/cero-components/compare/v2.11.0...v2.11.1) (2022-02-10)


### Bug Fixes

* **test:** fix svgr mock for tests ([4c32d5b](https://github.com/glrodasz/cero-components/commit/4c32d5bc98dd7a18c56c5f391a7cd19abdf77d24))
* **tokens:** fix token story size ([e3655a6](https://github.com/glrodasz/cero-components/commit/e3655a67885fd66fee00304a4d7f9e664ff4bcb4))

# [2.11.0](https://github.com/glrodasz/cero-components/compare/v2.10.0...v2.11.0) (2022-02-09)


### Features

* **add button:** key shortcuts and is invalid animation ([1af7644](https://github.com/glrodasz/cero-components/commit/1af76449f3de862647def11eda9f0e0ab31cb3d9))

# [2.10.0](https://github.com/glrodasz/cero-components/compare/v2.9.0...v2.10.0) (2022-01-27)


### Features

* **icon:** add play icon ([720adb1](https://github.com/glrodasz/cero-components/commit/720adb18e394daa27e75284aa15e8e248c324c34))

# [2.9.0](https://github.com/glrodasz/cero-components/compare/v2.8.0...v2.9.0) (2022-01-12)


### Features

* **paragraph:** support monospace font family ([180ede5](https://github.com/glrodasz/cero-components/commit/180ede5bc18b013b3cce87cdea9bdbe03fd82bbb))

# [2.8.0](https://github.com/glrodasz/cero-components/compare/v2.7.0...v2.8.0) (2022-01-07)


### Features

* **icon-label:** add IconLabel sizes ([fa70670](https://github.com/glrodasz/cero-components/commit/fa7067059a16aaae45954d4ccf8a405cd57aa8f8))

# [2.7.0](https://github.com/glrodasz/cero-components/compare/v2.6.0...v2.7.0) (2021-12-11)


### Features

* **iconlabel:** add IconLabel component ([3c5a324](https://github.com/glrodasz/cero-components/commit/3c5a3245d521f3534cea1058d701a4744dd89942))

# [2.6.0](https://github.com/glrodasz/cero-components/compare/v2.5.0...v2.6.0) (2021-12-07)


### Features

* **modal:** allow secondary option ([3fe6393](https://github.com/glrodasz/cero-components/commit/3fe639316e216345c1c6f31f5792dd6d6eed283e))

# [2.5.0](https://github.com/glrodasz/cero-components/compare/v2.4.1...v2.5.0) (2021-12-03)


### Features

* **task:** move onCheck action to the check component ([c524fe7](https://github.com/glrodasz/cero-components/commit/c524fe74fc1f3e54d00f17c500a697705388121c))

## [2.4.1](https://github.com/glrodasz/cero-components/compare/v2.4.0...v2.4.1) (2021-11-11)


### Bug Fixes

* **taskcounter:** return children when is toggleable ([1e8d166](https://github.com/glrodasz/cero-components/commit/1e8d16613bd5252b10efe72496cafa0960bd1deb))

# [2.4.0](https://github.com/glrodasz/cero-components/compare/v2.3.0...v2.4.0) (2021-08-15)


### Features

* **handlers:** add missing handlers to the components ([d0d89b7](https://github.com/glrodasz/cero-components/commit/d0d89b7c154afd7d73edb1f326cf398cb0d62edb))

# [2.3.0](https://github.com/glrodasz/cero-components/compare/v2.2.0...v2.3.0) (2021-07-22)


### Bug Fixes

* **accordion:** export accordion molecule in the index ([f87dfb2](https://github.com/glrodasz/cero-components/commit/f87dfb223a45b8080b3e0aaed0435c35d87827a7))


### Features

* **accordion:** add accordion molecule and refactor task counter ([cbafb55](https://github.com/glrodasz/cero-components/commit/cbafb55cbedd3c15c788b9949c324de51d00d4c7))
* **textarea:** add new textarea atom ([c7c8f32](https://github.com/glrodasz/cero-components/commit/c7c8f32e8d687cec4556f6c83b48477c7db26293))

# [2.2.0](https://github.com/glrodasz/cero-components/compare/v2.1.0...v2.2.0) (2021-07-18)


### Bug Fixes

* support more sizes link and fix minor issues with arg types ([63b3a2a](https://github.com/glrodasz/cero-components/commit/63b3a2a1f07eef6f83c5b8dbf8dae2459bd60fa9))


### Features

* **icon:** remove fullfiled background ([da6b128](https://github.com/glrodasz/cero-components/commit/da6b128bf05407b71fd000ff34cd38bf7a301f09))

# [2.1.0](https://github.com/glrodasz/cero-components/compare/v2.0.0...v2.1.0) (2021-07-17)


### Features

* **colors:** improve colors definitions ([d8e84b7](https://github.com/glrodasz/cero-components/commit/d8e84b78d457f65e445e2a9bbd95f361bb8b2576))

# [2.0.0](https://github.com/glrodasz/cero-components/compare/v1.14.0...v2.0.0) (2021-07-17)


### Bug Fixes

* **link:** add a better weight to the link ([5c6cde8](https://github.com/glrodasz/cero-components/commit/5c6cde8ff6f33670d7562262f5f5dfa538e2d608))
* change horizontal to vertical ([c82ed5b](https://github.com/glrodasz/cero-components/commit/c82ed5b15c80fc5e5a4149c78aee2bc60d5ca724))
* rename bertical to vertical ([3b5656e](https://github.com/glrodasz/cero-components/commit/3b5656ee75678c42b2cb40e95846515f646db557))
* rename vertical to horizontal ([24c7ab3](https://github.com/glrodasz/cero-components/commit/24c7ab3f60db23687bef52ffa8580f5824cf4221))


### BREAKING CHANGES

* **link:** Spacer.Horizontal now behaves like Spacer.Vertical and in the other way around
Spacer.Vertical behaves like Spacer.Horizontal.

# [1.14.0](https://github.com/glrodasz/cero-components/compare/v1.13.0...v1.14.0) (2021-07-17)


### Bug Fixes

* **tokens:** color tokens label description ([7d2a5e0](https://github.com/glrodasz/cero-components/commit/7d2a5e0fe411611700d18d053bbda3a0a289a2c4))


### Features

* **colors, tokens:** add new tailwind colors into the tokens and font weight token in the storybook ([a8520a7](https://github.com/glrodasz/cero-components/commit/a8520a74e2f4180700c51021f8b8dc3b83bc8728))

# [1.13.0](https://github.com/glrodasz/cero-components/compare/v1.12.0...v1.13.0) (2021-07-16)


### Bug Fixes

* **paragraph:** fix inline prop ([c39e7e5](https://github.com/glrodasz/cero-components/commit/c39e7e5cea2967691824c3ebe9b60102868693bd))


### Features

* **link:** add a link component ([abac610](https://github.com/glrodasz/cero-components/commit/abac610b6c0295fd1d0da94d13c5379516144ea2))

# [1.12.0](https://github.com/glrodasz/cero-components/compare/v1.11.0...v1.12.0) (2021-04-20)


### Features

* **task-counter:** enable default is collapse in task counter ([e02db79](https://github.com/glrodasz/cero-components/commit/e02db79444a190218a0f526df6126e21a2879127))

# [1.11.0](https://github.com/glrodasz/cero-components/compare/v1.10.0...v1.11.0) (2021-03-18)


### Bug Fixes

* **loading:** remove children when loadin is shown ([c2f0626](https://github.com/glrodasz/cero-components/commit/c2f062670e6afb9227059f545f94d88bad2ebfa6))


### Features

* **loading, error:** add loading and error components ([e9777de](https://github.com/glrodasz/cero-components/commit/e9777de29f7efb890658143d6a2291799afa0d0e))
* **modal:** add modal molecule ([282e146](https://github.com/glrodasz/cero-components/commit/282e146b5abd02ddab3bca17f69b31e458875b39))

# [1.10.0](https://github.com/glrodasz/cero-components/compare/v1.9.0...v1.10.0) (2021-02-18)


### Features

* **icon, task-counter:** add new background to icon and make task counter toggleable ([9313a94](https://github.com/glrodasz/cero-components/commit/9313a94452180fbf0c559f32e03f5bd7da54daea))

# [1.9.0](https://github.com/glrodasz/cero-components/compare/v1.8.2...v1.9.0) (2021-02-02)


### Features

* **divider:** add divider atom ([adfd280](https://github.com/glrodasz/cero-components/commit/adfd280c855955596879f0bee5ab3d5e26587c9e))
* **task-counter:** add Task Counter and remaining snapshots ([c0c88a9](https://github.com/glrodasz/cero-components/commit/c0c88a9ab760a726eba063690e69a2b827db99b4))

## [1.8.2](https://github.com/glrodasz/cero-components/compare/v1.8.1...v1.8.2) (2021-01-22)


### Bug Fixes

* **check:** add the proper prop change ([6270f4b](https://github.com/glrodasz/cero-components/commit/6270f4b7eb0faf90f144441de71f494c37577495))

## [1.8.1](https://github.com/glrodasz/cero-components/compare/v1.8.0...v1.8.1) (2021-01-19)


### Bug Fixes

* **task:** fix onDelete click when pending and type props are passed ([6a202a7](https://github.com/glrodasz/cero-components/commit/6a202a73e362ebc44b8897cfca1fbdaed068d67a))

# [1.8.0](https://github.com/glrodasz/cero-components/compare/v1.7.0...v1.8.0) (2020-12-06)


### Features

* **tokens:** fix border radius tokens ([ebd8f9c](https://github.com/glrodasz/cero-components/commit/ebd8f9cf69cdb6df64d77d4f93eb0f1e4e6a56eb))

# [1.7.0](https://github.com/glrodasz/cero-components/compare/v1.6.10...v1.7.0) (2020-11-17)


### Features

* **card, task, addbutton:** add Card draggable state, add pending Task, fix AddButton prop name ([6733b6e](https://github.com/glrodasz/cero-components/commit/6733b6eb021cb1005942bea4e8c2903d373bcdc9))
* **task:** enable task type ([f390347](https://github.com/glrodasz/cero-components/commit/f390347e69361144affd65480d33fb4f81c39557))

## [1.6.10](https://github.com/glrodasz/cero-components/compare/v1.6.9...v1.6.10) (2020-11-10)


### Bug Fixes

* **storybook:** snapshot tests with proper default props and correct Spacer subcomponent integration ([dd400b0](https://github.com/glrodasz/cero-components/commit/dd400b04572009db8b46a1825f753af0981866b9))

## [1.6.9](https://github.com/glrodasz/cero-components/compare/v1.6.8...v1.6.9) (2020-11-08)


### Bug Fixes

* avoid merge message ([1beb4c7](https://github.com/glrodasz/cero-components/commit/1beb4c717318b0acafb5ad04fa3c044770f9ad56))
* testing that skip ci does not trigger the GitHub Actions ([10ea77a](https://github.com/glrodasz/cero-components/commit/10ea77ab45234df09759b096df53cfc27ba9e6ca))

## [1.6.8](https://github.com/glrodasz/cero-components/compare/v1.6.7...v1.6.8) (2020-11-08)


### Bug Fixes

* testing with the new token config ([a212d58](https://github.com/glrodasz/cero-components/commit/a212d58e66ad45dd4b52bc6f859285ae58746fb1))
* testing workaround for GH_TOKEN ([79e8839](https://github.com/glrodasz/cero-components/commit/79e883918e9b5e9eac24ba4b8eb7684168507cc2))

## [1.6.7](https://github.com/glrodasz/cero-components/compare/v1.6.6...v1.6.7) (2020-11-08)


### Bug Fixes

* testing with a publich token ([a8ab131](https://github.com/glrodasz/cero-components/commit/a8ab131d7e91d1798df0b988ef17e14f20ca6d26))
