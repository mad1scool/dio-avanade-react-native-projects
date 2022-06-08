import React from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView, StatusBar, Pressable, Linking} from 'react-native';

const colorGit = '#010409';
const textColorGit = '#C9D1D9'
const textColor2Git = '#4F565E'
const imageDudu = 'https://www.lance.com.br/files/article_main/uploads/2022/04/04/624af0e6713b1.jpeg'
const urlGit = 'https://github.com/mad1scool'

const App = () => {

    const handlePressToGit = async () => {
       console.log('Verificando link');
       const res = await Linking.canOpenURL(urlGit); //API nativa do RN para abrir URLs
       if(res) {
        console.log('link aprovado');
        console.log('abrindo link');
        await Linking.openURL(urlGit);
       }
    } //A verificação para permitir que o dispositivo abra o link deve ser feita de forma nativa

    return (
    
    <SafeAreaView style={style.container}>
        <StatusBar backgroundColor={colorGit}  barStyle='light-content'/>
        <View style={style.content}>
            <Image accessibilityLabel='Dudu'
            style={style.avatar}
            source={{uri: imageDudu}} />
            <Text accessibilityLabel='nome' style={[style.text, style.name]}>Roberto Amorim</Text>
            <Text accessibilityLabel='nick' style={[style.text, style.nickname]}>mad1scool</Text>
            <Text accessibilityLabel='descrição'style={[style.text, style.description]}>Garoto de programa em formação | IG: @_roberto.amorim_</Text>

            <Pressable onPress={handlePressToGit}>
                <View>
                    <Text style={style.button}>Open in GitHub</Text>
                </View>
            </Pressable>
            
        </View>
    </SafeAreaView>

    );
}

export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor: colorGit,
        flex: 1, //expandir para a tela inteira
        justifyContent: 'center',
    },
    content: {
        alignItems: 'center',
        padding: 20,
    },

    text: {
        color: textColorGit,
    },

    name: {
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 25,
    },

    nickname: {
        color: textColor2Git,
        fontSize: 20,
    },

    description: {
        fontWeight: 'bold',
        fontSize: 14,
    },

    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },

    button: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
        color: textColorGit,
        backgroundColor: textColor2Git,
        borderRadius: 10,
        padding: 20,
    }
});