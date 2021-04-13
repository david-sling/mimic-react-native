import React from 'react'
import { component } from '../utils/Interfaces'

interface Props extends component {
  size?: number
  value?: any
  onValueChange?: any
  thumbColor?: string
  trackColor?: TrackColor
}

interface TrackColor {
  true?: any
  false?: any
}

export default function Switch(props: Props) {
  var {
    size = 20,
    value,
    onValueChange,
    thumbColor = 'silver',
    trackColor = { true: null, false: null }
  } = props
  trackColor.true = trackColor?.true || '#81b0ff'
  trackColor.false = trackColor?.false || '#767577'
  return (
    <label
      style={{
        position: 'relative',
        margin: size / 2
      }}
      {...props}
    >
      <input
        style={{
          width: 0,
          height: 0,
          opacity: 0
        }}
        {...props}
        type='checkbox'
        value={value}
        onChange={onValueChange}
      />
      <span
        style={{
          position: 'absolute',
          backgroundColor: value ? trackColor.true : trackColor.false,
          borderRadius: 999,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <span
          style={{
            width: size,
            height: size,
            backgroundColor: thumbColor,
            borderRadius: 999,
            display: 'flex',
            transition: '0.2s',
            transform: !value
              ? 'translateX(0) scale(2)'
              : 'translateX(200%) scale(2)'
          }}
        ></span>
        <span
          style={{
            width: size,
            height: size,
            backgroundColor: 'none',
            borderRadius: 999,
            display: 'flex'
          }}
        ></span>
        <span
          style={{
            width: size,
            height: size,
            backgroundColor: 'none',
            borderRadius: 999,
            display: 'flex'
          }}
        ></span>
      </span>
    </label>
  )
}
