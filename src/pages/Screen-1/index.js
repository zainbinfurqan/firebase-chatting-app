import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, Button, FlatList } from 'react-native'
import Card from '../../component/cards'
import ButtomButton from '../../component/ButtomButton'
// import helpers from '../../utils/helpers'
import helpers from '../../utils/helpers_2'
// import firestore from '@react-native-firebase/firestore';
import style from './style'

function Screen_1(props) {

    const [text, setText] = useState('')
    const [data, setData] = useState([])

    useEffect(() => {
        helpers_()
        // fetchData()
        // return () => fetchData();
        return () => {
            helpers_()
        }
    }, [])

    async function helpers_() {

        // let resonse = await helpers.getDataOnces('Users')
        // let resonse = await helpers.getDataOncesWithId('Users', 'EVy6bqaqyQWvnKKrWV2F')
        // let resonse = await helpers.InsertDataWithOutId('Users', { email: "faraz@gmail.com", fullName: "Faraz Ahmed", password: '123123', rooms: [] })
        // let resonse = await helpers.getDataOnces('Users')
        // let resonse = await helpers.getDataOncesWithId('Users', 'Zain.ahmed19952@gmail.com')
        // let resonse = await helpers.InsertDataWithOutId('Users',
        //     { email: "faraz@gmail.com", fullName: "Faraz Ahmed", password: '123123', rooms: [] }
        // )
        // let resonse = await helpers.InsertDataWithId('Users', 'faraz@gmail.com',
        //     { email: "faraz@gmail.com", fullName: "Faraz Ahmed", password: '123123', rooms: [] }
        // )
        // let resonse = await helpers.UpdateData('Users', '4pzs8qDql8h0WtitIvaQ',
        //     { email: "faraz123@gmail.com", fullName: "Faraz Ahmed", password: '123123', rooms: [] }
        // )
        // let resonse = await helpers.DeleteData('Users', '4pzs8qDql8h0WtitIvaQ',)
        console.log("resonse=>", resonse)
    }

    // function navigation() {
    //     props.navigation.navigate('Screen_2')
    // }

    // function onClick(params) {
    // }

    // function fetchData() {
    //     firestore()
    //         .collection('data')
    //         .onSnapshot((onResult => {
    //             setData(onResult.docs)
    //             // console.log(onResult.docs[0].ref._documentPath._parts[1])
    //         }), (onError => { console.log(onError) }))
    // }

    // function add() {
    //     firestore()
    //         .collection('data')
    //         .add({
    //             name: text,
    //         })
    //         .then(() => {
    //             console.log('User added!');
    //         });
    // }

    // function handleUpdate(id) {
    //     firestore()
    //         .collection('data')
    //         .doc(id)
    //         .update({
    //             name: text,
    //         })
    //         .then(() => {
    //             console.log('User updated!');
    //         });
    // }

    // function handleDelete(id) {
    //     firestore()
    //         .collection('data')
    //         .doc(id)
    //         .delete()
    //         .then(() => {
    //             console.log('User deleted!');
    //         });
    // }

    return (
        <View style={style.main}>
            {/* <Text style={style.headingText}>Screen-1</Text>
            <TextInput style={{ borderWidth: 1, height: 50, marginBottom: 5 }} onChangeText={e => setText(e)} />
            <Button title="Insert Data" onPress={add} />
            <Card quantity={3} onClick={onClick} />
            <ButtomButton onPress={navigation} />
            <FlatList
                data={data}
                renderItem={({ item, index }) =>
                    <View style={{ justifyContent: 'center', borderWidth: 1, flexDirection: 'row', height: 35, marginTop: 10, }}>
                        <Text style={{ alignSelf: 'center', marginLeft: 10, flex: 0.8 }}>{item._data.name}</Text>
                        <TouchableOpacity style={{ flex: 0.1, alignSelf: 'center', }} onPress={() => handleUpdate(item.ref._documentPath._parts[1])}><Text style={{}}>Udt</Text></TouchableOpacity>
                        <TouchableOpacity style={{ flex: 0.1, alignSelf: 'center', }} onPress={() => handleDelete(item.ref._documentPath._parts[1])}><Text style={{ alignSelf: 'center', }}>Dlt</Text></TouchableOpacity>
                    </View>
                }
                keyExtractor={item => item.id}
            />
            <FlatList /> */}
        </View>
    )
}


export default Screen_1