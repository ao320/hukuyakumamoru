import { View, Text, StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen"

export default function MedicationStatus({ props }) {
    const { day, morning, afternoon, evening, night } = props
    return(
        <View style={style.container}>
            <View style={style.wrap}>
                <Text>{day} {morning} {afternoon} {evening} {night}</Text>
                <View style={morning ? style.boxTrue : style.boxFalse}></View>
                <View style={afternoon ? style.boxTrue : style.boxFalse}></View>
                <View style={evening ? style.boxTrue : style.boxFalse}></View>
                <View style={night ? style.boxTrue : style.boxFalse}></View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    boxTrue: {
        backgroundColor : "orange",
        width : 50,
        height : 50,
        margin : 5,
        borderColor: "gray",
        borderWidth: 1
    },
    boxFalse: {
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
