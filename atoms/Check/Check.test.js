import * as stories from './Check.stories'
import createSnapshotFromStories from '../../utils/testUtils/createSnapshotFromStories'

describe('[ atoms / Check ]', () => {
  describe('#Check', () => createSnapshotFromStories('Check', stories))
})
