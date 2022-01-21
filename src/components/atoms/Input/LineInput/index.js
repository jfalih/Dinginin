import React from 'react';
import { View, TextInput } from 'react-native';
import lineInputStyle from "./lineInputStyle"
import Icon from 'react-native-remix-icon';
import Colors from './../../Colors/index';
import { heightPercentageToDP } from 'react-native-responsive-screen';

const LineInput = ({active, onFocus, onBlur}) => {
    return (
        <View style={lineInputStyle.lineInput({active})}>
            <View style={lineInputStyle.iconInput}>
                <Icon name="user-line" color={active ? Colors.white : "rgba(255,255,255,0.2)"} size={heightPercentageToDP("4%")}/>
            </View>
            <TextInput onFocus={onFocus} onBlur={onBlur} style={lineInputStyle.fieldInput} placeholder="Masukan namamu" placeholderTextColor={active ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.2)"}/>
        </View>
    )
}

export default  LineInput;
