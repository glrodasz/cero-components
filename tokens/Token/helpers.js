import toKebabCase from '../../utils/toKebabCase'

export const getTokenItems = (tokens, tokenKey) => (group) => {
  if (group) {
    return Object.keys(tokens[group]).map((key) => ({
      label: `var(--${toKebabCase(tokenKey)}-${group}-${toKebabCase(key)})`,
      value: tokens[group][key],
    }))
  }

  return Object.keys(tokens).map((key) => ({
    label: `var(--${toKebabCase(tokenKey)}-${toKebabCase(key)})`,
    value: tokens[key],
  }))
}
