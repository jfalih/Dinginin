import React from 'react';
import { FlatList } from 'react-native';
import ListPicker from '../../../components/atoms/ListPicker';
import { storeData } from '../../../utils/AsyncStorage';
import Register from './../../../components/templates/Register/index';
import Provinsi from './../../../utils/dummies/provinsi';

const ProvinsiScreen = ({ navigation }) => (
    <Register
        title={"Kamu berasal dari provinsi apa?"}
        description={"Pilih provinsi daerah asal kamu.."}
    >
        <FlatList 
            keyExtractor={(item, index) => index.toString()}
            data={Provinsi}
            renderItem={({item}) => (
                <ListPicker text={item.name} onPress={() => {
                    navigation.navigate('Nama')
                    storeData('keyA', 'IniValueeeeeeeeeeeeee');
                }}/>
            )}
        />
    </Register>
)

export default ProvinsiScreen;
