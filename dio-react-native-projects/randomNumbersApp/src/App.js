import React, {useState} from 'react'
import {View, Text, StatusBar, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native'

const App = () => {
    const [num, setNum] = useState(0)

    const handleNum = () => {
        const newNum = Math.floor(Math.random() * 100)

        setNum(newNum)
    }


    return (
        <SafeAreaView style={style.container}>

            <Text style={style.number}>{num}</Text>

            <TouchableOpacity onPress={handleNum}>
                <Text style={style.button}>Generate numbers</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}


const style = StyleSheet.create({
    container: {
        backgroundColor: '#006437',
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
    },

    number: {
        color: '#FFFFFF',
        fontSize: 40,
    },

    button: {
        color: '#006437',
        fontSize: 25,
        backgroundColor:'#FFFFFF',
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
    }
});



export default App