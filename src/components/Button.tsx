import React from 'react'

export default function Button(props: any) {
  var { children, style, dontCapitalize } = props
  style = {
    padding: '10px 20px',
    fontWeight: 600,
    letterSpacing: 1,
    ...style,
    backgroundColor: style?.color || 'rgb(33, 150, 243)',
    color: style?.textColor || '#fff'
  }
  if (!dontCapitalize) children = children.toUpperCase()
  return (
    <button {...props} style={style}>
      {children}
    </button>
  )
}
