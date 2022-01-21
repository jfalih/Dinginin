import React from 'react';
import { FlatList, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Header from '../../molecules/Header';
import Colors from './../../atoms/Colors';

const Register = ({
    children,
    title,
    description
}) => {
    return (
        <View style={{
            flex:1,
            padding:20,
            backgroundColor:Colors.primary
        }}>
            <Header/>
            <Text style={{
                fontSize: heightPercentageToDP("4%"),
                fontFamily:'OpenSans-Bold',
                marginBottom:5,
                color: Colors.white
            }}>{title}</Text>
            <Text style={{
                marginBottom:50,
                color: Colors.white,
                fontSize: heightPercentageToDP("2%")
            }}>{description}</Text>
            {children}
        </View>
    )
}

export default Register;
