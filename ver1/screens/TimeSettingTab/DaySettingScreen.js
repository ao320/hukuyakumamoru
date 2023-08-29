import { View, Text, TouchableOpacity } from "react-native"

import DaySetting from "../../components/DaySetting"

export default function DaySettingScreen({ route, navigation }){
    const {day, morning, afternoon, evening, night} = route.params
    return(
        <View>
            <Text>{day}</Text>
            <DaySetting props={morning} onPress={() => navigation.navigate("TimeSettingScreen", {"day": day, "time": morning})}/>
            <DaySetting props={afternoon} onPress={() => navigation.navigate("TimeSettingScreen", {"day": day, "time": afternoon})}/>
            <DaySetting props={evening} onPress={() => navigation.navigate("TimeSettingScreen", {"day": day, "time": evening})}/>
            <DaySetting props={night} onPress={() => navigation.navigate("TimeSettingScreen", {"day": day, "time": night})}/>
        </View>
    )
}