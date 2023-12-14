import React from 'react'
import { View,StyleSheet,TouchableOpacity, ScrollView, Text } from 'react-native'

const styles = StyleSheet.create({
    maincontainer: {
        backgroundColor: '#BEADFA',
        
    },
    container: {
        paddingLeft: 30,
        height: 130
    },
    topcontainer: {
        alignItems: 'flex-end',
        marginRight: 30,
    },
    middlecontainer: {
        marginTop: -30,
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    smalltext: {
        fontFamily: 'NotoSansKR-Light',
        marginTop: -30,
        fontSize: 16,
        color: 'white',
    },
    rightsmalltext: {
        fontFamily: 'NotoSansKR-Bold',
        fontSize: 16,
        marginLeft: 90,
        color: '#F8FFD2',
    },
    secondsmalltext: {
        fontFamily: 'NotoSansKR-Light',
        fontSize: 16,
        marginLeft: 184,
        color: '#fff',
    },
    middletext: {
        fontFamily: 'NotoSansKR-Bold',
        fontSize: 24,
        color: 'white',
    },
    bigtext: {
        fontSize: 36,
        color: 'white',
        fontWeight: 'bold'
    },

});

const downstyles = StyleSheet.create({
    container: {
        height: 100000,
        backgroundColor: "#fff",
        paddingTop: 10,
    },
    questcontainer: {
        backgroundColor: "#D9D9D9",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 55,
        marginTop: 30,
    },
    nowcontainer: {
        backgroundColor: "#C5B3FB",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        marginTop: 30,
    },
    stagetext: {
        color: "#7071E8",
        fontFamily: 'NotoSansKR-Bold',
        fontSize: 18,
        marginRight: 10,
    },
    innercontainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    innertext: {
        fontSize: 12,
    }
});

const QuestScreen = () => {
    return(
        <>
        <ScrollView>
            <View style={styles.maincontainer}>
                <View style={styles.container}>
                    <View style={styles.topcontainer}>
                        <Text style={styles.middletext}>주식 퀘스트</Text>
                    </View>
                    <View style={styles.middlecontainer}>
                        <Text style={styles.middletext}>hunseol03</Text>
                        <Text style={styles.rightsmalltext}>2단계 도전중</Text>
                    </View>
                    <View style={styles.middlecontainer}>
                        <Text style={styles.smalltext}>가내수공업</Text>
                        <Text style={styles.secondsmalltext}>12/20</Text>
                    </View>
                </View>
                <ScrollView style={downstyles.container}>
                    
                    <TouchableOpacity>
                    <View style={downstyles.questcontainer}>
                        <Text style={downstyles.stagetext}>Stage 1</Text>
                        <View style={downstyles.innercontainer}>
                            <Text >주식 용어 퀴즈</Text>
                            <Text style={downstyles.innertext}>주식 시장에서 사용되는 용어를 익힐 수 있습니다</Text>
                        </View>
                    </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                    <View style={downstyles.questcontainer}>
                        <Text style={downstyles.stagetext}>Stage 1</Text>
                        <View style={downstyles.innercontainer}>
                            <Text >주식 용어 퀴즈</Text>
                            <Text style={downstyles.innertext}>주식 시장에서 사용되는 용어를 익힐 수 있습니다</Text>
                        </View>
                    </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                    <View style={downstyles.questcontainer}>
                        <Text style={downstyles.stagetext}>Stage 1</Text>
                        <View style={downstyles.innercontainer}>
                            <Text >주식 용어 퀴즈</Text>
                            <Text style={downstyles.innertext}>주식 시장에서 사용되는 용어를 익힐 수 있습니다</Text>
                        </View>
                    </View>
                    </TouchableOpacity>

                    
                    

                </ScrollView>
            </View>
            </ScrollView>
        </>
    )
}

export default QuestScreen;