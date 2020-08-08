
import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    mainContainer: { flex: 1 },
    listView: { padding: 10, flexDirection: "row", },
    heading: { alignSelf: 'center', margin: 10, },
    listItemMain: { flex: 1, flexDirection: 'row', borderWidth: 0.25, height: 50, marginBottom: 10, },
    listItemLeft: { flex: 0.15, borderRightWidth: 0.25 },
    nameTextMain: {
        borderRadius: 50, backgroundColor: 'grey', margin: 5, height: '80%', justifyContent: 'center'
    },
    searchTextBox: {
        height: 40,
        flex: 0.9,
        borderRadius: 5,
        borderWidth: 0.34,
    },
    searchButton: {
        flex: 0.1,
        justifyContent: 'center'
    },
    nameTag: { color: 'white', alignSelf: 'center' },
    nameMain: { flex: 0.85, paddingLeft: 10, justifyContent: 'center' },
    name: { alignSelf: 'flex-start' },
})