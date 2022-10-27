import { Dispatch } from 'react'

import { ArithmeticSymbols } from '../consts/arithmetic-symbols'

/**
 * This will calculate the two numbers based on the arithmetic operation used.
 */
export default function calculate(
  display: string,
  currentOperation: string,
  setDisplay: Dispatch<string>,
  setHasOperation: Dispatch<boolean>,
  setCurrentOperation: Dispatch<string>
) {
  const num1 = display.substring(0, display.indexOf(currentOperation))
  const num2 = display.substring(display.indexOf(currentOperation) + 1)

  switch (currentOperation) {
    case ArithmeticSymbols[0]:
      setDisplay(String(Number(num1) + Number(num2)))
      setHasOperation(false)
      setCurrentOperation('')
      break
    case ArithmeticSymbols[1]:
      setDisplay(String(Number(num1) - Number(num2)))
      setHasOperation(false)
      setCurrentOperation('')
      break
    case ArithmeticSymbols[2]:
      setDisplay(String(Number(num1) * Number(num2)))
      setHasOperation(false)
      setCurrentOperation('')
      break
    case ArithmeticSymbols[3]:
      setDisplay(String(Number(num1) / Number(num2)))
      setHasOperation(false)
      setCurrentOperation('')
      break
    default:
      break
  }
}
