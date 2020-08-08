import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, Button, ScrollView } from 'react-native'
import Card from '../../component/cards'
import ButtomButton from '../../component/ButtomButton'
// import firestore from '@react-native-firebase/firestore';
import NotificationSounds, { playSampleSound } from 'react-native-notification-sounds';

function Screen_2(props) {

    const [text, setText] = useState('')
    const [list, setList] = useState([])
    const [currentId, setCurrentId] = useState('')
    const [isUpdate, setIsUpdate] = useState(false)

    function getTunes() {
        // NotificationSounds.getRingtones().then(SoundsList => {
        //     console.log(SoundsList)
        // })
        NotificationSounds.getNotifications().then(SoundsList => {
            console.warn('SOUNDS', JSON.stringify(SoundsList[1]));
            // let a = SoundsList.filter(item => item.title == 'Xperia')
            SoundsList.map(item => {
                return (
                    console.log(item.title)
                )
            })
            // console.warn('SOUNDS', a);
            /* 
            Play the notification sound.
            pass the complete sound object.
            This function can be used for playing the sample sound
            */
            playSampleSound(SoundsList[1]);
        });
    }

    useEffect(() => {
        getTunes()
        // fetchHandle()
        // return () => fetchHandle()
    }, [])
    // function navigation() {
    //     props.navigation.navigate('Screen_3')
    // }

    // function fetchHandle() {
    //     firestore()
    //         .collection('data')
    //         .onSnapshot((onResult) => {
    //             setList(onResult.docs)
    //         }, (onError) => {
    //             console.log(onError)
    //         });
    // }

    // function handleSubmit() {
    //     if (isUpdate) {
    //         firestore()
    //             .collection('data')
    //             .doc(currentId)
    //             .update({
    //                 name: text,
    //             })
    //             .then(() => {
    //                 console.log('User updated!');
    //             });
    //     } else {
    //         firestore()
    //             .collection('data')
    //             .add({
    //                 name: text
    //             })
    //             .then(() => {
    //                 console.log('User added!');
    //             });
    //     }
    //     setText('')
    //     setIsUpdate(false)
    // }

    // function updateHandle(value) {
    //     console.log(value._data.name)
    //     setText(value._data.name)
    //     setCurrentId(value.ref._documentPath._parts[1])
    //     setIsUpdate(true)
    // }

    // function deleteHandle(id) {
    //     firestore()
    //         .collection('data')
    //         .doc(id)
    //         .delete()
    //         .then(() => {
    //             console.log('User deleted!');
    //         });
    // }

    return (
        <View style={{ flex: 1, padding: 10 }}>
            {/* <Text style={{}}>Screen_2</Text>
            <Card />
            <ButtomButton onPress={navigation} />
            <TextInput style={{ borderWidth: 1, marginBottom: 10, }} value={text} onChangeText={(e) => setText(e)} />
            <Button style={{ marginBottom: 10 }} title={isUpdate ? 'Update' : 'Submit'} onPress={handleSubmit} />
            <ScrollView style={{ marginTop: 10 }}>
                {list.map((item, index) => {
                    return (
                        <View style={{ borderWidth: 1, flexDirection: 'row', padding: 5 }}>
                            <View style={{ flex: 0.8 }}><Text>{item._data.name}</Text></View>
                            <TouchableOpacity onPress={() => updateHandle(item)} style={{ flex: 0.1 }}><Text>Upd</Text></TouchableOpacity>
                            <TouchableOpacity onPress={() => deleteHandle(item.ref._documentPath._parts[1])} style={{ flex: 0.1 }}><Text>Dlt</Text></TouchableOpacity>
                        </View>
                    )
                })}
            </ScrollView> */}
        </View>
    )
}

export default Screen_2