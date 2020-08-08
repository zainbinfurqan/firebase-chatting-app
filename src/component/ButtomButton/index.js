import React, { } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'

import style from './style'

function ButtomButton(props) {

    return (
        <TouchableOpacity
            style={style.bottomButton}
            onPress={props.onPress}
            activeOpacity={0.3}>
            <Text style={style.buttonText}>Next</Text>
        </TouchableOpacity>
    )
}

export default ButtomButton