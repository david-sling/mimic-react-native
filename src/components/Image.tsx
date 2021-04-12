import React from 'react'

export default function Image(props: any) {
  const { source } = props
  return <img {...props} src={source?.uri} />
}
