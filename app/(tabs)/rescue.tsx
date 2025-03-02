import { View, Text, TouchableOpacity, Dimensions } from "react-native"
import FuelTruck from "@/assets/images/fuel_truck.png"
import CarWash from "@/assets/images/car-wash.png"
import Battery from "@/assets/images/battery.png"
import BatteryReplacement from "@/assets/images/battery-replacement.jpg"
import Tyre from "@/assets/images/tyre.png"
import MinorService from "@/assets/images/minor-service.png"
import Fuel from "@/assets/images/fuel.png"
import Examination from "@/assets/images/examination.png"
import FuelOffer from "@/assets/images/fuel_offer.jpg";
import TyresOffer from "@/assets/images/tyres_offer.jpg";
import Emergency from "@/assets/images/emergency.png"
import IonIcons from "@expo/vector-icons/Ionicons"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import ServiceCard from "@/components/Home/ServiceCard"
import OfferCard from "@/components/Home/OfferCard"
import { ScrollView } from "react-native-gesture-handler"
const services = [
    {
        text: "Fuel",
        imgSrc: FuelTruck
    },
    {
        text: "Car Wash",
        imgSrc: CarWash
    },
    {
        text: "Battery",
        imgSrc: Battery
    },
    {
        text: "Tyres",
        imgSrc: Tyre
    },
    {
        text: "Service",
        imgSrc: MinorService
    },
    {
        text: "Inspection",
        imgSrc: Examination
    },
    {
        text: "Fuel",
        imgSrc: Fuel
    },
    {
        text: "Emergency",
        imgSrc: Emergency
    },
];
const offers = [
    {
        image: BatteryReplacement,
        tag: "Delivery in 30 mins.",
        text: "Flat battery? Get a hassle-free battery replacement."
    },
    {
        image: FuelOffer,
        tag: "Unlimited quantity",
        text: "Order Oil or Tyres and unwrap three festive gifts this season."
    },
    {
        image: TyresOffer,
        tag: "Ad",
        text: "Shell is Cafu's preferred partner of choice. Order now!"
    }
];
function rescue() {
    return (
        <ScrollView>
            <View className="p-5 gap-y-7 bg-white">
                <View className="flex-row justify-between items-baseline">
                    <Text></Text>
                    <Text style={{ fontFamily: "ProximaNova-Bold" }} className="font-bold text-xl text-[#1C1B1F]">Tow Truck</Text>
                    <TouchableOpacity><Text style={{ fontFamily: "ProximaNova-Semibold" }} className="text-[#50C4CD] font-semibold">login</Text></TouchableOpacity>
                </View>
                <View className="flex-row justify-between items-center">
                    <TouchableOpacity className="w-[49%] bg-[#F7F7F8] rounded-3xl px-2 py-4 flex-row justify-between items-center">
                        <View className="flex-row justify-between items-center">
                            <MaterialIcons className="p-1" name="location-on" size={30} color="#888888" />
                            <View>
                                <Text style={{ fontFamily: "ProximaNova-Bold" }} className="font-bold text-sm">Islamabad</Text>
                                <Text style={{ fontFamily: "ProximaNova-Semibold" }} className="font-semibold text-sm text-[#888E9A]">Delivery</Text>
                            </View>
                        </View>
                        <IonIcons name="chevron-down" size={20} color={"#C1C6CF"} />
                    </TouchableOpacity>
                    <TouchableOpacity className="w-[49%] bg-[#F7F7F8] rounded-3xl px-2 py-4 flex-row justify-between items-center">
                        <View className="flex-row justify-between items-center">
                            <IonIcons className="p-2" name="car" size={30} color="#888888" />
                            <View>
                                <Text style={{ fontFamily: "ProximaNova-Bold" }} className="font-bold text-sm">Islamabad</Text>
                                <Text style={{ fontFamily: "ProximaNova-Semibold" }} className="font-semibold text-sm text-[#888E9A]">Delivery</Text>
                            </View>
                        </View>
                        <IonIcons name="chevron-down" size={20} color={"#C1C6CF"} />
                    </TouchableOpacity>
                </View>
                <View style={{ flex:1, alignContent:"space-between"}} className="flex-row justify-between flex-wrap">
                    {
                        services.map((service, index) => <ServiceCard key={index} {...service} />)
                    }
                </View>
                {offers.map((offer, index) => <OfferCard key={index} {...offer} />)}
            </View>
        </ScrollView>
    )
}
export default rescue