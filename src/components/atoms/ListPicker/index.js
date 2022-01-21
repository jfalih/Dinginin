import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import listPickerStyle from './listPickerStyle';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import Colors from './../Colors/index';
import Icon from 'react-native-remix-icon';
const ListPicker = ({text, onPress}) => (
    <TouchableOpacity onPress={onPress} style={listPickerStyle.listPicker}>
        <Text style={listPickerStyle.text}>{text}</Text>
        <View style={listPickerStyle.icon}>
            <Icon name="arrow-right-line" size={heightPercentageToDP("3%")} color={Colors.black}/>
        </View>
    </TouchableOpacity>
)

export default  ListPicker;
