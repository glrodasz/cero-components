const { choices, decisions } = require('../tokens')
const toKebabCase = require('../utils/toKebabCase')
const fs = require('fs')

// No hace falta esta línea ya que se pueden usar solo secuencias de escape sin espacios
// escritos en el código como voy a mostrar en los cambios realizados
/* const cleanLines = (string = '') => string.trim().replace(/^\n\n/gm, '\n') */

function transformTokens(parentKey, object) {
  const objectKeys = Object.keys(object)

  return objectKeys.reduce((transformedTokens, objectKey) => {
    const value = object[objectKey]
    
    if (typeof value === 'object') {
      const customProperty = parentKey
      ? toKebabCase(`${parentKey}-${objectKey}`)
      : toKebabCase(`${objectKey}`)

      return `${tokensTransformed}${transformTokens(`${customProperty}`, value)}\r`;
    };

    return `${tokensTransformed}\r\t--${parentKey}-${objectKey}: ${value};`;
  }, '')
}

function buildTokens() {
  const transformedChoices = transformTokens(null, choices)
  const transformedDecisions = transformTokens(null, decisions)
  const customProperties = `${transformedChoices}${transformedDecisions}`

  const data = `:root {${customProperties}}`;

  fs.writeFile('./styles/tokens.css', data, 'utf8', (error) => {
    if (error) throw error
    console.log('🎨 Custom properties created!')
  })
}

buildTokens()
