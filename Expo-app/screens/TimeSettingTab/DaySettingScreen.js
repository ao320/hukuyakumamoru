import { View, SafeAreaView, ScrollView, Text, StyleSheet } from "react-native"

import DaySetting from "../../components/DaySetting"

export default function DaySettingScreen({ route, navigation }){
    const {day, morning, afternoon, evening, night} = route.params
    return(
        <SafeAreaView>
            <Text style={style.day}>{day}曜日</Text>
            <DaySetting props={morning} onPress={() => navigation.navigate("TimeSettingScreen", {"day": day, "time": morning})}/>
            <DaySetting props={afternoon} onPress={() => navigation.navigate("TimeSettingScreen", {"day": day, "time": afternoon})}/>
            <DaySetting props={evening} onPress={() => navigation.navigate("TimeSettingScreen", {"day": day, "time": evening})}/>
            <DaySetting props={night} onPress={() => navigation.navigate("TimeSettingScreen", {"day": day, "time": night})}/>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    day: {
        fontWeight: "500",
        fontSize: 30,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 20,
    }
})
