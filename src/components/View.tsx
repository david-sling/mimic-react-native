import React from 'react'

export default function View(props: any) {
  const { children, style } = props
  return (
    <div {...props} style={style}>
      {children}
    </div>
  )
}
