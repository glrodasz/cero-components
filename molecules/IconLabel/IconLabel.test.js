import * as stories from './IconLabel.stories'
import createSnapshotFromStories from '../../utils/testUtils/createSnapshotFromStories'

describe('[ molecules / IconLabel ]', () => {
  describe('#IconLabel', () => createSnapshotFromStories('IconLabel', stories))
})
