import * as stories from './Picture.stories'
import createSnapshotFromStories from '../../utils/testUtils/createSnapshotFromStories'

describe('[ atoms / Picture ]', () => {
  describe('#Picture', () => createSnapshotFromStories('Picture', stories))
})
