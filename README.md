# mimic-react-native

Used to mimic react-native components in react-dom

Click [here](https://www.npmjs.com/package/mimic-react-native) to see in npmjs.com

## `Under Development`

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

//Only these components are currently functioning. This library is still under development.
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Button,
  Switch,
  Flatlist
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
      <FlatList
        keyExtractor={(item) => item.key}
        data={data}
        renderItem={({ item }: any) => <p>{item.name}</p>}
      />
    </View>
  )
}

export default App
```

#### API:

## `<View>`, `<ScrollView>`, `<SafeAreaView>`

These three are the same component exported in different names.

```tsx
import { View } from 'mimic-react-native'

export default function () {
  return <View {...props}>{children}</View>
}
```

| prop      | value                       | required |
| --------- | --------------------------- | -------- |
| children  | React.ReactNode (or) string | No       |
| style     | React.CSSProperties         | No       |
| className | string                      | No       |
| id        | string                      | No       |

## `<Text>`

```tsx
import { View, Text } from 'mimic-react-native'

export default function () {
  return (
    <View>
      <Text elementType='h1'>children</Text>
    </View>
  )
}
```

| prop        | Allowed values                               | required | default |
| ----------- | -------------------------------------------- | -------- | ------- |
| elementType | 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'a' | No       | 'p'     |
| children    | React.ReactNode (or) string                  | Yes      |
| style       | React.CSSProperties                          | No       |
| className   | string                                       | No       |
| id          | string                                       | No       |

## `<Image>`

```tsx
import { View, Image } from 'mimic-react-native'

export default function () {
  return (
    <View>
      <Image source={{ uri: 'image://url' }} />
    </View>
  )
}
```

| prop      | Allowed values      | required |
| --------- | ------------------- | -------- |
| source    | { uri: string }     | Yes      |
| style     | React.CSSProperties | No       |
| className | string              | No       |
| id        | string              | No       |

## `<TextInput>`

```tsx
import { View, TextInput } from 'mimic-react-native'

export default function () {
  return (
    <View>
      <TextInput />
    </View>
  )
}
```

| prop                       | value                       | required |
| -------------------------- | --------------------------- | -------- |
| value                      | number (or) string          | No       |
| onChangeText (or) onChange | function(newValue) { }      | No       |
| children                   | React.ReactNode (or) string | No       |
| style                      | React.CSSProperties         | No       |
| className                  | string                      | No       |
| id                         | string                      | No       |

## `<Button>`

```tsx
import { Button } from 'mimic-react-native'

export default function () {
  return (
    <Button color='red' textColor='black'>
      TEXT
    </Button>
  )
}
```

| prop                 | value                       | required | default             |
| -------------------- | --------------------------- | -------- | ------------------- |
| dontCapitalize       | boolean                     | No       | false               |
| color                | string                      | No       | "rgb(33, 150, 243)" |
| textColor            | string                      | No       | "#FFF"              |
| onPress (or) onClick | function                    | No       |
| children             | React.ReactNode (or) string | No       |
| style                | React.CSSProperties         | No       |
| className            | string                      | No       |
| id                   | string                      | No       |

## `<Switch>`

```tsx
import { Switch } from 'mimic-react-native'

export default function () {
  return <Switch />
}
```

| prop          | value                           | required | default                               |
| ------------- | ------------------------------- | -------- | ------------------------------------- |
| size          | number                          | No       | 20                                    |
| value         | boolean                         | yes      | false                                 |
| onValueChange | function(newValue) { }          | No       |
| thumbColor    | string                          | No       | 'silver'                              |
| trackColor    | { true: string, false: string } | No       | { true: '#81b0ff', false: '#767577' } |
| children      | React.ReactNode (or) string     | No       |
| style         | React.CSSProperties             | No       |
| className     | string                          | No       |
| id            | string                          | No       |

## `<FlatList>`

```tsx
import { FlatList } from 'mimic-react-native'

export default function () {
  const data = [
    {
      key: 1,
      name: 'a'
    },
    {
      key: 2,
      name: 'b'
    },
    {
      key: 3,
      name: 'c'
    }
  ]
  return (
    <FlatList
      keyExtractor={(item) => item.key}
      data={data}
      renderItem={({ item }: any) => <p>{item.name}</p>}
    />
  )
}
```

| prop         | value                        | required | default |
| ------------ | ---------------------------- | -------- | ------- |
| data         | [ any ]                      | No       | [ ]     |
| renderItem   | ({ item }) => \<Component /> | No       |
| keyExtractor | (item) => key                | No       |
| children     | React.ReactNode (or) string  | No       |
| style        | React.CSSProperties          | No       |
| className    | string                       | No       |
| id           | string                       | No       |

#### License

MIT © [david-sling](https://github.com/david-sling)
