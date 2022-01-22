import React, {useState} from 'react';
import {
   useColorScheme,
   View,
   TextInput,
   TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ColorStyle from '../ColorStyle';

export default function AddInput({ submitHandler }) {
    const [value, setValue] = useState("");

    const isDarkMode = useColorScheme() === 'dark';

    const onChangeText = (text) => {
      setValue(text);
    };

    return (
      
      <View style={{position: 'absolute', bottom: 30, alignSelf: 'center', flex: 1, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', backgroundColor: isDarkMode ? ColorStyle.colors.backgroundDark : ColorStyle.colors.background, paddingHorizontal:15}}>
            <TextInput placeholder="Ajouter une tâche..." 
          onChangeText= {onChangeText}
          value={value} style={{height: 40,
              borderColor: isDarkMode ? ColorStyle.colors.muted : "#000000",
              borderBottomWidth: 1,
              marginBottom: 0,
            width: "85%", 
            color: isDarkMode ? ColorStyle.colors.textDark : ColorStyle.colors.text,}} 
              />
              <TouchableOpacity 
              style={{width: '15%', height: 40, flex: 1, alignItems: 'flex-end', justifyContent: 'center'}}
              onPress={() => {
                if (value) setValue(submitHandler(value));
              }}
              >
                  <View >
                  <Icon name={'add-circle-outline'} size={28} color={ColorStyle.colors.gold} />
            </View>
          </TouchableOpacity>

            </View>
    );
}
