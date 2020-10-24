/* eslint-disable react/display-name */
import React from 'react'

export const iconsMap = {
  arrowRight: {
    viewBox: '0 0 19 20',
    svg: (
      <>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.65792 19.316L7.34192 18L15.6849 9.658L7.34192 1.316L8.65792 0L18.3149 9.658L8.65792 19.316Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 8.65796H17V10.658H0V8.65796Z"
        />
      </>
    ),
  },
  angleDown: {
    viewBox: '0 0 15 9',
    svg: (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.82633 8.70623L0.882568 1.54063L1.89405 0.496826L7.82633 6.61863L13.7586 0.496826L14.7701 1.54063L7.82633 8.70623Z"
      />
    ),
  },
  plusCircle: {
    viewBox: '0 0 20 20',
    svg: (
      <>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 20C4.48612 20 0 15.5139 0 10C0 4.48612 4.48612 0 10 0C15.5139 0 20 4.48612 20 10C20 15.5139 15.5139 20 10 20ZM10 1.09864C5.09155 1.09864 1.09864 5.09155 1.09864 10C1.09864 14.9084 5.09155 18.9014 10 18.9014C14.9084 18.9014 18.9014 14.9084 18.9014 10C18.9014 5.09155 14.9084 1.09864 10 1.09864Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.68396 9.4093H15.316V10.5906H4.68396V9.4093Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.40942 4.68396H10.5908V15.316H9.40942V4.68396Z"
        />
      </>
    ),
  },
}

const iconSize = {
  sm: 25,
  md: 35,
  lg: 45,
  xl: 60,
}

const iconColor = {
  base: '#ff0000',
  highlight: '',
  muted: '',
  primary: '',
}

export const mapColor = (color) => iconColor[color]

export const mapSize = (size) => iconSize[size]
