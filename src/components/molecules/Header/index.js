import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-remix-icon';
import headerStyle from './headerStyle';
import { widthPercentageToDP } from 'react-native-responsive-screen';

const Header = () => {
    const navigation = useNavigation();
    return(
        <View style={headerStyle.header}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={headerStyle.buttonBack}>
                <Icon name="arrow-left-line" size={widthPercentageToDP("12%")} color="#fff" />
            </TouchableOpacity>
        </View>
    )
}

export default Header;
