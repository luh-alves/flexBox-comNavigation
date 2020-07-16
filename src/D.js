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

const D = ({navigation}) => {
    return (
        //pai
        <View style={{ flex: 1 , backgroundColor: '#fffff0' }}>
            <View style={{
                flexDirection: 'column',
                flex: 1,
            }}>
                <Caixa cor='red' />
            </View>
            <View style={{ alignItems: 'center', flex: 1 }} >
                <Caixa cor='blue' />
            </View>
            <View style={{ alignItems: 'flex-end' }}>
                <Caixa cor='yellow' />

            </View>
            <Botao title={'Proxima'} onPress={() => { navigation.navigate('E') }} />
        </View>
    );
};
export default D;