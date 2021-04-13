import React from 'react'
import { component } from '../utils/Interfaces'

interface Props extends component {
  children: string
  dontCapitalize?: boolean
  color?: string
  textColor?: string
}

export default function Button(props: Props) {
  var { children = '', style, dontCapitalize, textColor, color } = props
  style = {
    padding: '10px 20px',
    fontWeight: 600,
    letterSpacing: 1,
    border: 'none',
    ...style,
    backgroundColor: color || 'rgb(33, 150, 243)',
    color: textColor || '#fff'
  }
  if (!dontCapitalize) children = children.toUpperCase()
  return (
    <button {...props} style={style}>
      {children}
    </button>
  )
}
