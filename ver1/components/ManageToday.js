import { View, Text } from "react-native"

export default function ManageToday({props}) {
    const { isCupComplete, isImageComplete, name } = props
    return(
        <View>
            <Text>
                {name}
            </Text>
            {isCupComplete ? (
                isImageComplete ? (
                    <Text>完了</Text>
                ) : (
                    <Text>画像認識未 コップ済</Text>
                )
            ) : (
                isImageComplete ? (
                    <Text>画像認識済 コップ未</Text>
                ) : (
                    <Text>未完了</Text>
                )
            )}
        </View>
    )
}
