import { Fragment } from 'react'
import CalculatorComponent from '../../components/calculator'
import HeadComponent from '../../components/header'
import styles from './index.module.css'

export default function Home() {
  return (
    <Fragment>
      <HeadComponent title="Web Calculator" />
      <div className={`${styles.containerOne}`}>
        <CalculatorComponent />
      </div>
    </Fragment>
  )
}
