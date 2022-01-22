import React, {useState, useEffect} from 'react';
import {
   SafeAreaView,
   StatusBar,
   Text,
   useColorScheme,
   View,
   Keyboard,
   KeyboardAvoidingView,
   TouchableWithoutFeedback,
   FlatList
} from 'react-native';
import ColorStyle from '../ColorStyle';
import AddInput from "./AddInput";
import TodoList from "./TodoList";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function TodoScreen() {
  const [data, setData] =  useState([]);
  const isDarkMode = useColorScheme() === 'dark';

  
  useEffect(() => {
    getTodoFromStorage()
  }, [])

  const storeTodo = async (value) => {
      try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('todo', jsonValue)
      } catch (e) {
        console.log(e)
      }
    }

    async function getTodoFromStorage () {
      try {
        const jsonValue = await AsyncStorage.getItem('todo')
        if (jsonValue !== null) {
          setData(JSON.parse(jsonValue))
        } else {
          setData([])
        }
      } catch(e) {
        console.log(e)
      }
    }
 
  const submitHandler = (value) => {
    var newData = (prevTodo) => {
      return [
        {
          value: value,
          key: Math.random().toString(),
          etat: true
        },
        ...prevTodo,
      ];
    }
    setData(newData(data));
    storeTodo(newData(data))
    };

    const updateItem = () => {
      console.log(data);
      storeTodo(data)
      };

    const deleteItem = (key) => {
      var newData = (prevTodo) => {
        return prevTodo.filter((todo) => todo.key != key);
      }

      console.log(newData(data))

      setData(newData(data));
      storeTodo(newData(data))
    };

    const backgroundStyle = {
      flex: 1,
      backgroundColor: isDarkMode ? ColorStyle.colors.backgroundDark : ColorStyle.colors.background,
    };

    const textStyle = {
      color: isDarkMode ? ColorStyle.colors.textDark : ColorStyle.colors.text,
      fontWeight: 'bold',
      fontSize: 22,
      textAlign: 'center'
    }

    const container = {
      flex: 1,
      backgroundColor: isDarkMode ? ColorStyle.colors.backgroundDark : ColorStyle.colors.background,
      justifyContent: 'flex-start',
    }

    return (
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={backgroundStyle}
      keyboardVerticalOffset={30}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{flex: 1,
      backgroundColor:'green'}}>
        <View style={container}>
          <Text style={{fontWeight: 'bold', fontSize: 30, paddingHorizontal: 15, paddingTop: 15, color: isDarkMode ? ColorStyle.colors.textDark : ColorStyle.colors.text,}}
          >
            Vos objectifs
          </Text>

          <FlatList
          style={{
            maxHeight: '80%',
            marginTop: 20,
            borderColor: isDarkMode ? ColorStyle.colors.muted : "#000000", 
            borderTopWidth: 1,
            paddingHorizontal: 15
          }}
              data={data}
              keyExtractor={(item) => item.key}
              renderItem={({ item }) => (
                <TodoList item={item} deleteItem={deleteItem} updateItem={updateItem} />
              )}
            />


          <AddInput submitHandler={submitHandler}  />



          
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
      </SafeAreaView>
    );
};