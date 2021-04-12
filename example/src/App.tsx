import React from 'react'

import { View, Text, TextInput, ScrollView, Button } from 'mimic-react-native'
import 'mimic-react-native/dist/index.css'

const App = () => {
  return (
    <View>
      <Text style={{ color: 'red' }}>five</Text>
      <TextInput onChangeText={() => console.log(5)} />
      <ScrollView>5</ScrollView>
      <Button>button</Button>
    </View>
  )
}

export default App
