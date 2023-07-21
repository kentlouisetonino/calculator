'use client'
import { Fragment } from 'react'
import Calculator from '../Calculator/Calculator'

export default function Landing() {
  return (
    <Fragment>
      <div className="bg-black flex flex-col min-h-screen items-center justify-center">
        <Calculator />
      </div>
    </Fragment>
  )
}
