import React from 'react'

export default function TextInput(props: any) {
  var { value, onChangeText, onChange } = props
  onChangeText = onChangeText || onChange
  return <input {...props} onChange={onChangeText} value={value} />
}
