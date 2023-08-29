import { Text, TouchableOpacity } from "react-native"
export default function DaySetting({ props, onPress }) {

    return(
        <TouchableOpacity onPress={onPress}>
            <Text>
                {props.name}{props.time}
            </Text>
        </TouchableOpacity>
    )
}