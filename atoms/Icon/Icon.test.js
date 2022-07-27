import * as stories from './Icon.stories'
import createSnapshotFromStories from '../../utils/testUtils/createSnapshotFromStories'

describe('[ atoms / Icon ]', () => {
  describe('#Icon', () => createSnapshotFromStories('Icon', stories))
})
