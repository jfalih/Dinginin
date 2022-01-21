import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Button from '../../components/atoms/Button';
import Colors from './../../components/atoms/Colors/index';
import I18n from './../../i18n/index';

const OnboardingScreen = ({navigation}) => (
    <View style={{
        flex:1,
        padding:20,
        justifyContent:'space-between',
        backgroundColor: Colors.primary
    }}>
        <View style={{
            height: heightPercentageToDP("5%")
        }}>
            <Text style={{
                fontSize: heightPercentageToDP("3%"),
                color:Colors.white,
                fontFamily:'OpenSans-Bold'
            }}>Dinginin</Text>
        </View>
        <View style={{
            alignItems:'center'
        }}>
        <Image source={require("../../assets/images/weather.png")} style={{
            width: 250,
            height:250,
            marginBottom:50
        }} />
        <Text style={{
            fontSize: heightPercentageToDP("4%"),
            fontFamily:'OpenSans-SemiBold',
            textAlign:'center',
            justifyContent:'center',
            color:'#fff',
            marginBottom:20
        }}>{I18n.t('appTitle')}</Text>
        <Text style={{
            fontSize: heightPercentageToDP("2%"),
            fontFamily:'OpenSans-Regular',
            textAlign:'center',
        }}>{I18n.t('appDesc')}</Text>
        </View>
        <Button type="fill" onPress={() => navigation.navigate('Register')} text={I18n.t('buttonOnboarding')} backgroundColor={Colors.secondary} />
    </View>
)

export default OnboardingScreen;