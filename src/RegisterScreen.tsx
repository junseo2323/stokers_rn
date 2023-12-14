import React, {useState} from 'react'
import LinearGradient from 'react-native-linear-gradient';

import { View,StyleSheet,Text,TextInput,TouchableOpacity,Image } from 'react-native'

const RadioButtonExample = () => {
    const [selectedOption, setSelectedOption] = useState('');
  
    const handleOptionSelect = (option:string) => {
      setSelectedOption(option);
    };
  
    return (
      <View style={radiostyles.container}>
        <Text>주식경험</Text>
        <TouchableOpacity
          style={[radiostyles.radioButton, selectedOption === 'option1' && radiostyles.radioButtonSelected]}
          onPress={() => handleOptionSelect('option1')}
        />

        <TouchableOpacity
          style={[radiostyles.radioButton, selectedOption === 'option2' && radiostyles.radioButtonSelected]}
          onPress={() => handleOptionSelect('option2')}
        />
  
        <TouchableOpacity
          style={[radiostyles.radioButton, selectedOption === 'option3' && radiostyles.radioButtonSelected]}
          onPress={() => handleOptionSelect('option3')}
        />

        <TouchableOpacity
          style={[radiostyles.radioButton, selectedOption === 'option4' && radiostyles.radioButtonSelected]}
          onPress={() => handleOptionSelect('option4')}
        />

        <TouchableOpacity
          style={[radiostyles.radioButton, selectedOption === 'option5' && radiostyles.radioButtonSelected]}
          onPress={() => handleOptionSelect('option5')}
        />
        
      </View>
    );
  };
  
  const radiostyles = StyleSheet.create({
    container: {
        marginTop: 30,
        alignItems: 'center',
        flexDirection: 'row',
    },
    radioButton: {
        width: 30,
        height: 30,
        backgroundColor: "#D2D2D2",
        borderRadius: 32,
        marginLeft: 10,
    },
    radioButtonSelected: {
      backgroundColor: '#BEADFA',  // 선택된 옵션에 배경색을 지정
    },
  });

  
const styles = StyleSheet.create({
    background:{
        justifyContent: 'center',
        alignItems: 'center',    
        backgroundColor: "#BEADFA",
        height: "50%",
    },
    container:{
        marginTop: 10,
        paddingTop: 90,
        justifyContent: 'center',
        alignItems: 'center',    
        height: 440,
        width: 310,
        backgroundColor: "#fff",
        borderRadius: 16,
        elevation: 5, // 그림자의 깊이를 나타내는 값
    },
    input: {
        height: 40,
        width: 270,
        marginTop: 30,
        borderBottomColor: "black",
        borderBottomWidth: 1,
        paddingHorizontal: 10,
    },
    longbutton: {
        height: 43,
        width: 150,
        marginTop: 90,
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
        marginTop: 170,
        fontFamily: 'NotoSansKR-Bold',
        color: 'white',
        fontSize: 24,
    },
    middletext: {
        fontFamily: 'NotoSansKR-Light',
        color: 'white',
        fontSize: 16,
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

const RegisterScreen = ({navigation}: NavType) => {
    const [idinput, setIdinput] = useState('');
    const [pwinput, setPwinput] = useState('');
    const [pw2input, setPw2input] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');



    const handleIdChange = (text:string) => {
        setIdinput(text);
    };

    const handlePwChange = (text:string) => {
        setPwinput(text);
    };

    const handlePw2Change = (text:string) => {
        setPw2input(text);
    };

    const handleEmailChange = (text:string) => {
        setEmail(text);
    };

    const handlePhoneChange = (text:string) => {
        setPhone(text);
    };

    return(
        <>
            <View style={styles.background}>
                <Text style={styles.bigtext}>회원가입</Text>
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
                    <TextInput 
                        style={styles.input}
                        placeholder="비밀번호확인"
                        onChangeText={handlePw2Change}
                        value={pw2input}   
                        secureTextEntry={true}              
                    />
                    <TextInput 
                        style={styles.input}
                        placeholder="휴대폰 번호"
                        keyboardType="phone-pad" 
                        onChangeText={handlePhoneChange}
                        value={phone}   
                    />
                    <TextInput 
                        style={styles.input}
                        placeholder="이메일"
                        onChangeText={handleEmailChange}
                        keyboardType="email-address"
                        value={email}   
                    />
                    <RadioButtonExample />
                    <TouchableOpacity 
                            onPress={() => navigation.navigate('Main')}
                        >
                        <LinearGradient
                            colors={['#BEADFA', '#DFCCFB']}
                            style={styles.longbutton}
                            start={{ x: 0, y: 0 }} // 시작점
                            end={{ x: 1, y: 0 }}   // 종료점
                        >
                            <Text style={styles.middletext}>회원가입</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

export default RegisterScreen;