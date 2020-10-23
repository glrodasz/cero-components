import React from 'react'

class Icon {
  constructor(viewBox, svg) {
    this.viewBox = viewBox
    this.svg = <>{svg}</>
  }
}

export const iconsDictionary = {
  'arrow-right': new Icon(
    '0 0 19 20',
    (
      <>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.65792 19.316L7.34192 18L15.6849 9.658L7.34192 1.316L8.65792 0L18.3149 9.658L8.65792 19.316Z"
          fill="#987CE6"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 8.65796H17V10.658H0V8.65796Z"
          fill="#987CE6"
        />
      </>
    )
  ),
  'angle-down': new Icon(
    '0 0 15 9',
    (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.82633 8.70623L0.882568 1.54063L1.89405 0.496826L7.82633 6.61863L13.7586 0.496826L14.7701 1.54063L7.82633 8.70623Z"
        fill="#46596F"
      />
    )
  ),
  default: null,
}

const iconSize = {
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
}

export const mapSize = (size) => iconSize[size]
