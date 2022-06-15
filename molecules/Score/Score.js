// import React from 'react'
// import PropTypes from 'prop-types'

// import styles from './Score.module.css'
// import withStyles from '../../hocs/withStyles'

// import Spacer from '../../layout/Spacer'
// import Paragraph from '../../atoms/Paragraph'

// import SadFace from './faces/sad.svg'
// import NormalFace from './faces/normal.svg'
// import HappyFace from './faces/happy.svg'

// const handleClickScore = ({ score, onClickScore }) => () => {
//   onClickScore({ score })
// }

// export const Score = ({ getStyles, onClickScore }) => {
//   return (
//     <div className={getStyles('score')}>
//       <div
//         className={getStyles('face')}
//         onClick={handleClickScore({ score: 0, onClickScore })}
//       >
//         <SadFace />
//         <Spacer.Vertical size="xs" />
//         <Paragraph>Frustrado</Paragraph>
//       </div>
//       <Spacer.Horizontal size="lg" />
//       <div
//         className={getStyles('face')}
//         onClick={handleClickScore({ score: 2.5, onClickScore })}
//       >
//         <NormalFace />
//         <Spacer.Vertical size="xs" />
//         <Paragraph>Normal</Paragraph>
//       </div>
//       <Spacer.Horizontal size="lg" />
//       <div
//         className={getStyles('face')}
//         onClick={handleClickScore({ score: 5, onClickScore })}
//       >
//         <HappyFace />
//         <Spacer.Vertical size="xs" />
//         <Paragraph>Muy motivado</Paragraph>
//       </div>
//     </div>
//   )
// }

// Score.propTypes = {
//   getStyles: PropTypes.func.isRequired,
//   onClickScore: PropTypes.func.isRequired,
// }

// Score.defaultProps = {
//   getStyles: () => {},
//   onClickScore: () => {},
// }

// export default withStyles(styles)(Score)
