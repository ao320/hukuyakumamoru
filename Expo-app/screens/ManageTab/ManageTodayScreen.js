import { View, Text } from "react-native"

import ManageToday from "../../components/ManageToday"

const infomation = {
    "morning" : {
        "name" : "朝",
        "isImageComplete" : true,
        "isCupComplete" : true,
    },
    "afternoon" : {
        "name" : "昼",
        "isImageComplete" : false,
        "isCupComplete" : true,
    },
    "evening" : {
        "name" : "夕",
        "isImageComplete" : true,
        "isCupComplete" : false,
    },
    "night" : {
        "name" : "夜",
        "isImageComplete" : false,
        "isCupComplete" : false,
    }
}

export default function ManageTodayScreen(){
    return(
        <View>
            <ManageToday props={ infomation.morning }/>
            <ManageToday props={ infomation.afternoon }/>
            <ManageToday props={ infomation.evening }/>
            <ManageToday props={ infomation.night }/>
        </View>
    )
}
