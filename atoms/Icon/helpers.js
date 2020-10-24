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
  trash: {
    viewBox: '0 0 10 12',
    svg: (
      <>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.72534 3.71014H5.97808V9.68822H6.72534V3.71014Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.23071 3.71014H4.48345V9.68822H5.23071V3.71014Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.73633 3.71014H2.98907V9.68822H3.73633V3.71014Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.71436 1.46838H-2.28882e-05V2.21564H9.71436V1.46838Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.01523 1.842H3.71018V1.09474C3.71018 0.874294 3.88952 0.694952 4.10996 0.694952H5.60448C5.82492 0.694952 6.00427 0.874294 6.00427 1.09474V1.842H6.69922V1.09474C6.69922 0.49095 6.2079 0 5.60448 0H4.10996C3.50655 0 3.01523 0.49095 3.01523 1.09474V1.842Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.61523 11.93H7.09879C7.70183 11.93 8.22977 11.4409 8.27573 10.8398L8.96582 1.87077L8.2208 1.81323L7.53071 10.7826C7.51427 10.9959 7.31251 11.1827 7.09879 11.1827H2.61523C2.40152 11.1827 2.19976 10.9959 2.18332 10.783L1.49322 1.81323L0.748204 1.87077L1.4383 10.8398C1.48426 11.4409 2.01219 11.93 2.61523 11.93Z"
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
