import React from 'react'

export default function Text(props: any) {
  var { children } = props
  return <p {...props}>{children}</p>
}
