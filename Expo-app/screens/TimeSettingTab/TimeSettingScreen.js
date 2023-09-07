import { View,SafeAreaView, ScrollView, Text, StyleSheet } from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen"

export default function TimeSettingScreen({ route, navigation }){
    const {day, time} = route.params
    return(
        <SafeAreaView>
            <View style={style.container}>
                <View style={style.wrap}>
                    <Text style={style.day}>
                        {day}曜日
                    </Text>
                    <Text style={style.aboutTime}>
                        {time.name}
                    </Text>
                </View>
                <View style={style.box}>
                    <Text style={style.time}>
                        {time.time}
                    </Text>
                </View>
            </View>
        </SafeAreaView>

    )
}

const style = StyleSheet.create({
    container: {
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 30,
    },
    box: {
        backgroundColor: "white",
        width: wp("90%"),
        height: 300,
        justifyContent: "center",
        textAlign: "center",
        borderRadius: 15,
        marginTop: 30,
    },
    wrap : {
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "center"
    },
    day: {
        fontWeight: "500",
        fontSize: 50,
    },
    aboutTime: {
        fontWeight: "500",
        fontSize: 30,
    },
    time: {
        fontWeight: "600",
        fontSize: 120,
        textAlign: "center"
    },
})
