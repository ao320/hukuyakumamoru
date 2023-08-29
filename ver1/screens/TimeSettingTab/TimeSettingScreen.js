import { View, Text, TouchableOpacity } from "react-native"

export default function TimeSettingScreen({ route, navigation }){
    const {day, time} = route.params
    return(
            <View>
                <Text>
                    {day}
                </Text>
                <Text>
                    {time.name}{time.time}
                </Text>
            </View>
    )
}