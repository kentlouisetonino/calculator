'use client'
import { Fragment } from 'react'
import Calculator from '../Calculator/Calculator'
import styles from './index.module.css'

export default function Landing() {
  return (
    <Fragment>
      <div className={`${styles.containerOne}`}>
        <Calculator />
      </div>
    </Fragment>
  )
}
