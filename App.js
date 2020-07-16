import 'react-native-gesture-handler'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Inicio from './src/Inicio'
import A from './src/A'
import B from './src/B'
import C from './src/C'
import D from './src/D'
import E from './src/E'
import F from './src/F'
import G from './src/G'
import H from './src/H'
import I from './src/I'
import J from './src/J'
import L from './src/L'
import M from './src/M'


const Stack = createStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio" screenOptions={{ headerShown: false, transitionSpec: { open: config, close: config  }}} >
        <Stack.Screen name="Inicio" component={Inicio}  />
        <Stack.Screen name="A" component={A} />
        <Stack.Screen name="B" component={B} />
        <Stack.Screen name="C" component={C} />
        <Stack.Screen name="D" component={D} />
        <Stack.Screen name="E" component={E} />
        <Stack.Screen name="F" component={F} />
        <Stack.Screen name="G" component={G} />
        <Stack.Screen name="H" component={H} />
        <Stack.Screen name="I" component={I} />
        <Stack.Screen name="J" component={J} />
        <Stack.Screen name="L" component={L} />
        <Stack.Screen name="M" component={M} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
const config = {
  animation: 'spring',
  config: {
    stiffness: 300,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
export default App
