import { Fragment } from 'react'

import HeadComponent from '../../components/head/HeadComponent'
import CalculatorComponent from '../../components/calculator/CalculatorComponent'
import styles from './HomePage.module.css'

const HomePage = () => {
  return (
    <Fragment>
      <HeadComponent title='Calculator' />
      <div className={`${styles.containerOne}`}>
        <CalculatorComponent />
      </div>
    </Fragment>
  )
}

export default HomePage
