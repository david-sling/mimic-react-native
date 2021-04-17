import React, { useState } from 'react'

import {
  View,
  Text,
  TextInput,
  ScrollView,
  Button,
  Switch,
  FlatList
} from 'mimic-react-native'
import 'mimic-react-native/dist/index.css'

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

const App = () => {
  const [checked, setChecked] = useState(false)
  return (
    <View>
      <Text elementType='h1' style={{ color: 'grey' }}>
        STRING
      </Text>
      <TextInput onChangeText={() => console.log(5)} />
      <ScrollView>5</ScrollView>
      <Button onClick={() => console.log(5)}>button</Button>
      <Switch
        size={10}
        onValueChange={() => setChecked(!checked)}
        value={checked}
      />
      <FlatList
        keyExtractor={(item) => item.key}
        data={data}
        renderItem={({ item }: any) => <p>{item.name}</p>}
      />
    </View>
  )
}

export default App
