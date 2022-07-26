import * as stories from './Heading.stories'
import createSnapshotFromStories from '../../utils/testUtils/createSnapshotFromStories'

describe('[ atoms / Heading ]', () => {
  describe('#Heading', () => createSnapshotFromStories('Heading', stories))
})
