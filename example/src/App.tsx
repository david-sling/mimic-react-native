import React from 'react'

import { View, Text, Image } from 'mimic-react-native'
import 'mimic-react-native/dist/index.css'

const App = () => {
  return (
    <View>
      <Text style={{ color: 'red' }}>five</Text>
      <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
    </View>
  )
}

export default App
