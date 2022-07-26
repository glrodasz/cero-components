import * as stories from './Accordion.stories'
import createSnapshotFromStories from '../../utils/testUtils/createSnapshotFromStories'

describe('[ molecules / Accordion ]', () => {
  describe('#Accordion', () => createSnapshotFromStories('Accordion', stories))
})
