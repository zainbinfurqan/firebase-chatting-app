import React, { } from 'react';
import { View, TouchableOpacity, Text } from 'react-native'


function Card(props) {

    return (
        <TouchableOpacity onPress={props.onClick} style={{}}>
            <View style={{ borderWidth: 0.5, padding: 10, }}>
                <Text style={{ alignSelf: 'center' }}>Card</Text>
                <Text style={{ alignSelf: 'center' }}>Quantity: {props.quantity}</Text>
            </View>
        </TouchableOpacity>
    )
}

Card.defaultProps = {
    quantity: 0,
    onClick: function onClick(params) { }
}

export default Card