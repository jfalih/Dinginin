import { StyleSheet } from "react-native";
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';

const headerStyle = StyleSheet.create({
    header:{
        width: widthPercentageToDP("100%"),
        height: heightPercentageToDP("10%"),
        flexDirection:'row'
    },
    buttonBack: {
        width: widthPercentageToDP("12%"),
        height: widthPercentageToDP("12%"),
    }
});

export default headerStyle;
