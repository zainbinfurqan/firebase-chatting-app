
import { StyleSheet } from 'react-native'
export default StyleSheet.create({

    bottomButton: {
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
    },
    buttonText: { color: 'white' }
})