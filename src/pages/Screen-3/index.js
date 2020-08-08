import React, { } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import Card from '../../component/cards'
import ButtomButton from '../../component/ButtomButton'

function Screen_3(props) {
    function navigation() {
        props.navigation.navigate('Screen_1')
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ alignSelf: 'center' }}>Screen_3</Text>
            <Card />
            <ButtomButton onPress={navigation} />
        </View>
    )
}

export default Screen_3