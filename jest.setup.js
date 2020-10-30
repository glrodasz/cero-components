const CONSOLE_LEVELS = ['debug', 'log', 'info', 'warn', 'error']

// By default allowedConsoleLevels is ["error"]
const allowedConsoleLevels = CONSOLE_LEVELS.slice(
  CONSOLE_LEVELS.indexOf(process.env.CONSOLE_LEVEL)
)

global.console = CONSOLE_LEVELS.reduce((levels, level) => {
  return allowedConsoleLevels.includes(level)
    ? { ...levels, [level]: console[level] }
    : { ...levels, [level]: jest.fn() }
}, {})
