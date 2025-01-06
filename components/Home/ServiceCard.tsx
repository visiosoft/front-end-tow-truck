import { View, Text, TouchableOpacity} from 'react-native'
import { Image } from 'expo-image'
const ServiceCard = ({ text, imgSrc }: { text: string, imgSrc: any }) => {
    return (
        <TouchableOpacity style={{width:80,height:80}} className="flex-col items-center justify-between">
            <View
                className="flex justify-center items-center"
                style={{
                    borderWidth: 2,
                    borderColor: '#f6f6f6',
                    borderRadius: 20,
                    shadowColor: '#fafafa',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.1,
                    shadowRadius: 3,
                    elevation: 3,
                }}
            >
                <Image
                    source={imgSrc}
                    contentFit="contain"
                    style={{ width: 70, height: 70 }}
                />
            </View>
            <Text className="font-bold text-sm">{text}</Text>
        </TouchableOpacity>
    )
}
export default ServiceCard