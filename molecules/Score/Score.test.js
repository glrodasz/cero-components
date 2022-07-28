import * as stories from './Score.stories'
import createSnapshotFromStories from '../../utils/testUtils/createSnapshotFromStories'

describe('[ molecules / Score ]', () => {
  describe('#Score', () => createSnapshotFromStories('Score', stories))
})
