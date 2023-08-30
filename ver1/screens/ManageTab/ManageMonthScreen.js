import { View, Text } from "react-native"
import {Calendar} from "react-native-calendars"

const infomation = {
    "2023-09-01" : {
        "completedNumber" : 4
    },
    "2023-09-02" : {
        "completedNumber" : 4
    },
    "2023-09-03" : {
        "completedNumber" : 4
    },
    "2023-09-04" : {
        "completedNumber" : 4
    },
    "2023-09-05" : {
        "completedNumber" : 4
    },
    "2023-09-06" : {
        "completedNumber" : 4
    },
    "2023-09-01" : {
        "completedNumber" : 4
    },
}

export default function ManageMonthScreen(){
    return(
        <Calendar
            monthFormat={'yyyy年 M月'}
            markingType={'custom'}
            markedDates={{

            }}
        />
    )
}
