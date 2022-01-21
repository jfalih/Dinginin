import { StyleSheet } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const lineInputStyle = StyleSheet.create({
    lineInput: (props) => ({
        flexDirection:'row',
        height: heightPercentageToDP("8%"),
        width: widthPercentageToDP("100%")-40,
        alignItems:'center',
        marginBottom:50,
        borderBottomColor: props.active ? "#fff" : "rgba(255,255,255,0.2)" ,
        borderBottomWidth:1
    }),
    fieldInput: {
        flex:1,
        paddingLeft:40,
        color: "rgba(255,255,255,0.6)",
        fontSize:heightPercentageToDP("3%"),
        fontFamily:'OpenSans-Regular',
    },
    iconInput: {
        position:'absolute',
        left:0
    }
})

export default lineInputStyle;
