import React, { useState } from 'react'

import {
  View,
  Text,
  TextInput,
  ScrollView,
  Button,
  Switch
} from 'mimic-react-native'
import 'mimic-react-native/dist/index.css'

const App = () => {
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
