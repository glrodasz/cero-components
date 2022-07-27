import * as stories from './Card.stories'
import createSnapshotFromStories from '../../utils/testUtils/createSnapshotFromStories'

describe('[ atoms / Card ]', () => {
  describe('#Card', () => createSnapshotFromStories('Card', stories))
})
