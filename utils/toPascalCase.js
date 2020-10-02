/**
 * Function to validate a string and capitalize it if necessary
 * @param {str} str
 */
function toPascalCase(str) {
  const REG_EXP = /[A-Z]/

  if (!REG_EXP.test(str)) {
    return str
      .replace(
        /\w\S*/g,
        (word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
      )
      .replace(/ /g, '')
  } else {
    return str
  }
}

module.exports = toPascalCase
