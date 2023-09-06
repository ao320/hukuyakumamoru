import { View, Text, StyleSheet, Dimensions } from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen"

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
        <View style={style.container}>
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

const widthSizeRate = () => {
    const {width, height} = Dimensions.get("screen")
    let rate
    if(width > 700) {
        rate = 0.5
    } else {
        rate = 1
    }
    return rate
}

const style = StyleSheet.create({
    container: {
        marginTop: "5%",
        marginLeft: "auto",
        marginRight: "auto",
        width: wp("90%"),
        backgroundColor: "white",
    }
})