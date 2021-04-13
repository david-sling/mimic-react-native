import React from 'react'
import { component } from '../utils/Interfaces'

interface Props extends component {
  source?: { uri: string }
}

export default function Image(props: Props) {
  const { source } = props
  return <img {...props} src={source?.uri} />
}
