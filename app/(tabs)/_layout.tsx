import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
            <Tabs.Screen
                name="index"
                options={{
                    headerShown:false,
                    title: 'Home',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name="rescue"
                options={{
                    headerShown:false,
                    title: 'Services',
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons name="car-wrench" size={28} color={color} />
                }}
            />
        </Tabs>
    );
}