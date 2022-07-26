import * as stories from './Task.stories'
import createSnapshotFromStories from '../../utils/testUtils/createSnapshotFromStories'

describe('[ molecules / Task ]', () => {
  describe('#Task', () => createSnapshotFromStories('Task', stories))
})
