import React from 'react';
import { Image, Text, View, TouchableOpacity, FlatList } from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Colors from './../../components/atoms/Colors/index';

const DashboardScreen = () => {
  const [kota, setKota] = React.useState(null);
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: Colors.primary,
      }}>
        <View style={{
          width: widthPercentageToDP('100%')-40,
          height: heightPercentageToDP('10%'),
          padding:5,
          flexDirection:'row',
          backgroundColor:Colors.white,
          borderRadius:10
        }}>
          <TouchableOpacity style={{
            flex:1,
            borderRadius:5,
            alignItems:'center',
            justifyContent:'center',
            marginRight:5,
            backgroundColor:Colors.primary
          }}>
            <Text style={{
              color:Colors.white,
              fontFamily:'OpenSans-Regular'
            }}>Cuaca</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
            flex:1,
            borderRadius:5,
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:Colors.white
          }}>
            <Text style={{
              color:Colors.primary,
              fontFamily:'OpenSans-Bold'
            }}>Gempa</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
};
export default DashboardScreen;
