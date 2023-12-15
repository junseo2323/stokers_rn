import React,{useRef, useEffect, useState} from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {ScrollView,StatusBar, Animated, StyleSheet, Text, View,TouchableOpacity, Image,Easing} from 'react-native';

const styles = StyleSheet.create({
    maincontainer: {
        backgroundColor: '#BEADFA',
    },
    container: {
        paddingLeft: 30,
        paddingTop: 15,
        height: 115
    },
    smalltext: {
        fontFamily: 'NotoSansKR-Medium',
        marginTop: 10,
        fontSize: 16,
        color: 'white',
    },
    middletext: {
        fontFamily: 'NotoSansKR-Medium',
        marginTop: 10,
        fontSize: 28,
        color: 'white',
    },
    bigtext: {
        fontFamily: 'NotoSansKR-Bold',
        fontWeight: 'bold',
        marginTop: 10,
        fontSize: 36,
        color: 'white',
    },
    overlayImage: {
        position: 'absolute', // 절대 위치 설정
        top: '6.5%', // 위에서부터의 거리
        left: '45%', // 왼쪽에서부터의 거리
        width: 190, // 너비를 화면의 100%로 설정
        height: 290, // 높이를 화면의 100%로 설정
        resizeMode: 'cover', // 이미지의 화면 채우기 설정
    },
    progresscontainer: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    progressBarContainer: {
        width: 300,
        height: 35,
        backgroundColor: '#e0e0e0',
        borderRadius: 20,
        overflow: 'hidden',
      },
    progressBar: {
        height: '100%',
        borderRadius:20,
        backgroundColor: '#6f6ffa',
    },    
    progressBarText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: "400",
        marginTop: 6,
        marginLeft: 20,
    }
});

const downstyles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignItems: 'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: 900,
    },
    longbutton: {
        height: 72,
        width: 290,
        marginTop: 40,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',   
        elevation: 10, // Android에서 그림자 설정
        shadowColor: '#000', // iOS에서 그림자 색상
        shadowOffset: { width: 0, height: 4 }, // iOS에서 그림자 위치 (width, height)
        shadowOpacity: 0.5, // iOS에서 그림자 투명도
        shadowRadius: 3, // iOS에서 그림자의 흐림 정도
    },
    shortbutton: {
        height: 165,
        width: 165,
        marginTop: 30,
        borderRadius: 16,
        marginRight: 10,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',   
        elevation: 5, // Android에서 그림자 설정
        shadowColor: '#000', // iOS에서 그림자 색상
        shadowOffset: { width: 0, height: 4 }, // iOS에서 그림자 위치 (width, height)
        shadowOpacity: 0.5, // iOS에서 그림자 투명도
        shadowRadius: 3, // iOS에서 그림자의 흐림 정도
    },
    bigtext: {
        color: 'white',
        fontSize: 18,
        fontWeight: "bold",
    },
    titletext: {
        color: "black",
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    newstext: {
        color: "#907BA9",
        fontSize: 13,
        fontWeight: "bold",
        marginTop: 10
    },
    newscontainer: {
        marginTop: 30,
        width: 300,
        alignItems: 'flex-start',
    },
    buttoncontainer: {
        flexDirection: 'row', // 가로로 정렬
        justifyContent: 'space-between', // 각 아이템 사이의 간격을 최대한으로 설정
        paddingHorizontal: 10, // 옆 여백
        marginTop: 20, // 위 여백
    
    }
});



type NavType = {
    navigation : any
}

const MainScreen = ({navigation}: NavType) => {
    const [verticalVal, setVerticalVal] = useState(new Animated.Value(0));
    const [progress, setProgress] = useState(70);

    useEffect(() => {
        const animate = () => {
          Animated.timing(
            verticalVal, {
              toValue: 30,
              duration: 1000, 
              easing: Easing.inOut(Easing.quad),
              useNativeDriver: true
            }
          ).start(() => {
            // 첫 번째 애니메이션이 완료된 후 실행되는 콜백
            Animated.timing(
              verticalVal, {
                toValue: 0,
                duration: 1000, 
                easing: Easing.inOut(Easing.quad),
                useNativeDriver: true
              }
            ).start(() => {
              // 두 번째 애니메이션이 완료된 후 실행되는 콜백
              animate(); // 재귀적으로 다시 호출하여 반복
            });
          });
        };
        
        animate();
      
        return () => {
          verticalVal.removeAllListeners();
        };
      }, [verticalVal]);

    return (
        <>
            <ScrollView>
                <View style={styles.maincontainer}>
                    <View style={styles.container}>
                        <Text style={styles.smalltext}>가내수공업</Text>
                        <Text style={styles.bigtext}>주식짱짱맨</Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.smalltext}>퀘스트 진행도</Text>
                        <Text style={styles.middletext}>1단계</Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.smalltext}>관심분야</Text>
                        <Text style={styles.middletext}>이차전지</Text>
                    </View>
                    <View style={downstyles.container}>
                        <TouchableOpacity 
                            onPress={() => navigation.navigate('Quest')}
                        >
                        <LinearGradient
                            colors={['#BEADFA', '#DFCCFB']}
                            style={downstyles.longbutton}
                            start={{ x: 0, y: 0 }} // 시작점
                            end={{ x: 1, y: 0 }}   // 종료점
                        >
                            <Text style={downstyles.bigtext}>퀘스트</Text>
                            <Text>주식 시장 가이드</Text>
                        </LinearGradient>
                        </TouchableOpacity>
                        
                        <TouchableOpacity>
                            <View style={styles.progresscontainer}>
                                <View style={styles.progressBarContainer}>
                                    <View style={[styles.progressBar,{width: `${progress}%`} ]}>
                                        <Text style={styles.progressBarText}>60/88</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>

                        

                        <View style={downstyles.newscontainer}>
                            <Text style={downstyles.titletext}>오늘의 뉴스</Text>
                            <Text style={downstyles.newstext}>전기연 이차전지·3D프린팅 기술, 국가연구개발 우수</Text>
                            <Text style={downstyles.newstext}>제이스텍, 171억 규모 이차전지 배터리셀 제조공정 수주</Text>
                            <Text style={downstyles.newstext}>제이스텍, 171억 규모 이차전지 배터리셀 제조공정 수주</Text>
                            <Text style={downstyles.newstext}>제이스텍, 171억 규모 이차전지 배터리셀 제조공정 수주</Text>
                        </View>
                        <View style={downstyles.buttoncontainer}>                        
                            <TouchableOpacity >
                            <LinearGradient
                                colors={['#BEADFA', '#DFCCFB']}
                                style={downstyles.shortbutton}
                                start={{ x: 0, y: 0 }} // 시작점
                                end={{ x: 1, y: 0 }}   // 종료점
                            >
                                <Text style={downstyles.bigtext}>퀘스트</Text>
                                <Text>주식 시장 가이드</Text>
                            </LinearGradient>
                            </TouchableOpacity>
                            <TouchableOpacity >
                            <LinearGradient
                                colors={['#BEADFA', '#DFCCFB']}
                                style={downstyles.shortbutton}
                                start={{ x: 0, y: 0 }} // 시작점
                                end={{ x: 1, y: 0 }}   // 종료점
                            >
                                <Text style={downstyles.bigtext}>퀘스트</Text>
                                <Text>주식 시장 가이드</Text>
                            </LinearGradient>
                            </TouchableOpacity>
                        </View>
                        <View style={downstyles.buttoncontainer}>                        
                            <TouchableOpacity >
                            <LinearGradient
                                colors={['#BEADFA', '#DFCCFB']}
                                style={downstyles.shortbutton}
                                start={{ x: 0, y: 0 }} // 시작점
                                end={{ x: 1, y: 0 }}   // 종료점
                            >
                                <Text style={downstyles.bigtext}>퀘스트</Text>
                                <Text>주식 시장 가이드</Text>
                            </LinearGradient>
                            </TouchableOpacity>
                            <TouchableOpacity >
                            <LinearGradient
                                colors={['#BEADFA', '#DFCCFB']}
                                style={downstyles.shortbutton}
                                start={{ x: 0, y: 0 }} // 시작점
                                end={{ x: 1, y: 0 }}   // 종료점
                            >
                                <Text style={downstyles.bigtext}>퀘스트</Text>
                                <Text>주식 시장 가이드</Text>
                            </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                
                <Animated.Image 
                    source={require('../img/low.png')}
                    style={[styles.overlayImage,
                        {transform: [{ translateY: verticalVal }],
                    }]} 
                />

            </ScrollView>
        </>
    );
  };
  
export default MainScreen;