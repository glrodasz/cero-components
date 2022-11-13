import { createSnapshots } from '@glrodasz/storybook-tools-snapshots'

const STORIES_GLOB = '{tokens,atoms,molecules,layout}/**/*.stories.@(js|mdx)'
createSnapshots(STORIES_GLOB)
