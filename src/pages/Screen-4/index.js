import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import style from './style'

function Screen_1(props) {

    const [quantity, setQuantity] = useState('')

    function navigation() { props.navigation.navigate('Screen_2') }

    function onClick(params) { console.log('ok') }

    return (
        <View style={{ flex: 1, justifyContent: 'center', padding: constants.screenMargin }}>
            <Text style={{ alignSelf: 'center' }}>Screen-1</Text>
            <TouchableOpacity onPress={onClick} style={{}}>
                <View style={{ borderWidth: 0.5, padding: 10, }}>
                    <Text style={{ alignSelf: 'center' }}>Card</Text>
                    <Text style={{ alignSelf: 'center' }}>Quantity: {quantity}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{
                borderWidth: 0.34,
                elevation: 3,
                width: 50,
                alignSelf: 'flex-end',
                height: 50,
                borderRadius: 50,
                backgroundColor: '#EE5407',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute', //Here is the trick
                bottom: 20,
                right: 20,
            }}
                onPress={navigation}
                activeOpacity={0.3}>
                <Text style={{ color: 'white' }}>Next</Text>
            </TouchableOpacity>
            <ButtomButton onPress={navigation} />
        </View>
    )
}

export default Screen_1