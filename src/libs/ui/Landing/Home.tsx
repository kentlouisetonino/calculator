import { Fragment } from 'react'
import Calculator from '../Calculator/Calculator'
import Header from '../Header/Header'
import styles from './index.module.css'

export default function Landing() {
  return (
    <Fragment>
      <Header title="Web Calculator" />
      <div className={`${styles.containerOne}`}>
        <Calculator />
      </div>
    </Fragment>
  )
}
