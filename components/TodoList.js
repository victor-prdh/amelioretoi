import React, {useState} from "react";
import { View, TouchableOpacity, Text, useColorScheme } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import ColorStyle from '../ColorStyle';

export default function TodoList({ item, deleteItem, updateItem }) {

    const [etat, setEtat] = useState(item.etat);


    const isDarkMode = useColorScheme() === 'dark';

    const textStyle = {
      color: isDarkMode ? ColorStyle.colors.textDark : ColorStyle.colors.text,
      fontSize: 17, fontWeight: '500',  width: "90%", textDecorationLine: etat ? 'none' : 'line-through', textDecorationStyle: 'solid'
    }

    return (
        <TouchableOpacity style={{paddingTop: 8, borderColor: isDarkMode ? ColorStyle.colors.muted : "#000000", borderBottomWidth: 1,}}
          onPress={() => {
            item.etat = !item.etat
            setEtat(item.etat)
            updateItem()
          }}
          activeOpacity={0.7}
        >
        <View style={{ flex: 1, flexDirection: 'row', alignContent: 'center', alignItems: 'center', }}>
            <Text style={textStyle}>{item.value}</Text>
            <TouchableOpacity 
             style={{width: '10%', height: 40, alignItems: 'flex-end', justifyContent: 'center', }}
             onPress={() => deleteItem(item.key)}
            >
                <View >
                <Icon name={'close-circle-outline'} size={28} color={isDarkMode ? ColorStyle.colors.textDark : ColorStyle.colors.text} />
                </View>
            </TouchableOpacity>

          </View>

        </TouchableOpacity>
    );
    }


