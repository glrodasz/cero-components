import * as stories from './Loading.stories'
import createSnapshotFromStories from '../../utils/testUtils/createSnapshotFromStories'

describe('[ atoms / Loading ]', () => {
  describe('#Loading', () => createSnapshotFromStories('Loading', stories))
})
