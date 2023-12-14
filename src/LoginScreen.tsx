import React, {useState} from 'react'
import LinearGradient from 'react-native-linear-gradient';

import { View,StyleSheet,Text,TextInput,TouchableOpacity,Image } from 'react-native'

const styles = StyleSheet.create({
    background:{
        justifyContent: 'center',
        alignItems: 'center',    
        backgroundColor: "#BEADFA",
        height: "50%",
    },
    container:{
        marginTop: 70,
        paddingTop: 60,
        justifyContent: 'center',
        alignItems: 'center',    
        height: 240,
        width: 310,
        backgroundColor: "#fff",
        borderRadius: 16,
        elevation: 5, // 그림자의 깊이를 나타내는 값
    },
    input: {
        height: 40,
        width: 270,
        marginTop: 20,
        borderBottomColor: "black",
        borderBottomWidth: 1,
        paddingHorizontal: 10,
    },
    longbutton: {
        height: 53,
        width: 217,
        marginTop: 60,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',   
        elevation: 10, // Android에서 그림자 설정
        shadowColor: '#000', // iOS에서 그림자 색상
        shadowOffset: { width: 0, height: 4 }, // iOS에서 그림자 위치 (width, height)
        shadowOpacity: 0.5, // iOS에서 그림자 투명도
        shadowRadius: 3, // iOS에서 그림자의 흐림 정도
    },
    bigtext: {
        fontFamily: 'NotoSansKR-Light',
        color: 'white',
        fontSize: 18,
    },
    smalltext: {
        marginTop: 10,
        fontFamily: 'NotoSansKR-Light',
        color: '#B9B9B9',
        fontSize: 14,
    },
    logo: {
        width: 180, 
        height: 100,
        marginTop: 300,
        padding: 0,
    },
    smallcontainer: {
        alignItems: 'center',
        justifyContent: 'center',   
        marginTop: 40,
        
    }
});

type NavType = {
    navigation : any
}

const LoginScreen = ({navigation}: NavType) => {
    const [idinput, setIdinput] = useState('');
    const [pwinput, setPwinput] = useState('');


    const handleIdChange = (text:string) => {
        setIdinput(text);
    };

    const handlePwChange = (text:string) => {
        setPwinput(text);
    };

    return(
        <>
            <View style={styles.background}>
                <Image
                    style={styles.logo}
                    source={require('../img/Logo.png')}
                />
                <View style={styles.container}>
                    
                    <TextInput 
                        style={styles.input}
                        placeholder="아이디"
                        onChangeText={handleIdChange}
                        value={idinput}                        
                    />
                    <TextInput 
                        style={styles.input}
                        placeholder="비밀번호"
                        onChangeText={handlePwChange}
                        value={pwinput}   
                        secureTextEntry={true}              
                    />
                    <TouchableOpacity 
                            onPress={() => navigation.navigate('Main')}
                        >
                        <LinearGradient
                            colors={['#BEADFA', '#DFCCFB']}
                            style={styles.longbutton}
                            start={{ x: 0, y: 0 }} // 시작점
                            end={{ x: 1, y: 0 }}   // 종료점
                        >
                            <Text style={styles.bigtext}>로그인</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                <View style={styles.smallcontainer}>
                    <Text style={styles.smalltext}>아이디/비밀번호 찾기</Text>
                    <Text style={styles.smalltext}>회원가입</Text>
                </View>
            </View>
        </>
    )
}

export default LoginScreen;