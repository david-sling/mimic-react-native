import React from 'react'
import { component } from '../utils/Interfaces'

// interface Props {
//   style?: any
//   children?: any
//   className?: string
//   id?: string
// }

export default function View(props: component) {
  var { children, style } = props
  style = { display: 'flex', flexDirection: 'column', ...style }
  return (
    <div {...props} style={style}>
      {children}
    </div>
  )
}
