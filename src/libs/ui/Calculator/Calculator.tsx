import { useEffect, useState } from 'react'
import CalculatorService from '../../services/CalculatorService'
import { ArithmeticSymbols } from '../../services/types'
import Button from '../Button/Button'
import { ButtonType } from '../Button/types'
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
    CalculatorService.calculate(
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
        <Button position={[0, 1]} width={2} onClick={() => onClear()}>
          CLEAR
        </Button>
        <Button position={[2, 1]} width={2} onClick={() => onDelete()}>
          DEL
        </Button>
        <Button
          position={[3, 2]}
          disabled={hasOperation}
          onClick={() => onClickOperation('/')}
        >
          /
        </Button>
        <Button
          position={[3, 3]}
          disabled={hasOperation}
          onClick={() => onClickOperation('x')}
        >
          x
        </Button>
        <Button
          disabled={hasOperation}
          position={[3, 4]}
          onClick={() => onClickOperation('-')}
        >
          -
        </Button>
        <Button
          disabled={hasOperation}
          position={[3, 5]}
          onClick={() => onClickOperation('+')}
        >
          +
        </Button>

        {/* Numbers */}
        <Button
          type={ButtonType.Number}
          position={[2, 2]}
          onClick={() => onClickNumber('9')}
        >
          9
        </Button>
        <Button
          type={ButtonType.Number}
          position={[1, 2]}
          onClick={() => onClickNumber('8')}
        >
          8
        </Button>
        <Button
          type={ButtonType.Number}
          position={[0, 2]}
          onClick={() => onClickNumber('7')}
        >
          7
        </Button>
        <Button
          type={ButtonType.Number}
          position={[2, 3]}
          onClick={() => onClickNumber('6')}
        >
          6
        </Button>
        <Button
          type={ButtonType.Number}
          position={[1, 3]}
          onClick={() => onClickNumber('5')}
        >
          5
        </Button>
        <Button
          type={ButtonType.Number}
          position={[0, 3]}
          onClick={() => onClickNumber('4')}
        >
          4
        </Button>
        <Button
          type={ButtonType.Number}
          position={[2, 4]}
          onClick={() => onClickNumber('3')}
        >
          3
        </Button>
        <Button
          type={ButtonType.Number}
          position={[1, 4]}
          onClick={() => onClickNumber('2')}
        >
          2
        </Button>
        <Button
          type={ButtonType.Number}
          position={[0, 4]}
          onClick={() => onClickNumber('1')}
        >
          1
        </Button>
        <Button
          type={ButtonType.Number}
          position={[0, 5]}
          width={2}
          onClick={() => onClickNumber('0')}
        >
          0
        </Button>
        <Button
          type={ButtonType.Number}
          position={[2, 5]}
          width={1}
          onClick={() => onCalculate()}
        >
          =
        </Button>
      </div>
    </div>
  )
}
