import * as stories from './FullHeightContent.stories'
import createSnapshotFromStories from '../../utils/testUtils/createSnapshotFromStories'

describe('[ layout / FullHeightContent ]', () => {
  describe('#FullHeightContent', () =>
    createSnapshotFromStories('FullHeightContent', stories))
})
