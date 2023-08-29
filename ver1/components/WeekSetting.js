import { View, Text, TouchableOpacity } from "react-native";

export default function WeekSetting({props,onPress}) {
    const {day, morning, afternoon, evening, night} = props
    return(
        <TouchableOpacity onPress={onPress}>
            <Text>{day}</Text>
            <Text>{morning.name}:{morning.time}</Text>
            <Text>{afternoon.name}:{afternoon.time}</Text>
            <Text>{evening.name}:{evening.time}</Text>
            <Text>{night.name}:{night.time}</Text>
        </TouchableOpacity>
    )

}