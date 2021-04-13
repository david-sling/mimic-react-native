import * as React from 'react'
import { component } from '../utils/Interfaces'

interface Props extends component {
  children?: React.ReactNode | string
  elementType?: keyof JSX.IntrinsicElements &
    ('p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'a')
}

export default function (props: Props): JSX.Element {
  const { children, elementType: ElementType = 'p', style } = props
  return (
    <ElementType {...props} style={style}>
      {children}
    </ElementType>
  )
}
