import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import path from 'path'

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
      include: /\.(jsx|js|tsx|ts|mdx)$/, // Handle JSX in all .js files
    }),
    svgr(),
  ],
  esbuild: {
    include: /\.(jsx|js|tsx|ts)$/,
    exclude: [],
    loader: 'jsx',
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
        '.jsx': 'jsx',
      },
    },
  },
  resolve: {
    alias: {
      // Force all packages to use the same React version (React 19)
      'react': path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
      'react/jsx-runtime': path.resolve(__dirname, './node_modules/react/jsx-runtime'),
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
      generateScopedName: '[name]__[local]--[hash:base64:5]',
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.js',
    server: {
      deps: {
        inline: [/@storybook/],
      },
    },
    resolveSnapshotPath: (testPath, snapExtension) => {
      // For storybook tests, place snapshots in component folders
      if (testPath.includes('.stories.')) {
        const dirPath = path.dirname(testPath)
        const fileName = path.basename(testPath).split('.').shift()
        return `${dirPath}/__snapshots__/${fileName}${snapExtension}`
      }
      // Default behavior for other tests
      return testPath.replace('.test.js', snapExtension)
    },
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      include: [
        'atoms/**/*.js',
        'molecules/**/*.js',
        'layout/**/*.js',
        'hocs/*.js',
        'helpers/*.js',
      ],
      exclude: [
        '**/index.js',
        '**/*.stories.js',
        '**/*.test.js',
        '**/constants.js',
      ],
      thresholds: {
        branches: 60,
        functions: 55,
        lines: 60,
        statements: 60,
      },
    },
  },
})
