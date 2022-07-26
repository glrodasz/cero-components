import * as stories from './ButtonIcon.stories'
import createSnapshotFromStories from '../../utils/testUtils/createSnapshotFromStories'

describe('[ molecules / ButtonIcon ]', () => {
  describe('#ButtonIcon', () =>
    createSnapshotFromStories('ButtonIcon', stories))
})
