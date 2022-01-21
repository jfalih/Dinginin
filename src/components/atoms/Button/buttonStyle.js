import { StyleSheet } from "react-native";
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';

const buttonStyle = StyleSheet.create({
    button: (props) => ({
        height: heightPercentageToDP("9%"),
        borderRadius:25,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        width: props.type == "fill" ?  widthPercentageToDP("100%")-40 : widthPercentageToDP("50%"),
        backgroundColor:props.backgroundColor,
    })
});

export default buttonStyle;
