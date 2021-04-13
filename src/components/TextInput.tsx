import React from 'react'
import { component } from '../utils/Interfaces'

interface Props extends component {
  value?: string
  onChangeText?: any
  onChange?: any
}

export default function TextInput(props: Props) {
  var { value, onChangeText, onChange } = props
  onChangeText = onChangeText || onChange
  return <input {...props} onChange={onChangeText} value={value} />
}
