import { View, Text, StyleSheet } from "react-native";

export default function MedicationStatus({ props }) {
    const { day, morning, afternoon, evening, night } = props
    return(
        <View>
            <View style={style.wrap}>
                <Text>{day} {morning} {afternoon} {evening} {night}</Text>
                <View style={morning ? style.containerTrue : style.containerFalse}></View>
                <View style={afternoon ? style.containerTrue : style.containerFalse}></View>
                <View style={evening ? style.containerTrue : style.containerFalse}></View>
                <View style={night ? style.containerTrue : style.containerFalse}></View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    containerTrue: {
        backgroundColor : "orange",
        width : 50,
        height : 50,
        margin : 5,
        borderColor: "gray",
        borderWidth: 1
    },
    containerFalse: {
        backgroundColor : "white",
        width : 50,
        height : 50,
        margin : 5,
        borderColor: "gray",
        borderWidth: 1
    },
    wrap: {
        flexDirection : "row"
    }
})
