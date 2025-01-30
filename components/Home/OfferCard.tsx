
import { ImageBackground, TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const OfferCard = ({ image, tag, text }: { image: any, tag: string, text: string }) => {
    return (
        <TouchableOpacity style={{ flex: 6, aspectRatio: 5 / 4 }}>
            <ImageBackground
                source={image}
                style={{ flex: 1, borderRadius: 20 }}
            >
                <View className="p-5">
                    <View style={styles.tag}>
                        <Text style={styles.tagText}>{tag}</Text>
                    </View>
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
        fontFamily: "ProximaNova-Bold"
    },
    text: {
        color: "#F5F5F5",
        fontWeight: "bold",
        fontSize: 24,
        fontFamily: "ProximaNova-Bold"
    },
});
