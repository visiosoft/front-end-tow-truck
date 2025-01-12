import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Image } from "expo-image";
import { Tabs } from 'expo-router';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { MaterialIcons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
            <Tabs.Screen
                name="index"
                options={{
                    header: () => (
                        <View className="bg-white border-b border-gray-200 shadow-sm">
                            <View className="flex-row items-center justify-between px-4 py-3">
                                <MaterialIcons name="menu" size={30} className="text-gray-400" />
                                <Image
                                    style={{width:50,height:50}}
                                    contentFit="contain"
                                    source={require("@/assets/images/truck.png")}
                                />
                                <View/>
                            </View>
                            <ScrollView
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                className="flex-row px-2 py-2"
                            >
                                <TouchableOpacity className="px-2 py-2 mx-2 items-center justify-center border border-[#d5d7d6] rounded">
                                    <MaterialCommunityIcons name="filter-variant" size={20} color="#333" />
                                </TouchableOpacity>
                                {['Per Minute', 'Daily', 'Weekly', 'Monthly', 'Yearly', 'Custom'].map(
                                    (filter, index) => (
                                        <TouchableOpacity
                                            key={index}
                                            className="mx-2 py-2 px-4 border border-[#d5d7d6] rounded-full"
                                        >
                                            <Text className="text-sm text-gray-800">{filter}</Text>
                                        </TouchableOpacity>
                                    )
                                )}
                            </ScrollView>
                        </View>
                    ),
                    title: 'Home',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name="rescue"
                options={{
                    headerShown: false,
                    title: 'Services',
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons name="car-wrench" size={28} color={color} />,
                }}
            />
        </Tabs>
    );
}