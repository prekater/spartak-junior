import { BaseSyntheticEvent } from 'react'
import { E164Number } from 'libphonenumber-js'

export type TTestForm = {
  age: string
  future: string
  skill: string
  position: string
  firstLesson: string
  name: string
  phone: E164Number | undefined
  isAgree: true
}

export interface IStep {
  formValues: TTestForm
  onChange: (e: BaseSyntheticEvent) => void
}
