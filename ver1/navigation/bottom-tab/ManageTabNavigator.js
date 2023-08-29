import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import ManageTodayScreen from "../../screens/ManageTab/ManageTodayScreen";
import ManageMonthScreen from "../../screens/ManageTab/ManageMonthScreen";

const TopTab = createMaterialTopTabNavigator()


export default function ManageTabNavigator() {
    return (
        <TopTab.Navigator 
            screenOptions={{ 
                tabBarActiveTintColor: "black",
            }}
        >
            <TopTab.Screen
                name="Today"
                component={ManageTodayScreen}
                options={{ headerTitle: "Top Tab One Title" }}
            />
            <TopTab.Screen
                name="Month"
                component={ManageMonthScreen}
                options={{ headerTitle: "Top Tab Two Title" }}
            />
        </TopTab.Navigator>
    );
}