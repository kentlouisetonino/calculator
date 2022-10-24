import { useEffect, useState } from 'react'

import { ArithmeticSymbols } from '../../consts/arithmetic-symbols'
import calculate from '../../helpers/calculate'
import ButtonComponent from '../button'
import { ButtonType } from '../button/ButtonType'
import styles from './index.module.css'

export default function Calculator() {
  const [display, setDisplay] = useState<string>('')
  const [hasOperation, setHasOperation] = useState<boolean>(false)
  const [currentOperation, setCurrentOperation] = useState<string>('')

  function onClear() {
    setDisplay('')
    setHasOperation(false)
  }

  function onDelete() {
    const lastCharacter = display.slice(-1)

    if (ArithmeticSymbols.includes(lastCharacter)) {
      setHasOperation(false)
      setCurrentOperation('')
      setDisplay(display.substring(0, display.length - 1))
    } else {
      setDisplay(display.substring(0, display.length - 1))
    }
  }

  function onClickNumber(value: string) {
    setDisplay(display + value)
  }

  function onClickOperation(operation: string) {
    setDisplay(display + operation)
    setCurrentOperation(operation)
    setHasOperation(true)
  }

  function onCalculate() {
    calculate(
      display,
      currentOperation,
      setDisplay,
      setHasOperation,
      setCurrentOperation
    )
  }

  useEffect(() => {
    setDisplay(display)
  }, [display])

  return (
    <div className={`${styles.containerOne}`}>
      <div className={`${styles.containerGrid}`}>
        {/* Display */}
        <div className={`${styles.containerDisplay}`}>{display}</div>

        {/* Operations */}
        <ButtonComponent
          onClick={() => onClear()}
          label="CLEAR"
          position={[0, 1]}
          width={2}
        />
        <ButtonComponent
          onClick={() => onDelete()}
          label="DEL"
          position={[2, 1]}
          width={2}
        />
        <ButtonComponent
          disabled={hasOperation ? true : false}
          onClick={() => onClickOperation('/')}
          label="/"
          position={[3, 2]}
        />
        <ButtonComponent
          disabled={hasOperation ? true : false}
          onClick={() => onClickOperation('x')}
          label="x"
          position={[3, 3]}
        />
        <ButtonComponent
          disabled={hasOperation ? true : false}
          onClick={() => onClickOperation('-')}
          label="-"
          position={[3, 4]}
        />
        <ButtonComponent
          disabled={hasOperation ? true : false}
          onClick={() => onClickOperation('+')}
          label="+"
          position={[3, 5]}
        />

        {/* Numbers */}
        <ButtonComponent
          onClick={() => onClickNumber('9')}
          type={ButtonType.Number}
          label="9"
          position={[2, 2]}
        />
        <ButtonComponent
          onClick={() => onClickNumber('8')}
          type={ButtonType.Number}
          label="8"
          position={[1, 2]}
        />
        <ButtonComponent
          onClick={() => onClickNumber('7')}
          type={ButtonType.Number}
          label="7"
          position={[0, 2]}
        />
        <ButtonComponent
          onClick={() => onClickNumber('6')}
          type={ButtonType.Number}
          label="6"
          position={[2, 3]}
        />
        <ButtonComponent
          onClick={() => onClickNumber('5')}
          type={ButtonType.Number}
          label="5"
          position={[1, 3]}
        />
        <ButtonComponent
          onClick={() => onClickNumber('4')}
          type={ButtonType.Number}
          label="4"
          position={[0, 3]}
        />
        <ButtonComponent
          onClick={() => onClickNumber('3')}
          type={ButtonType.Number}
          label="3"
          position={[2, 4]}
        />
        <ButtonComponent
          onClick={() => onClickNumber('2')}
          type={ButtonType.Number}
          label="2"
          position={[1, 4]}
        />
        <ButtonComponent
          onClick={() => onClickNumber('1')}
          type={ButtonType.Number}
          label="1"
          position={[0, 4]}
        />
        <ButtonComponent
          onClick={() => onClickNumber('0')}
          type={ButtonType.Number}
          label="0"
          position={[0, 5]}
          width={2}
        />
        <ButtonComponent
          onClick={() => onCalculate()}
          type={ButtonType.Number}
          label="="
          position={[2, 5]}
          width={1}
        />
      </div>
    </div>
  )
}
