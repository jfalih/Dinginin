import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import buttonStyle from './buttonStyle';
import Colors from './../Colors/index';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import I18n from './../../../i18n/index';

const Button = ({onPress, text, backgroundColor, type}) => (
    <TouchableOpacity onPress={onPress}
    style={buttonStyle.button({backgroundColor, type})}>
        <Text style={{
            color:Colors.black,
            fontSize:heightPercentageToDP("2%"),
            fontFamily:'OpenSans-Bold'
        }}>{text}</Text>
    </TouchableOpacity>
)

export default Button;
