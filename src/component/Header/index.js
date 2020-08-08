import React, { } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import authActions from '../../redux/Auth/action'

function Header(props) {


    function logOut() {
        props.logOut()
        props.navigationProps.navigation.replace('Login')
    }
    return (
        <View style={{ height: 50, flexDirection: 'row', justifyContent: 'flex-end' }}>
            <TouchableOpacity onPress={logOut} style={{ flex: 0.2, alignSelf: 'center', }}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

const mapStateToProps = (store) => ({
});

const mapDispatchToProps = {
    logOut: authActions.logOut
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
