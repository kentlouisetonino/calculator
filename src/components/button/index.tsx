import React from 'react'

import styles from './index.module.css'

enum ButtonType {
  Number,
  Operation,
}

interface Props {
  label: string
  position?: [x: number, y: number]
  width?: number
  height?: number
  type?: ButtonType
  onClick?: any
  disabled?: boolean
}

export default function Button({
  label,
  position,
  width,
  height,
  type = ButtonType.Operation,
  onClick,
  disabled = false,
}: Props) {
  const style: React.CSSProperties = {}

  // This will manage the x and y position of the buttons.
  if (position) {
    style.gridColumnStart = position[0] + 1
    style.gridRowStart = position[1] + 1
  }

  // If width value is provided it will consumed a column.
  if (width) style.gridColumnEnd = `span ${width}`

  // If height value is provided it will consumed a row.
  if (height) style.gridRowEnd = `span ${height}`

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={style}
      className={`${
        type === ButtonType.Number
          ? styles.buttonNumber
          : styles.buttonOperation
      }`}
    >
      {label}
    </button>
  )
}
