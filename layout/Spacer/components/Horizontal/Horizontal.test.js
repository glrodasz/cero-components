import * as stories from './Horizontal.stories'
import createSnapshotFromStories from '../../../../utils/testUtils/createSnapshotFromStories'

describe('[ layout / Horizontal ]', () => {
  describe('#Horizontal', () =>
    createSnapshotFromStories('Horizontal', stories))
})
