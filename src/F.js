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
            margin: 4,
        }}>

        </View>

    )
}

const CaixaYellow = ({ cor, flex }) => {
    return (
        <View style={{
            width: 100,
            height: 100,
            backgroundColor: cor,
            borderRadius: 5,
            flex: flex,
            margin: 4,
            alignSelf: 'flex-end',
        }}>

        </View>

    )
}
const F = ({navigation}) => {
    return (
        //pai
        <View style={{ flex: 1 , backgroundColor: '#fffff0'  }}>
            <View style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'space-between ',
            }}>
                <Caixa cor='red' />
                <Caixa cor='blue' />
                <CaixaYellow cor='yellow' />
            </View>
            <Botao title={'Proxima'} onPress={() => { navigation.navigate('G') }} />
        </View>
    );
};
export default F;