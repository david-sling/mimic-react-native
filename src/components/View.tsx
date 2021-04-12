import React from 'react'

export default function View(props: any) {
  var { children, style } = props
  style = { display: 'flex', flexDirection: 'column', ...style }
  return (
    <div {...props} style={style}>
      {children}
    </div>
  )
}
