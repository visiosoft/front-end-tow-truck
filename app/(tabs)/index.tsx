
import MapView, { Marker } from 'react-native-maps';
import { ActivityIndicator, View, StyleSheet, Dimensions, Text, Image } from "react-native";
import useLocation from '@/hooks/useLocation';
const index = () => {
    const { isLoading, location, error } = useLocation();
    if (isLoading) {
        return <View className='w-screen h-screen flex justify-center items-center'><ActivityIndicator size={"large"} /></View>
    }
    if (error) {
        return <Text className='h-screen w-screen flex justify-center items-center text-red-500'>{error}</Text>
    }
    return (
        <View>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 37.7749,
                    longitude: -122.4194,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker
                    coordinate={{
                        latitude: 37.7749,
                        longitude: -122.4194
                    }}
                    title='My location'
                    pinColor='red'
                />
                <Marker
                    coordinate={{
                        latitude: 37.7833,
                        longitude: -122.4167
                    }}
                >
                    <Image
                        source={require("@/assets/images/truck.png")}
                        style={{ width: 30, height: 30 }}
                    />
                </Marker>
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