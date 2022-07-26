import * as stories from './TaskCounter.stories'
import createSnapshotFromStories from '../../utils/testUtils/createSnapshotFromStories'

describe('[ molecules / TaskCounter ]', () => {
  describe('#TaskCounter', () =>
    createSnapshotFromStories('TaskCounter', stories))
})
