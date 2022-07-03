import React from 'react'

import styles from './CalculatorComponent.module.css'
import ButtonComponent from '../button/ButtonComponent'
import ButtonType from '../button/types/ButtonType'

const CalculatorComponent: React.FC = () => {
  return (
    <div className={`${styles.containerOne}`}>
      <div className={`${styles.containerGrid}`}>
        {/* Display */}
        <div className={`${styles.containerDisplay}`}>1</div>

        {/* Operations */}
        <ButtonComponent label='AC' position={[0, 1]} width={2} />
        <ButtonComponent label='DEL' position={[2, 1]} width={2} />
        <ButtonComponent label='-' position={[3, 2]} />
        <ButtonComponent label='+' position={[3, 3]} />
        <ButtonComponent label='=' position={[3, 4]} height={2} />

        {/* Numbers */}
        <ButtonComponent type={ButtonType.Number} label='9' position={[2, 2]} />
        <ButtonComponent type={ButtonType.Number} label='8' position={[1, 2]} />
        <ButtonComponent type={ButtonType.Number} label='7' position={[0, 2]} />
        <ButtonComponent type={ButtonType.Number} label='6' position={[2, 3]} />
        <ButtonComponent type={ButtonType.Number} label='5' position={[1, 3]} />
        <ButtonComponent type={ButtonType.Number} label='4' position={[0, 3]} />
        <ButtonComponent type={ButtonType.Number} label='3' position={[2, 4]} />
        <ButtonComponent type={ButtonType.Number} label='2' position={[1, 4]} />
        <ButtonComponent type={ButtonType.Number} label='1' position={[0, 4]} />
        <ButtonComponent
          type={ButtonType.Number}
          label='0'
          position={[0, 5]}
          width={3}
        />
      </div>
    </div>
  )
}

export default CalculatorComponent
