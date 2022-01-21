import { StyleSheet } from "react-native";
import Colors from './../Colors/index';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const listPickerStyle = StyleSheet.create({
    listPicker: {
        flexDirection:'row',
        padding:20,
        alignItems:'center',
        marginBottom:20,
        backgroundColor:Colors.primary50,
        borderRadius:25
    },
    text: {
        color:'#fff',
        fontFamily:'OpenSans-Bold',
        fontSize:heightPercentageToDP("2%")
    },
    icon: {
        marginLeft:'auto',
        width: widthPercentageToDP("12%"),
        height: widthPercentageToDP("12%"),
        alignItems:'center',
        justifyContent:'center',
        borderRadius:widthPercentageToDP("12%"),
        backgroundColor:Colors.secondary
    }
})

export default listPickerStyle;
