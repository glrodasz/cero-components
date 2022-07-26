import * as stories from './Input.stories'
import createSnapshotFromStories from '../../utils/testUtils/createSnapshotFromStories'

describe('[ atoms / Input ]', () => {
  describe('#Input', () => createSnapshotFromStories('Input', stories))
})
