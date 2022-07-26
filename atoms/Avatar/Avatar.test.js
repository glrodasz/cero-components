import * as stories from './Avatar.stories'
import createSnapshotFromStories from '../../utils/testUtils/createSnapshotFromStories'

describe('[ atoms / Avatar ]', () => {
  describe('#Avatar', () => createSnapshotFromStories('Avatar', stories))
})
