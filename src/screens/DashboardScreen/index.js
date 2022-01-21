import React from 'react';
import { Image, Text, View } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Colors from './../../components/atoms/Colors/index';

const DashboardScreen = () => {
    const [kota, setKota] = React.useState(null); 
    return(
        <View style={{
            flex:1,
            padding:20,
            backgroundColor:Colors.primary
        }}>
            <Header></Header>
            <View style={{
                width: '100%',
                padding:30,
                borderRadius:50,
                backgroundColor:Colors.primary50
            }}>
                <View style={{
                    flexDirection:'row',
                    alignItems:'center',
                    marginBottom:30,
                    justifyContent:"space-between"
                }}>
                    <Text style={{
                        fontSize:heightPercentageToDP("3%"),
                        fontFamily:'OpenSans-SemiBold',
                        color: '#fff',
                    }}>Hari Ini</Text>
                    <Text style={{
                        fontSize:heightPercentageToDP("2%"),
                        fontFamily:'OpenSans-Regular',
                        color: '#fff',
                    }}>17 Aug 2003</Text>
                </View>
                <View style={{
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent:'space-between'
                }}>
                <View>
                    <View style={{
                        flexDirection:'row'
                    }}>
                        <Text style={{
                            fontFamily:'OpenSans-Bold',
                            color:Colors.white,
                            fontSize:heightPercentageToDP("6%")
                        }}>30</Text>
                        <Text style={{
                            color: Colors.secondary,
                            fontFamily:'OpenSans-Bold',
                            fontSize: heightPercentageToDP("3%")
                        }}>°C</Text>
                    </View>
                    <Text style={{
                        color:Colors.white,
                        fontSize:heightPercentageToDP("2%")
                    }}>Cerah Berawan</Text>
                </View>
                <Image style={{
                    width: widthPercentageToDP("30%"),
                    height: heightPercentageToDP("15%")
                }} source={require("../../assets/images/weather.png")}/>
                </View>
            </View>
        </View>
    )
}
export default DashboardScreen;
