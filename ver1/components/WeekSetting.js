import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function WeekSetting({props,onPress}) {
    const {day, morning, afternoon, evening, night} = props
    return(
        <TouchableOpacity onPress={onPress} >
            <View style={style.container}>
                <Text style={style.day}>{day}</Text>
                <Text style={style.item} numberOfLines={2}>
                    {morning.name} {morning.time}　
                    {afternoon.name} {afternoon.time}
                    {"\n"}
                    {evening.name} {evening.time}　
                    {night.name} {night.time}
                </Text>
            </View>
        </TouchableOpacity>
    )

}

const style = StyleSheet.create({
    container: {
        width: 400,
        height: 100,
        backgroundColor : "white",
        marginTop: 20,
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "center",
        textAlign: "center",
    },
    day: {
        fontWeight: "500",
        fontSize: 50,
        lineHeight: 100,
        marginRight: 30
    },
    item: {
        fontWeight: "400",
        fontSize: 30,
        lineHeight: 50,
    },
})
