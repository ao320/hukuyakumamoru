import { View, Text } from "react-native"

import MedicationStatus from "../components/MedicationStatus"

const infomation = {
    "sunday" : {
        "day" : "日",
        "morning" : false,
        "afternoon" : false,
        "evening" : false,
        "night" : false,
    },
    "monday" : {
        "day" : "月",
        "morning" : false,
        "afternoon" : false,
        "evening" : false,
        "night" : false,
    },
    "tuesday" : {
        "day" : "火",
        "morning" : false,
        "afternoon" : false,
        "evening" : true,
        "night" : true,
    },
    "wednesday" : {
        "day" : "水",
        "morning" : true,
        "afternoon" : true,
        "evening" : true,
        "night" : true,
    },
    "thursday" : {
        "day" : "木",
        "morning" : true,
        "afternoon" : true,
        "evening" : true,
        "night" : true,
    },
    "friday" : {
        "day" : "金",
        "morning" : true,
        "afternoon" : true,
        "evening" : true,
        "night" : true,
    },
    "saturday" : {
        "day" : "土",
        "morning" : true,
        "afternoon" : true,
        "evening" : true,
        "night" : true,
    },
}

export default function MedicationStatusTabScreen(){
    return(
        <View>
            <Text>日 月 火 水 木 金 土</Text>
            <MedicationStatus props={infomation.sunday}/>
            <MedicationStatus props={infomation.monday}/>
            <MedicationStatus props={infomation.tuesday}/>
            <MedicationStatus props={infomation.wednesday}/>
            <MedicationStatus props={infomation.thursday}/>
            <MedicationStatus props={infomation.friday}/>
            <MedicationStatus props={infomation.saturday}/>
        </View>
    )
}
