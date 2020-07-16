import React from 'react';
import { TouchableOpacity, Text } from 'react-native';


const Botao = (props) => {

    return (
       
            <TouchableOpacity style={styles.styleButton} onPress={props.onPress}>
                <Text style={styles.buttonText}>{props.title}</Text>
            </TouchableOpacity>
        

    )
}
const styles = {
    container: {
        flex: 1,
        alignItems: 'center'
    },
    styleButton: {
        borderColor: '#f6aa1c',
        marginLeft:100,
        height: 50,
        width: 200,
        backgroundColor: '#6a040f',
        borderWidth: 2.5,
        margin: 20,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
    },
    buttonText: {
        textAlign: "center",
        fontSize: 20,
        color: '#ffffff',
    }

}
export default Botao;