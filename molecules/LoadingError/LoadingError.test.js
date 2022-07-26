import * as stories from './LoadingError.stories'
import createSnapshotFromStories from '../../utils/testUtils/createSnapshotFromStories'

describe('[ molecules / LoadingError ]', () => {
  describe('#LoadingError', () =>
    createSnapshotFromStories('LoadingError', stories))
})
