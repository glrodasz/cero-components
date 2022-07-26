import * as stories from './Dropdown.stories'
import createSnapshotFromStories from '../../utils/testUtils/createSnapshotFromStories'

describe('[ molecules / Dropdown ]', () => {
  describe('#Dropdown', () => createSnapshotFromStories('Dropdown', stories))
})
