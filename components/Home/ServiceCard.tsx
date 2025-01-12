import { View, Text, TouchableOpacity, Image} from 'react-native'
const ServiceCard = ({ text, imgSrc }: { text: string, imgSrc: any }) => {
    return (
        <TouchableOpacity className='my-2' style={{width:"22%",aspectRatio:1/1,justifyContent:"center",alignItems:"center"}}>
            <View
                style={{
                    flex: 1,
                    flexDirection:"row",
                    aspectRatio: 1 / 1,
                    justifyContent: 'center',
                    alignItems:'center',
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
                    resizeMode='contain'
                    style={{flex:0.8,aspectRatio:1/1}}
                    />
            </View>
            <Text style={{flex:0.2}} className="font-bold text-sm">{text}</Text>
        </TouchableOpacity>
    )
}
export default ServiceCard