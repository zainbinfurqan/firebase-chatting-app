import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, SafeAreaView, FlatList, TextInput } from 'react-native'
import firestore from '@react-native-firebase/firestore';
import { connect } from 'react-redux'
import moment from 'moment'

function ChatRoom(props) {

    const [chatMessage, setChatMessage] = useState([])
    const [message, setMessage] = useState('')

    useEffect(() => {
        console.log(props.room)
        console.log(props.otherUser)
    }, [])

    useEffect(() => {
        const subscriber = firestore()
            .collection('Rooms')
            .doc(props.room.roomId)
            .onSnapshot(documentSnapshot => {
                console.log('User data: ', documentSnapshot.data());
                setChatMessage(documentSnapshot.data().messages.reverse())
                setMessage('')
            });

        // Stop listening for updates when no longer required
        return () => subscriber();
    }, [props.room.roomId]);


    async function sendMessage() {

        try {
            await firestore()
                .collection('Rooms')
                .doc(props.room.roomId)
                .update({
                    messages: firestore.FieldValue.arrayUnion({ messageFrom: props.userData._ref._documentPath._parts[1], message: message, time: `${new Date}` })
                }).then(() => {
                    setMessage('')
                })
        } catch (error) {

        }
    }

    function OtherMessage(value, id, time) {
        console.log("OtherMessage time=>", time)
        return (
            <View style={[
                id != props.userData._ref._documentPath._parts[1] && { alignSelf: 'flex-end' },
                {
                    borderWidth: 0.24,
                    width: 150,
                    padding: 5,
                    margin: 10,
                    borderRadius: 5
                }]}><Text>{value}</Text><Text>{moment(time).format('hh:mm a')}</Text></View>
        )
    }

    function MyMessage(value, id, time) {
        console.log("MyMessage time=>", time)
        console.log(moment(time).format('YYYY-MMM-DD hh:mm a'))
        return (
            <View style={[
                id == props.userData._ref._documentPath._parts[1] && { alignSelf: 'flex-start' },
                {
                    borderWidth: 0.24,
                    width: 150,
                    padding: 5,
                    margin: 10,
                    borderRadius: 5
                }]}><Text>{value}</Text>
                <Text style={{ fontSize: 10 }}>{moment(time).format('hh:mm a')}</Text></View>
        )
    }

    function renderItem({ item }) {
        console.log("item=>", item)
        return (
            item.messageFrom != props.userData._ref._documentPath._parts[1] ? OtherMessage(item.message, item.messageFrom, item.item ? item.time : item.time)
                : MyMessage(item.message, item.messageFrom, item.time ? item.time : item.time)
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, }}>
            <View style={{ borderWidth: 0.24, height: 50, flexDirection: 'row', padding: 2 }}>
                <TouchableOpacity onPress={() => props.navigation.pop()} style={{ flex: 0.1, justifyContent: 'center' }}>
                    <Text style={{ alignSelf: 'center' }}>Back</Text>
                </TouchableOpacity>
                <View style={{ flex: 0.8, justifyContent: 'center' }}>
                    <Text style={{ alignSelf: 'center' }}>{props.otherUser.fullName}</Text>
                </View>
                <View style={{ flex: 0.1, justifyContent: 'center', borderWidth: 1, borderRadius: 40, margin: 5 }}>
                </View>
            </View>
            <View style={{ flexGrow: 1, marginBottom: 50, paddingBottom: 100, borderWidth: 1 }}>
                <FlatList
                    inverted={true}
                    data={chatMessage}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}

                />
            </View>
            <View style={{
                borderWidth: 0.34,
                width: '100%',
                height: 50,
                backgroundColor: 'white',
                alignItems: 'center',
                position: 'absolute', //Here is the trick
                bottom: 0,
                flexDirection: "row"
            }}>
                <TextInput underlineColorAndroid="transparent"
                    multiline={true}
                    value={message}
                    onChangeText={(e) => setMessage(e)}
                    style={{
                        width: '100%',
                        flex: 0.9,
                        height: 50,
                        padding: 0,
                        paddingLeft: 10,
                    }} />
                <TouchableOpacity onPress={sendMessage} style={{ height: '100%', justifyContent: 'center', flex: 0.1 }}><Text>Send</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}


const mapStateToProps = (store) => ({
    userData: store.Auth.userData,
    room: store.Chat.room,
    otherUser: store.Chat.otherUser
});

const mapDispatchToProps = {
};
export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom);
