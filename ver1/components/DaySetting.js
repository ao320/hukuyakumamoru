import { Text, TouchableOpacity, StyleSheet } from "react-native"
export default function DaySetting({ props, onPress }) {

    return(
        <TouchableOpacity onPress={onPress} style={style.container}>
            <Text style={style.aboutTime}>
                {props.name}
            </Text>
            <Text style={style.time}>
                {props.time}
            </Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container: {
        width: 400,
        height: 100,
        backgroundColor : "white",
        marginTop: 20,
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "center",
        textAlign: "center",
    },
    aboutTime: {
        fontWeight: "500",
        fontSize: 50,
        lineHeight:100,
        marginRight:30
    },
    time: {
        fontWeight: "500",
        fontSize: 30,
        lineHeight:100
    }
})
