import classNames from 'classnames'
import { ReactNode } from 'react'
import { ButtonType } from './types'

interface Props {
  width?: number
  height?: number
  type?: ButtonType
  disabled?: boolean
  children: ReactNode
  position?: [x: number, y: number]
  onClick?: () => void
}

export default function Button({
  position,
  width,
  height,
  children,
  disabled = false,
  type = ButtonType.Operation,
  onClick,
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
      style={style}
      disabled={disabled}
      className={classNames({
        'bg-white rounded-lg border-0 text-lg text-black hover:bg-orange-500 hover:text-white':
          type === ButtonType.Number,
        'bg-gray-500 rounded-lg border-0 text-lg text-white hover:bg-orange-500':
          type === ButtonType.Operation,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
