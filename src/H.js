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

const H = ({navigation}) => {
    return (
        //pai
        <View style={{ flex: 1 , backgroundColor: '#fffff0' }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,


            }}>
                <View style={{flex:1, justifyContent:'space-venly'}}>
                    <Caixa cor='red' />
                    <Caixa cor='blue' />
                </View>
            </View>
            <Botao title={'Proxima'} onPress={() => { navigation.navigate('I') }} />
        </View >
    );
};
export default H;