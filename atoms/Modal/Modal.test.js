import '../../utils/testUtils/matchMediaMock'

import createSnapshotFromStories from '../../utils/testUtils/createSnapshotFromStories'
import * as stories from './Modal.stories'

describe('[ atoms / Modal ]', () => {
  describe('#Modal', () => createSnapshotFromStories('Modal', stories))
})
