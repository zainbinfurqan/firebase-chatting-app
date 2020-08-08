import React, { useState } from 'react';
import { View, SafeAreaView, Button, Text, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import firestore from '@react-native-firebase/firestore';
import authActions from '../../redux/Auth/action'
import style from './style'



function Login(props) {

    // const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function LoginUser() {

        try {
            firestore()
                .collection('Users')
                .where('email', '==', email.toLowerCase())
                .where('password', '==', password)
                .get()
                .then(querySnapshot => {
                    if (querySnapshot.docs.length > 0) {
                        props.saveUserData(querySnapshot.docs[0])
                        props.navigation.replace('UsersList',)
                    } else {
                        console.log('error')
                    }
                });
        } catch (error) {

        }
    }

    return (
        <SafeAreaView style={style.mainContainer}>
            <View style={style.form}>
                <View style={style.inputMain}>
                    <Text>Email</Text>
                    <TextInput underlineColorAndroid="transparent" style={style.text} value={email} onChangeText={(e) => setEmail(e)} />
                </View>
                <View style={style.inputMain}>
                    <Text>Password</Text>
                    <TextInput underlineColorAndroid="transparent" style={style.text} secureTextEntry={true} value={password} onChangeText={(e) => setPassword(e)} />
                </View>
                <Button title='Login' onPress={LoginUser} />
                <TouchableOpacity onPress={() => props.navigation.navigate('Registration')}><Text>Sign Up</Text></TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

const mapStateToProps = (store) => ({
});

const mapDispatchToProps = {
    saveUserData: authActions.saveUserData
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
