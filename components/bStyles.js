import { Platform, StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexwrap: "wrap",
        //justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#8e24aa',
        ...Platform.select({
            ios: { paddingTop: 20},
            android: {paddingTop: StatusBar.currentHeight}
        })
    },

    box: {
        width:100,
        height:100,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        borderWidth: 1,
        backgroundColor: '#c158dc',
        margin: 10,
    },

    boxText: {
        color: "darkslategray",
        fontWeight: "bold",
    },

    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignSelf: 'stretch',
    },

    column: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignSelf: 'stretch',
    }
});