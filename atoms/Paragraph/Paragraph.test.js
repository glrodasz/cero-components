import * as stories from './Paragraph.stories'
import createSnapshotFromStories from '../../utils/testUtils/createSnapshotFromStories'

describe('[ atoms / Paragraph ]', () => {
  describe('#Paragraph', () => createSnapshotFromStories('Paragraph', stories))
})
