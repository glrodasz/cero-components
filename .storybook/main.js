import path from 'path'
import { fileURLToPath } from 'url'
import { transformSync } from 'esbuild'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Custom plugin to transform JSX in .js files before import analysis
const jsxPlugin = () => ({
  name: 'jsx-transform',
  enforce: 'pre',
  transform(code, id) {
    if (
      id.endsWith('.js') &&
      !id.includes('node_modules') &&
      code.includes('<')
    ) {
      const result = transformSync(code, {
        loader: 'jsx',
        jsx: 'automatic',
        sourcemap: true,
      })
      return { code: result.code, map: result.map || null }
    }
  },
})

export default {
  stories: ['../{tokens,atoms,molecules,layout}/**/*.stories.@(js|mdx)'],

  addons: [],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  async viteFinal(config) {
    config.plugins = [jsxPlugin(), ...config.plugins]

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
