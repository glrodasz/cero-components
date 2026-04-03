module.exports = (request, options) => {
  return options.defaultResolver(request, {
    ...options,
    packageFilter: (pkg) => {
      // Handle ESM-only packages with exports field but no main/require condition
      // Remove exports to force resolution via main field
      if (pkg.exports && pkg.exports['.']) {
        const exportEntry = pkg.exports['.']
        if (
          typeof exportEntry === 'object' &&
          exportEntry.import &&
          !exportEntry.require
        ) {
          pkg.main = exportEntry.import
          delete pkg.exports
        }
      }
      return pkg
    },
  })
}
