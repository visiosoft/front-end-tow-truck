import MapView, { Marker } from 'react-native-maps';
import { ActivityIndicator, View, StyleSheet, Dimensions, Text, Image } from "react-native";
import useLocation from '@/hooks/useLocation';
import { useEffect, useState } from 'react';
const index = () => {
    const [drivers, setDrivers] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async () => {
            try {
                let response = await fetch("https://localhost:7215/api/Location");
                if (response.ok) {
                    let drivers = await response.json();
                    setDrivers(drivers);
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        })();
    },[])
    // const { isLoading, location, error } = useLocation();
    if (loading) {
        return <View className='w-screen h-screen flex justify-center items-center'><ActivityIndicator size={"large"} /></View>
    }
    // if (error) {
    //     return <Text className='h-screen w-screen flex justify-center items-center text-red-500'>{error}</Text>
    // }
    return (
        <View>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 25.276987,
                    longitude: 55.296249,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker
                    coordinate={{
                        latitude: 25.276987,
                        longitude: 55.296249
                    }}
                    title='My location'
                    pinColor='red'
                />
                {
                    drivers.map(driver => {
                        return (
                            <Marker
                                coordinate={{
                                    latitude: driver.latitude,
                                    longitude: driver.longitude
                                }}
                            >
                                <Image
                                    source={require("@/assets/images/truck.png")}
                                    style={{ width: 30, height: 30 }}
                                />
                            </Marker>
                        )
                    })
                }
            </MapView>
        </View>
    )
}
export default index
const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});