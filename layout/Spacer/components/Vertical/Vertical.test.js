import * as stories from './Vertical.stories'
import createSnapshotFromStories from '../../../../utils/testUtils/createSnapshotFromStories'

describe('[ layout / Vertical ]', () => {
  describe('#Vertical', () => createSnapshotFromStories('Vertical', stories))
})
