import React from 'react'
import { View,StyleSheet,Text,Image, ScrollView,FlatList} from 'react-native'

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',    
    },
    background:{
        justifyContent: 'center',
        alignItems: 'center',    
        backgroundColor: "#BEADFA",
        height: "10%",
    },
    bigtext: {
        fontFamily: 'NotoSansKR-Bold',
        color: 'white',
        fontSize: 32,
        height: 60,
    },
    middletext: {
        fontFamily: 'NotoSansKR-Bold',
        color: 'white',
        fontSize: 24,
    },
    smalltext: {
        fontFamily: 'NotoSansKR-Light',
        color: 'white',
        fontSize: 13,
        height: 30,
    },
    profile: {
        width: 290,
        height: 200,
        flexDirection: 'row',
        backgroundColor: "#BEADFA",
        borderRadius: 16,
        elevation: 5, // 그림자의 깊이를 나타내는 값
        marginTop: 20,
        paddingLeft: 14,
    },
    rank: {
        width: 290,
        height: 340,
        backgroundColor: "#fff",
        borderRadius: 16,
        elevation: 5, // 그림자의 깊이를 나타내는 값
        marginTop: 20,
    },
    logo: {
        width: 110, 
        height: 150,
        marginTop: 40,
        marginLeft: 10,
    },
    ranklogo: {
        width: 20, 
        height: 20,
        marginTop: 10,
        marginLeft: 10,
    },
    title: {
        flexDirection: "row",  
        height: 40,
        marginRight: 12,
        marginLeft: 12,
        borderBottomColor: "black",
        borderBottomWidth: 1
    },
    titletext: {
        fontFamily: 'NotoSansKR-Bold',
        color: "black",
        marginRight: 80,
    },
    ranking: {
        flexDirection: "row",
    },
    ranktext: {
        flex: 1,
        fontFamily: 'NotoSansKR-Bold',
        color: "black",
        marginRight: 1,
        marginLeft: 15,

    },
    left: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },    
    right: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',    
    },
    myranking: {
        flexDirection: "row",
        backgroundColor: "#BEADFA",
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
    }
    

})
type ItemType = {
    item:any
}
const RankScreen = () => {
    const data = [
        { id: '1', rank: '1',username: 'user1',qstate: '50단계' },
        { id: '2', rank: '2',username: 'user1',qstate: '50단계' },
        { id: '3', rank: '3',username: 'user1',qstate: '50단계' },
        { id: '4', rank: '4',username: 'user1',qstate: '50단계' },
        { id: '5', rank: '5',username: 'user1',qstate: '50단계' },
        { id: '6', rank: '6',username: 'user1',qstate: '50단계' },
        { id: '7', rank: '7',username: 'user1',qstate: '50단계' },
        { id: '8', rank: '8',username: 'user1',qstate: '50단계' },
        { id: '9', rank: '9',username: 'user1',qstate: '50단계' },
        { id: '10', rank: '10',username: 'user1',qstate: '50단계' },
        { id: '11', rank: '11',username: 'user1',qstate: '50단계' },
        { id: '12', rank: '12',username: 'user1',qstate: '50단계' },
        { id: '13', rank: '13',username: 'user1',qstate: '50단계' },
      ];
    
      const renderItem = ({ item }:ItemType) => (
        <View style={styles.ranking}>
            <Text style={styles.ranktext}>{item.rank}</Text>
            <Image
                style={styles.ranklogo}
                source={require('../img/low.png')}
            />
            <Text style={styles.ranktext}>{item.username}</Text>
            <Text style={styles.ranktext}>{item.qstate}</Text>
        </View>
      );

    return(
        <>
            <View style={styles.background}>
                <Text style={styles.middletext}>퀘스트 랭크</Text>
            </View>
            <View style={styles.container}>     
                <View style={styles.profile}>
                    <View>
                        <Text style={styles.bigtext}>hunsol03</Text>
                        <Text style={styles.smalltext}>관심분야 : 이차전지</Text>
                        <Text style={styles.smalltext}>완료 퀘스트 : 17개</Text>
                        <Text style={styles.bigtext}>#231등</Text>
                    </View>
                    <Image
                        style={styles.logo}
                        source={require('../img/low.png')}
                    />
                </View>

                <View style={styles.rank}>     
                    <View style={styles.title}>
                        <Text style={styles.titletext}>순위</Text>
                        <Text style={styles.titletext}>유저</Text>
                        <Text style={styles.titletext}>진행도</Text>
                    </View>
                    <ScrollView>
                        <FlatList
                            data={data}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id}
                        />
                    </ScrollView>
                    <View style={styles.myranking}>
                        <Text style={styles.ranktext}>1</Text>
                        <Image
                            style={styles.ranklogo}
                            source={require('../img/low.png')}
                        />
                        <Text style={styles.ranktext}>user1</Text>
                        <Text style={styles.ranktext}>50단계</Text>
                    </View>
                </View>
            </View>
        </>
    )
}

export default RankScreen;