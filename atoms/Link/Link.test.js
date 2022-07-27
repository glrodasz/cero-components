import * as stories from './Link.stories'
import createSnapshotFromStories from '../../utils/testUtils/createSnapshotFromStories'

describe('[ atoms / Link ]', () => {
  describe('#Link', () => createSnapshotFromStories('Link', stories))
})
