import React from 'react';
import { View, ImageBackground } from 'react-native';
import imagem from './imagens/imagem.png'
import Botao from './Botao'

const Inicio = ({ navigation }) => {
    return (
            <ImageBackground source={imagem} style={styles.image} >
                <Botao title={'Inicio'} onPress={() => { navigation.navigate('A') }} />
            </ImageBackground>
        

    )
}

const styles = {
    container: {
        flex: 1,       
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    logoView: {
        justifyContent: 'center',
        alignSelf: 'center',
        flex: 1
    },
}

export default Inicio;