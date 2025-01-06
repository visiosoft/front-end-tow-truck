import { BlurView } from 'expo-blur';
import { ImageBackground, TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const OfferCard = ({ image, tag, text }: { image: any, tag: string, text: string }) => {
    return (
        <TouchableOpacity style={{ width: "auto", aspectRatio: 5 / 4 }}>
            <ImageBackground
                source={image}
                style={{ flex: 1, borderRadius: 20 }}
            >
                <View className="p-5">
                    <BlurView style={styles.tag} intensity={100} tint="extraLight">
                        <Text style={styles.tagText}>{tag}</Text>
                    </BlurView>
                    <Text style={styles.text}>{text}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );
};

export default OfferCard;

const styles = StyleSheet.create({
    tag: {
        alignSelf: 'flex-start', 
        paddingHorizontal: 10, 
        paddingVertical: 5,    
        borderRadius: 10,
        backgroundColor: "white",
        opacity: 0.75,
        fontSize: 8,
        overflow: "hidden",
    },
    tagText: {
        color: "black",
        fontWeight: "bold",
    },
    text: {
        color: "#F5F5F5",
        fontWeight: "bold",
        fontSize: 24,
    },
});
