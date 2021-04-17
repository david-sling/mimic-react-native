import React from 'react'
import { component } from '../utils/Interfaces'

interface Props extends component {
  dontCapitalize?: boolean
  color?: string
  textColor?: string
  onClick?: any
  onPress?: any
}

export default function Button(props: Props) {
  var {
    children = '',
    style,
    dontCapitalize,
    textColor,
    color,
    onPress,
    onClick
  } = props
  style = {
    padding: '10px 20px',
    fontWeight: 600,
    letterSpacing: 1,
    border: 'none',
    ...style,
    backgroundColor: color || 'rgb(33, 150, 243)',
    color: textColor || '#fff'
  }
  if (!dontCapitalize) children = children?.toString().toUpperCase() || ''
  return (
    <button {...props} onClick={onPress || onClick} style={style}>
      {children}
    </button>
  )
}
