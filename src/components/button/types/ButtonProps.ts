import ButtonType from './ButtonType'

type Props = {
  label: string
  position?: [x: number, y: number]
  width?: number
  height?: number
  type?: ButtonType
  onClick?: any
  disabled?: boolean
}

export default Props
