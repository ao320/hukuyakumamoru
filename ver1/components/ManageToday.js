import { View, Text, StyleSheet } from "react-native"

export default function ManageToday({props}) {
    const { isCupComplete, isImageComplete, name } = props
    return(
        <View style={style.container}>
            <Text style={style.day}>
                {name}
            </Text>
            {isCupComplete ? (
                isImageComplete ? (
                    <Text style={style.textComplete}>完了</Text>
                ) : (
                    <>
                        <Text style={style.text}>画像認識未</Text>
                        <Text style={style.textCupComplete}>コップ済</Text>
                    </>
                )
            ) : (
                isImageComplete ? (
                    <>
                        <Text style={style.textImageComplete}>画像認識済</Text>
                        <Text style={style.text}>コップ未</Text>
                    </>
                ) : (
                    <Text style={style.text}>未完了</Text>
                )
            )}
        </View>
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
        alignItems: "center"
    },
    day: {
        position: "absolute",
        left: 30,
        fontWeight: "600",
        fontSize: 50
    },
    textComplete: {
        color: "red",
        fontWeight: "500",
        fontSize: 40
    },
    textCupComplete: {
        color: "red",
        fontWeight: "400",
        fontSize: 30
    },
    textImageComplete: {
        color: "red",
        fontWeight: "400",
        fontSize: 30
    },
    text: {
        fontWeight: "300",
        fontSize: 20
    }

})
