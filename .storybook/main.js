import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default {
  stories: ['../{tokens,atoms,molecules,layout}/**/*.stories.@(js|mdx)'],

  addons: [],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  async viteFinal(config) {
    config.esbuild = {
      ...config.esbuild,
      loader: 'jsx',
      include: /\.(jsx|js|tsx|ts)$/,
      exclude: [],
    }

    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        react: path.resolve(__dirname, '../node_modules/react'),
        'react-dom': path.resolve(__dirname, '../node_modules/react-dom'),
        'react/jsx-runtime': path.resolve(
          __dirname,
          '../node_modules/react/jsx-runtime',
        ),
      },
    }

    config.css = {
      ...config.css,
      modules: {
        localsConvention: 'camelCase',
        generateScopedName: '[name]__[local]--[hash:base64:5]',
      },
    }

    config.optimizeDeps = {
      ...config.optimizeDeps,
      esbuildOptions: {
        ...config.optimizeDeps?.esbuildOptions,
        loader: {
          '.js': 'jsx',
        },
      },
    }

    return config
  },
}
