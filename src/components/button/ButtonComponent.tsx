import React from 'react'

import styles from './ButtonComponent.module.css'
import ButtonProps from './types/ButtonProps'
import ButtonType from './types/ButtonType'

const ButtonComponent: React.FC<ButtonProps> = ({
  label,
  position,
  width,
  height,
  type = ButtonType.Operation,
}) => {
  const style: React.CSSProperties = {}

  // This will manage the x and y position of the buttons.
  if (position) {
    style.gridColumnStart = position[0] + 1
    style.gridRowStart = position[1] + 1
  }

  // This will change the button color and styles based on the type
  if (type === ButtonType.Number) {
    style.color = 'black'
    style.background = 'white'
  }

  // If width value is provided it will consumed a column.
  if (width) style.gridColumnEnd = `span ${width}`

  // If height value is provided it will consumed a row.
  if (height) style.gridRowEnd = `span ${height}`

  return (
    <button style={style} className={`${styles.button}`}>
      {label}
    </button>
  )
}

export default ButtonComponent
