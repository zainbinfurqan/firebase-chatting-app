import React, { useState } from 'react';
import { View, SafeAreaView, Button, Text, TextInput } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { connect } from 'react-redux'
import authActions from '../../redux/Auth/action'
import style from './style'



function Registartion(props) {

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function RegistrationUser() {
        try {
            console.log("RegistrationUser")
            let data = await firestore()
                .collection('Users')
                .where('email', '==', email.toLowerCase())
                .get()
            console.log(data.docs)
            // let userAlreadyExist = data.docs.filter(items => items._data.email.toLowerCase() == email.toLowerCase())
            // console.log(userAlreadyExist)
            if (data.docs.length == 0) {
                console.log("abc")
                await firestore()
                    .collection('Users')
                    .add({
                        fullName: fullName,
                        email: email.toLowerCase(),
                        password: password,
                        rooms: []
                    })
                    .then(async (data) => {
                        let userData = await firestore()
                            .collection('Users')
                            .doc(data.id)
                            .get()
                        props.saveUserData(userData)
                        props.navigation.replace('UsersList')

                    })
            } else {
                console.log('user already exist')
            }
        } catch (error) {

        }
    }

    return (
        <SafeAreaView style={style.mainContainer}>
            <View style={style.form}>
                <View style={style.inputMain}>
                    <Text>Full Name</Text>
                    <TextInput underlineColorAndroid="transparent"
                        style={style.text} value={fullName} onChangeText={(e) => setFullName(e)} />
                </View>
                <View style={style.inputMain}>
                    <Text>Email</Text>
                    <TextInput underlineColorAndroid="transparent" style={style.text} value={email} onChangeText={(e) => setEmail(e)} />
                </View>
                <View style={style.inputMain}>
                    <Text>Password</Text>
                    <TextInput underlineColorAndroid="transparent" style={style.text} secureTextEntry={true} value={password} onChangeText={(e) => setPassword(e)} />
                </View>
                <Button title='Registration' onPress={RegistrationUser} />
            </View>

        </SafeAreaView>
    )
}
const mapStateToProps = (store) => ({
});

const mapDispatchToProps = {
    saveUserData: authActions.saveUserData
};
export default connect(mapStateToProps, mapDispatchToProps)(Registartion);
