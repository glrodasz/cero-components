import * as stories from './Divider.stories'
import createSnapshotFromStories from '../../utils/testUtils/createSnapshotFromStories'

describe('[ atoms / Divider ]', () => {
  describe('#Divider', () => createSnapshotFromStories('Divider', stories))
})
