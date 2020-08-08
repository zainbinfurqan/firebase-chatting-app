import React, { } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux'

import Registartion from '../pages/Registration'
import UsersList from '../pages/UseList'
import ChatRoom from '../pages/Chat'
import Login from '../pages/Login'

const Stack = createStackNavigator();

function Auth(props) {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none" initialRouteName={Object.keys(props.userData).length > 0 ? 'UsersList' : 'Login'}>
                <Stack.Screen name="Registration" component={Registartion} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="UsersList" component={UsersList} />
                <Stack.Screen name="ChatRoom" component={ChatRoom} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const mapStateToProps = (store) => (console.log("store", store), {
    userData: store.Auth.userData,
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
