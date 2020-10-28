const iconSize = {
  sm: 25,
  md: 35,
  lg: 50,
  xl: 70,
}

const iconColor = {
  base: '#ff0000',
  highlight: '',
  muted: '',
  primary: '',
}

export const mapColor = (color) => iconColor[color]

export const mapSize = (size) => iconSize[size]
