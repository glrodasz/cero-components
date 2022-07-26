import * as stories from './Spacer.stories'
import createSnapshotFromStories from '../../utils/testUtils/createSnapshotFromStories'

describe('[ layout / Spacer ]', () => {
  describe('#Spacer', () => createSnapshotFromStories('Spacer', stories))
})
