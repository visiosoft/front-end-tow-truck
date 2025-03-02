import MapView, { Marker, Region } from 'react-native-maps';
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet"
import { ActivityIndicator, View, StyleSheet, Dimensions, Text, Image, TouchableOpacity } from "react-native";
import useLocation from '@/hooks/useLocation';
import { useEffect, useRef, useState } from 'react';
import { FontAwesome, MaterialIcons, Ionicons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import ApiUrl from '@/constants/ApiUrl';
import { ScrollView } from 'react-native-gesture-handler';

export default function index(){
    const [initialRegion, setInitialRegion] = useState<undefined | Region>();
    const mapViewRef = useRef<MapView>(null);
    const bottomSheetRef = useRef<BottomSheet>(null);
    const [drivers, setDrivers] = useState([]);
    const [loading, setLoading] = useState(true);
    const { isLoading, location, error } = useLocation();
    const handleTruckPress = () => {
        bottomSheetRef.current?.expand();
    };
    useEffect(() => {         
            setInterval(async () => {
            try {
                let response = await fetch(ApiUrl+"/api/Location");
                if (response.ok) {
                    let drivers = await response.json();
                    setDrivers(drivers);
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        },5000)
    }, [])
    useEffect(() => {
        if (location) {
            let region: Region = {
                ...location.coords,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }
            setInitialRegion(region);
        }
    }, [location])
    if (loading || isLoading) {
        return <View className='h-full justify-center items-center'><ActivityIndicator size={"large"} /></View>
    }
    if (error) {
        return <View className='h-screen w-screen justify-center items-center'><Text style={{ fontFamily: "ProximaNova-Regular" }} className='text-red-500 text-center'>{error}</Text></View>
    }
    return (
        <View>
            <View className="bg-white absolute top-20 right-3 z-10 drop-shadow-2xl rounded-full">
                <TouchableOpacity className="items-center justify-center px-3 py-3">
                    <MaterialIcons onPress={() => {
                        mapViewRef.current?.animateToRegion(initialRegion);
                    }}
                        name="navigation" size={24} className="text-gray-800" />
                </TouchableOpacity>
                <View className='h-[2px] w-full bg-[#d5d7d6] text-[#d5d7d6]' />
                <TouchableOpacity className="items-center justify-center px-3 py-3">
                    <MaterialIcons name="menu" size={24} className="text-gray-800" />
                </TouchableOpacity>
            </View>
            <MapView
                ref={mapViewRef}
                style={styles.map}
                initialRegion={{
                    ...location?.coords, latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                }}
            >
                <Marker
                    coordinate={{ ...location?.coords }}
                    title='My location'
                    pinColor='red'
                />
                {
                    drivers.map(driver => (
                        <Marker
                            key={driver.driverId}
                            coordinate={{
                                latitude: driver.latitude,
                                longitude: driver.longitude
                            }}
                            onPress={handleTruckPress}
                        >
                            <TouchableOpacity>
                                <Image
                                    source={require("@/assets/images/truck.png")}
                                    style={{ width: 30, height: 30 }}
                                    resizeMode='contain'
                                />
                            </TouchableOpacity>
                        </Marker>
                    ))
                }
            </MapView>
            <BottomSheet
                ref={bottomSheetRef}
                index={-1}
                snapPoints={["100%"]}
                enablePanDownToClose={true}
                handleIndicatorStyle={{ backgroundColor: "#D5D7D6" }}
            >
                <BottomSheetView className='flex'>
                    <View className='flex justify-evenly items-center gap-y-5 p-5'>
                        <View style={{ height: Dimensions.get("window").height * 0.15 }} className='flex-row'>
                            <View className='w-1/2 justify-start'>
                                <Text style={{fontFamily:"ProximaNova-Bold"}} className='my-2 w-5/6 text-[#414141] text-3xl font-bold'>Make and Model of Car.</Text>
                                <View>
                                    <Text style={{ fontFamily: "ProximaNova-Regular" }} className='w-2/3 text-center text-[#3F3F3F] px-4 py-2 border-[#E1E1E1] border-2'>A-645546</Text>
                                </View>
                            </View>
                            <View className='w-1/2 items-center justify-start'>
                                <Image
                                    source={require("@/assets/images/truck.png")}
                                    style={{ flex: 1, aspectRatio: 1 / 1 }}
                                    resizeMode='contain'
                                />
                            </View>
                        </View>
                        <View style={{ height: Dimensions.get("window").height * 0.1 }} className='w-full flex-row justify-evenly items-center'>
                            <View className='w-1/6 items-center'>
                                <FontAwesome name="users" size={50} color="#b4b3b9" />
                                <Text style={{fontFamily:"ProximaNova-Regular"}} className='text-center'>Icon</Text>
                            </View>
                            <View className='w-1/6 items-center'>
                                <MaterialIcons name="timeline" size={50} color="#b4b3b9" />
                                <Text style={{fontFamily:"ProximaNova-Regular"}} className='text-center'>Icon</Text>
                            </View>
                            <View className='w-1/6 items-center'>
                                <Ionicons name="play-circle" size={50} color="#b4b3b9" />
                                <Text style={{fontFamily:"ProximaNova-Regular"}} className='text-center'>Icon</Text>
                            </View>
                            <View className='w-1/6 items-center'>
                                <Ionicons name="speedometer-outline" size={50} color="#b4b3b9" />
                                <Text style={{fontFamily:"ProximaNova-Regular"}} className='text-center'>Icon</Text>
                            </View>
                            <View className='w-1/6 items-center'>
                                <FontAwesome name="tint" size={50} color="#b4b3b9" />
                                <Text style={{fontFamily:"ProximaNova-Regular"}} className='text-center'>Icon</Text>
                            </View>
                        </View>
                        <View style={{ height: Dimensions.get("window").height * 0.15 }} className='w-full flex-row justify-between'>
                            <View className='w-[47%] justify-evenly items-center bg-[#E4F4E9] rounded-3xl'>
                                <View className='flex-row justify-around items-center'>
                                    <View className='w-1/3 justify-center items-center aspect-square rounded-full border border-[#CEDBD1]'>
                                        <FontAwesome5 name="parking" size={30} color="#1CA24D" />
                                    </View>
                                    <Text style={{ fontFamily: "ProximaNova-Bold" }} className='w-1/2 text-center font-bold text-lg text-[#4B4C4E]'>Parking is Included</Text>
                                </View>
                                <TouchableOpacity className='bg-[#4B4C4E] py-3 px-4 rounded-full'>
                                    <Text style={{ fontFamily: "ProximaNova-Bold" }} className='text-[#FDFEFF] font-bold'>More Details</Text>
                                </TouchableOpacity>
                            </View>
                            <View className='w-[47%] justify-evenly items-center bg-[#E4F4E9] rounded-3xl'>
                                <View className='flex-row justify-around items-center'>
                                    <View className='w-1/3 justify-center items-center aspect-square rounded-full border border-[#CEDBD1]'>
                                        <MaterialCommunityIcons name="fuel" size={30} color="#1CA24D" />
                                    </View>
                                    <Text style={{ fontFamily: "ProximaNova-Bold" }} className='w-1/2 text-center font-bold text-lg text-[#4B4C4E]'>Fuel Cost Included</Text>
                                </View>
                                <TouchableOpacity className='bg-[#4B4C4E] py-3 px-4 rounded-full'>
                                    <Text style={{ fontFamily: "ProximaNova-Bold" }} className='text-[#FDFEFF] font-bold'>More Details</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ height: Dimensions.get("window").height * 0.15 }} className='w-full'>
                            <Text style={{ fontFamily: "ProximaNova-Bold" }} className='font-bold text-3xl text-[#161616]'>Terms of Rental.</Text>
                            <View className='flex-row justify-between'>
                                <Text style={{ fontFamily: "ProximaNova-Semibold" }} className='text-[#7C7C7C] text-lg font-semibold'>Trip Fee</Text>
                                <Text style={{ fontFamily: "ProximaNova-Bold" }} className='text-[#5C5C5C] text-lg font-bold'>6 AED / Day</Text>
                            </View>
                            <View className='flex-row justify-between'>
                                <Text style={{ fontFamily: "ProximaNova-Semibold" }} className='text-[#7C7C7C] text-lg font-semibold'>Milage Included.</Text>
                                <Text style={{ fontFamily: "ProximaNova-Bold" }} className='text-[#5C5C5C] text-lg font-bold'>150 Kilometers / Day</Text>
                            </View>
                            <View className='flex-row justify-between'>
                                <Text style={{ fontFamily: "ProximaNova-Semibold" }} className='text-[#7C7C7C] text-lg font-semibold'>Excess KM</Text>
                                <Text style={{ fontFamily: "ProximaNova-Bold" }} className='text-[#5C5C5C] text-lg font-bold'>2 AED / KM</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={{height:Dimensions.get("window").height*0.15}} className="w-full">
                            <Text style={{ fontFamily: "ProximaNova-Semibold" }} className='text-center py-3 bg-[#18A549] rounded-2xl font-semibold text-[#89E3A6] text-2xl'>Reserve Now.</Text>
                        </TouchableOpacity>
                    </View>
                </BottomSheetView>
            </BottomSheet>
        </View>
    )
}

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
});