import React from 'react';
import { View } from 'react-native';
import Botao from './Botao'

//compomentes
const Caixa = ({ cor, flex }) => {
    return (
        <View style={{
            backgroundColor: cor,
            borderRadius: 5,
            flex: flex,
            margin: 4,
        }}>

        </View>

    )
}

const I = ({navigation}) => {
    return (
        //pai
        <View style={{ height: 600, flex: 1 , backgroundColor: '#fffff0' }}>
            <View style={{
                flexDirection: 'column',
                flex: 1,
            }}>
                <Caixa cor='red' flex={3} />
                <Caixa cor='blue' flex={1} />
                <Caixa cor='yellow' flex={2} />

            </View>
            <Botao title={'Proxima'} onPress={() => { navigation.navigate('J') }} />
        </View>
    );
};
export default I;