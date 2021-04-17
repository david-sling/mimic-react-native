import React from 'react'
import { component } from '../utils/Interfaces'

interface Props extends component {
  data?: any | []
  renderItem?: any
  keyExtractor?: (any: any) => any
}

export default function FlatList(props: Props) {
  const {
    data = [],
    keyExtractor,
    renderItem: RenderItem //= ({ item }: any) => <div key={item} />
  } = props
  return data.map((item: [any]) => {
    RenderItem && (
      <RenderItem item={item} key={keyExtractor && keyExtractor(item)} />
    )
  })
}
