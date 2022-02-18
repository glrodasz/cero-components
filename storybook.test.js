import initStoryshots, {
  multiSnapshotWithOptions,
  Stories2SnapsConverter,
} from '@storybook/addon-storyshots'

import './utils/testUtils/matchMediaMock'

initStoryshots({
  test: multiSnapshotWithOptions(),
  stories2snapsConverter: new Stories2SnapsConverter({
    snapshotExtension: '.js.snap',
  }),
})
