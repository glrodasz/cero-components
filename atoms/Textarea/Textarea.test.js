import * as stories from './Textarea.stories'
import createSnapshotFromStories from '../../utils/testUtils/createSnapshotFromStories'

describe('[ atoms / Textarea ]', () => {
  describe('#Textarea', () => createSnapshotFromStories('Textarea', stories))
})
