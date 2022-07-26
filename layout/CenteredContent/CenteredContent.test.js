import * as stories from './CenteredContent.stories'
import createSnapshotFromStories from '../../utils/testUtils/createSnapshotFromStories'

describe('[ layout / CenteredContent ]', () => {
  describe('#CenteredContent', () =>
    createSnapshotFromStories('CenteredContent', stories))
})
