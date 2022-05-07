import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#8e24aa",
    },

    text: {
        color: "white",
        fontSize: 55,
        marginBottom: 10,
    },
    containerView:{
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#c158dc',
    margin: 20,
    padding: 5,
    width:300,
    height: 100,

  },
  containerText:{
    color: 'white',
    fontSize: 24,
    fontStyle: 'italic',
    fontWeight: 'bold',

  },
    footer: {
        justifyContent: 'space-around',
        flex: 0,
        backgroundColor: "#424242",
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-end',
        width: 400,
        height: 50,
    },
})