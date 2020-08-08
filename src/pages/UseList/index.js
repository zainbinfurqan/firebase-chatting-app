import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, Button, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { connect } from 'react-redux'

import ChatActions from '../../redux/Chat/action'
import Header from '../../component/Header'
import style from './style'


function UsersList(props) {

    const [userList, setUserList] = useState([])
    const [searchUserEmail, setSearchUserEmail] = useState('')

    useEffect(() => {
    }, [])


    async function searchUser() {
        // console.log("searchUser")
        try {
            if (searchUserEmail.toLowerCase() !== props.userData.email) {
                await firestore()
                    .collection('Users')
                    .where('email', '==', searchUserEmail.toLowerCase())
                    .get()
                    .then(querySnapshot => {
                        if (querySnapshot.docs.length > 0) {
                            setUserList(querySnapshot.docs)
                        } else {
                            console.log('error')
                        }
                    });
            }
            else {

            }
        } catch (error) {

        }
    }

    async function createRoom(otherUser) {
        console.log(props.userData)
        await firestore()
            .collection('Users')
            .doc(props.userData._ref._documentPath._parts[1])
            .get()
            .then(async (querySnapshot) => {
                console.log("querySnapshot=>", querySnapshot)
                let isRoomExist = querySnapshot._data.rooms.filter(items => items.otherUser == otherUser._data.email)
                if (isRoomExist.length == 0) {
                    await firestore()
                        .collection('Rooms')
                        .add({
                            createdBy: props.userData._ref._documentPath._parts[1],
                            user1: props.userData._ref._documentPath._parts[1],
                            user2: otherUser._ref._documentPath._parts[1],
                            messages: [],
                        })
                        .then(async (response) => {
                            console.log('response=>', response);
                            await firestore()
                                .collection('Users')
                                .doc(props.userData._ref._documentPath._parts[1])
                                .update({
                                    rooms: firestore.FieldValue.arrayUnion({ roomId: response.id, otherUser: otherUser._data.email })
                                })
                            await firestore()
                                .collection('Users')
                                .doc(otherUser._ref._documentPath._parts[1])
                                .update({
                                    rooms: firestore.FieldValue.arrayUnion({ roomId: response.id, otherUser: props.userData._data.email })
                                })
                            props.SaveOtherUser(otherUser._data)
                            props.SaveRoom({ otherUser: otherUser._data.email, roomId: response.id })
                            props.navigation.navigate('ChatRoom')
                        });
                } else {
                    props.SaveOtherUser(otherUser._data)
                    props.SaveRoom(isRoomExist[0])
                    props.navigation.navigate('ChatRoom')
                    // console.log("otherUser=>", otherUser)
                    // console.log("room=>", isRoomExist)
                }
            });
    }

    return (
        <SafeAreaView style={style.mainContainer}>
            <Header navigationProps={props} />
            <View style={style.listView}>
                <TextInput underlineColorAndroid="transparent" style={style.searchTextBox} value={searchUserEmail} onChangeText={(e) => setSearchUserEmail(e)} />
                <TouchableOpacity onPress={searchUser} style={style.searchButton}>
                    <Text style={{ alignSelf: "center" }}>Go</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                {userList.length > 0 && userList.map((items, index) => {
                    return (
                        <TouchableOpacity onPress={() => createRoom(items)} key={index} style={style.listItemMain}>
                            <View style={style.listItemLeft}>
                                <View style={style.nameTextMain}>
                                    <Text style={style.nameTag}>{items._data.fullName[0].toUpperCase()}</Text>
                                </View>
                            </View>
                            <View style={style.nameMain}>
                                <Text style={style.name}>{items._data.fullName}</Text>
                                <Text style={style.name}>{items._data.email}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        </SafeAreaView>
    )
}


const mapStateToProps = (store) => ({
    userData: store.Auth.userData
});

const mapDispatchToProps = {
    SaveRoom: ChatActions.SaveRoom,
    SaveOtherUser: ChatActions.SaveOtherUser
};
export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
