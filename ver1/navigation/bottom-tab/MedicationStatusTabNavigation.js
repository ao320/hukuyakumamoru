import { createStackNavigator } from "@react-navigation/stack";
import MedicationStatusTabScreen from "../../screens/MedicationStatusTabScreen";

const MedicationStatusTabStack = createStackNavigator();

export default function MedicationStatusTabNavigator() {
    return (
        <MedicationStatusTabStack.Navigator>
            <MedicationStatusTabStack.Screen
                name="MedicationStatusTabScreen"
                component={MedicationStatusTabScreen}
                options={{ headerTitle: "Medication Status Tab Title" }}
            />
        </MedicationStatusTabStack.Navigator>
    );
}