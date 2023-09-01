import { View, Text, StyleSheet, Dimensions } from "react-native"
import {Calendar} from "react-native-calendars"

const infomation = [
    {
        "date": "2023-09-01",
        "completedNumber" : 1
    },
    {
        "date": "2023-09-02",
        "completedNumber" : 2
    },
    {
        "date": "2023-09-03",
        "completedNumber" : 3
    },
    {
        "date": "2023-09-04",
        "completedNumber" : 4
    },
    {
        "date": "2023-09-05",
        "completedNumber" : 0
    },
    {
        "date": "2023-09-06",
        "completedNumber" : 2
    },
    {
        "date": "2023-09-07",
        "completedNumber" : 1
    },
]

const createDates = (data) => {
    const markedDates = {}
    data.forEach(value => {
        let backgroundColor
        switch (value.completedNumber) {
            case 1:
                backgroundColor = "#E0B89C"
                break
            case 2:
                backgroundColor = "#F69C5B"
                break
            case 3:
                backgroundColor = "#FF8A36"
                break
            case 4:
                backgroundColor = "#FF6A00"
                break
        }
        markedDates[value.date] = {
            customStyles : {
                container : {
                    backgroundColor : backgroundColor
                },
                text : {
                    color : "black",
                    fontWeight: "bold"
                }
            }
        }
    })
    return markedDates
}

let { height, width } = Dimensions.get("screen")

const handleLayout = () => {
    height = Dimensions.get("window").height
    width = Dimensions.get("window").width
    console.log(Dimensions.get("window").height)
    style = StyleSheet.create({
        container: {
            width: width - 100,
            height: height - 450,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 20,
            borderRadius: 15
        }
    })
}

export default function ManageMonthScreen(){
    return(
        <View onLayout={handleLayout}>
            <Calendar
                style={style.container}
                monthFormat={'yyyy年 M月'}
                markingType={'custom'}
                markedDates={createDates(infomation)}
            />
        </View>
    )
}

let style = StyleSheet.create({
    container: {
        width: width - 100,
        height: height - 450,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 20,
        borderRadius: 15
    }
})
