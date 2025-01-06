import { useEffect, useState } from "react";
import * as Location from 'expo-location';
export default () => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<undefined | string>();
    const [location, setLocation] = useState<undefined | Location.LocationObject>();
    useEffect(() => {
        async function getCurrentLocation() {
            try {
                let { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== 'granted') {
                    setError("Permission to access location was denied.This App can't work without accessing Location.");
                setIsLoading(false);
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            setIsLoading(false);
            } catch (error) {
                console.log(error);
                setIsLoading(false);
                setError("Something went Wrong!")
            }
        }
        getCurrentLocation();
    }, []);
    return { isLoading, location, error };
};