import React from 'react';
import { View } from 'react-native';
import Botao from './Botao'

//compomentes
const Caixa = ({ cor, flex }) => {
  return (
    <View style={{
      width: 100,
      height: 100,
      backgroundColor: cor,
      borderRadius: 5,
      flex: flex,

    }}>

    </View>

  )
}

const C = ({ navigation }) => {
  return (
    //pai
    <View style={{ flex: 1 , backgroundColor: '#fffff0' }}>
      <View style={{
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
      }}>
        <Caixa cor='red' />
        <Caixa cor='blue' />
        <Caixa cor='yellow' />

      </View>
      <Botao title={'Proxima'} onPress={() => { navigation.navigate('D') }} />
    </View>
  );
};
export default C;