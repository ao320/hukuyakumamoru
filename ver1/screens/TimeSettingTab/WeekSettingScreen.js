import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native"

import WeekSetting from "../../components/WeekSetting"

const infomation = {
    "sunday" : {
        "day": "日",
        "morning" : {
            "name" : "朝",
            "time" : "08:00",
        },
        "afternoon" : {
            "name" : "昼",
            "time" : "12:00",
        },
        "evening" : {
            "name" : "夕",
            "time" : "15:00",
        },
        "night" : {
            "name" : "夜",
            "time" :  "19:00",
        },
    },
    "monday" : {
        "day": "月",
        "morning" : {
            "name" : "朝",
            "time" : "08:00",
        },
        "afternoon" : {
            "name" : "昼",
            "time" : "12:00",
        },
        "evening" : {
            "name" : "夕",
            "time" : "15:00",
        },
        "night" : {
            "name" : "夜",
            "time" :  "19:00",
        },
    },
    "tuesday" : {
        "day": "火",
        "morning" : {
            "name" : "朝",
            "time" : "08:00",
        },
        "afternoon" : {
            "name" : "昼",
            "time" : "12:00",
        },
        "evening" : {
            "name" : "夕",
            "time" : "15:00",
        },
        "night" : {
            "name" : "夜",
            "time" :  "19:00",
        },
    },
    "wednesday" : {
        "day": "水",
        "morning" : {
            "name" : "朝",
            "time" : "08:00",
        },
        "afternoon" : {
            "name" : "昼",
            "time" : "12:00",
        },
        "evening" : {
            "name" : "夕",
            "time" : "15:00",
        },
        "night" : {
            "name" : "夜",
            "time" :  "19:00",
        },
    },
    "thursday" : {
        "day": "木",
        "morning" : {
            "name" : "朝",
            "time" : "08:00",
        },
        "afternoon" : {
            "name" : "昼",
            "time" : "12:00",
        },
        "evening" : {
            "name" : "夕",
            "time" : "15:00",
        },
        "night" : {
            "name" : "夜",
            "time" :  "19:00",
        },
    },
    "friday" : {
        "day": "金",
        "morning" : {
            "name" : "朝",
            "time" : "08:00",
        },
        "afternoon" : {
            "name" : "昼",
            "time" : "12:00",
        },
        "evening" : {
            "name" : "夕",
            "time" : "15:00",
        },
        "night" : {
            "name" : "夜",
            "time" :  "19:00",
        },
    },
    "saturday" : {
        "day": "土",
        "morning" : {
            "name" : "朝",
            "time" : "08:00",
        },
        "afternoon" : {
            "name" : "昼",
            "time" : "12:00",
        },
        "evening" : {
            "name" : "夕",
            "time" : "15:00",
        },
        "night" : {
            "name" : "夜",
            "time" :  "19:00",
        },
    }
}

export default function WeekSettingScreen({ navigation }){
    return(
        <View style={styles.container}>
            <WeekSetting props={infomation.sunday} onPress={() => navigation.navigate("DaySettingScreen", infomation.sunday)}/>
            <WeekSetting props={infomation.monday} onPress={() => navigation.navigate("DaySettingScreen", infomation.monday)}/>
            <WeekSetting props={infomation.tuesday} onPress={() => navigation.navigate("DaySettingScreen", infomation.tuesday)}/>
            <WeekSetting props={infomation.wednesday} onPress={() => navigation.navigate("DaySettingScreen", infomation.wednesday)}/>
            <WeekSetting props={infomation.thursday} onPress={() => navigation.navigate("DaySettingScreen", infomation.thursday)}/>
            <WeekSetting props={infomation.friday} onPress={() => navigation.navigate("DaySettingScreen", infomation.friday)}/>
            <WeekSetting props={infomation.saturday} onPress={() => navigation.navigate("DaySettingScreen", infomation.saturday)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff"
    }
})