# mimic-react-native

> Used to mimic react-native components in react-dom

### Under Development

[![NPM](https://img.shields.io/npm/v/mimic-react-native.svg)](https://www.npmjs.com/package/mimic-react-native) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save mimic-react-native
```

## Usage

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

## License

MIT © [david-sling](https://github.com/david-sling)
