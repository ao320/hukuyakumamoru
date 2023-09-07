import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from "../../constants/Colors";

import TimeSettingTabNavigator from "./TimeSettingTabNavigator";
import ManageTabNavigator from "./ManageTabNavigator";
import MedicationStatusTabNavigation from "./MedicationStatusTabNavigation";

const BottomTab = createBottomTabNavigator()

export default function BottomTabNavigator() {
    return(
        <BottomTab.Navigator 
            initialRouteName="TimeSettingTab"
            screenOptions={{ 
                tabBarActiveTintColor: "black",
            }}
        >
            <BottomTab.Screen
                name="TimeSettingTab"
                component={TimeSettingTabNavigator}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="timetable" size={24} color={color} />
                    ) 
                }}
            />
            <BottomTab.Screen
                name="ManageTab"
                component={ManageTabNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="areachart" size={24} color={color} />
                    )
                }}
            />
            <BottomTab.Screen
                name="MedicationStatusTab"
                component={MedicationStatusTabNavigation}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="medicinebox" size={24} color={color} />
                    )
                }}
            />
        </BottomTab.Navigator>
    )
}