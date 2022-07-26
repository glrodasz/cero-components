import * as stories from './Error.stories'
import createSnapshotFromStories from '../../utils/testUtils/createSnapshotFromStories'

describe('[ molecules / Error ]', () => {
  describe('#Error', () => createSnapshotFromStories('Error', stories))
})
