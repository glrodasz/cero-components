import { mergeConfig } from 'vite'
import path from 'path'
import { fileURLToPath } from 'url'
import react from '@vitejs/plugin-react'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default {
  stories: ['../{tokens,atoms,molecules,layout}/**/*.stories.@(js|mdx)'],

  addons: [],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  async viteFinal(config) {
    // Replace the existing react plugin with one that handles all .js files
    const reactPluginIndex = config.plugins.findIndex(
      (p) => p && p.name === 'vite:react-babel'
    )
    if (reactPluginIndex !== -1) {
      config.plugins.splice(reactPluginIndex, 1)
    }

    return mergeConfig(config, {
      plugins: [
        react({
          include: /\.(jsx|js|tsx|ts|mdx)$/,
        }),
      ],
      resolve: {
        alias: {
          // Force all packages to use the same React version (React 19)
          'react': path.resolve(__dirname, '../node_modules/react'),
          'react-dom': path.resolve(__dirname, '../node_modules/react-dom'),
          'react/jsx-runtime': path.resolve(__dirname, '../node_modules/react/jsx-runtime'),
        },
      },
      css: {
        modules: {
          localsConvention: 'camelCase',
          generateScopedName: '[name]__[local]--[hash:base64:5]',
        },
      },
    })
  },
}
