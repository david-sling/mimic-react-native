# mimic-react-native

Used to mimic react-native components in react-dom

Click [here](https://www.npmjs.com/package/mimic-react-native) to see in npmjs.com

### Under Development

[![NPM](https://img.shields.io/npm/v/mimic-react-native.svg)](https://www.npmjs.com/package/mimic-react-native) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install mimic-react-native
```

## Usage

#### Changing from react-native to react-dom

Change `react-native` imports to `mimic-react-native`

E.g:

```bash
import {View, Text} from 'react-native' //DELETE
import {View, Text} from 'mimic-react-native' //ADD
```

#### Using Directly in react-dom

```tsx
import React, { useState } from 'react'

import {
  View,
  Text,
  TextInput,
  ScrollView,
  Button,
  Switch
} from 'mimic-react-native'

const ExampleApp = () => {
  const [checked, setChecked] = useState(false)
  return (
    <View>
      <Text style={{ color: 'red' }}>five</Text>
      <TextInput onChangeText={() => console.log(5)} />
      <ScrollView>5</ScrollView>
      <Button>button</Button>
      <Switch onValueChange={() => setChecked(!checked)} value={checked} />
    </View>
  )
}

export default App
```

#### Typescript Interfaces:

```ts
interface AllComponents {
  //All Components share these props.
  style?: React.CSSProperties
  children?: React.ReactNode | string
  className?: string
  id?: string
}

interface TextProps extends AllComponents {
  children?: React.ReactNode | string
  elementType?: keyof JSX.IntrinsicElements &
    ('p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'a')
}

interface ButtonProps extends AllComponents {
  children: string
  dontCapitalize?: boolean
  color?: string
  textColor?: string
  //color represents the backgroundColor
}

interface ImageProps extends AllComponents {
  source?: { uri: string }
}

interface SwitchProps extends AllComponents {
  size?: number
  value?: any
  onValueChange?: any
  thumbColor?: string
  trackColor?: TrackColor
}

interface TextInputProps extends AllComponents {
  value?: string
  onChangeText?: any
  onChange?: any
  //onChange and onChangeText represent the same. onChangeText overwrites onChange
}
```

## License

MIT © [david-sling](https://github.com/david-sling)
