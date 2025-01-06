import * as SecureStore from 'expo-secure-store';
import { useRouter } from 'expo-router';
import { View, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
export default ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async () => {
            let user = await SecureStore.getItemAsync("user");
            if (!user) {
                setLoading(false);
                router.replace("/login");
            }
            setLoading(false);
        })();
    }, [])
    if (loading) {
        return <View className='w-screen h-screen flex justify-center items-center'><ActivityIndicator size={"large"} /></View>
    }
    {children}
};