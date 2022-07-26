import * as stories from './AddButton.stories'
import createSnapshotFromStories from '../../utils/testUtils/createSnapshotFromStories'

describe('[ molecules / AddButton ]', () => {
  describe('#AddButton', () => createSnapshotFromStories('AddButton', stories))
})
