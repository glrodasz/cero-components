import * as stories from './Container.stories'
import createSnapshotFromStories from '../../utils/testUtils/createSnapshotFromStories'

describe('[ layout / Container ]', () => {
  describe('#Container', () => createSnapshotFromStories('Container', stories))
})
