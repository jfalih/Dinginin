import React from 'react';
import { Text, TextInput, View } from "react-native"
import Register from '../../../components/templates/Register';
import Colors from './../../../components/atoms/Colors/index';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import Icon from 'react-native-remix-icon';
import Button from '../../../components/atoms/Button';
import LineInput from '../../../components/atoms/Input/LineInput';
import { getData, storeData } from '../../../utils/AsyncStorage';

const NamaScreen = ({ navigation }) => {
    const [active, setActive] = React.useState(false);    
    return(
        <Register
            title={"Nama kamu siapa sih?"}
            description={"Aku belum kenal kamu nih.."}
        >
            <View style={{
                flex:1,
                alignItems:'center'
            }}>
            <LineInput onFocus={() => setActive(true)} active={active} onBlur={() => setActive(false)}/>
            <Button onPress={() => navigation.navigate('Dashboard')} backgroundColor={Colors.secondary} type="fill" text="Lanjut!"/>
            </View>
        </Register>
    )
}

export default NamaScreen;
