import React from 'react';
import { useState, useEffect } from 'react';
import {
   SafeAreaView,
   StatusBar,
   TouchableOpacity,
   Text,
   useColorScheme,
   View,
} from 'react-native';
import ColorStyle from '../ColorStyle';
import Quotes from '../quotes.json';
 
const getRandomQuote = () => {
   var quoteNumber = Object.keys(Quotes.quotes).length
   var randomNumber = Math.floor(Math.random() * quoteNumber);
 
   return Quotes.quotes[randomNumber]
}
 
 
export default function QuoteScreen ()  {
   
   const [quote, setQuote] = useState(getRandomQuote());
   
   
   const isDarkMode = useColorScheme() === 'dark';
 
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
 
   return (
     <SafeAreaView style={backgroundStyle}>
       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
         <View
           style={{
             flex: 5,
             backgroundColor: isDarkMode ? ColorStyle.colors.backgroundDark : ColorStyle.colors.background,
             justifyContent: 'center',
             paddingHorizontal: 15,
             
           }}>
 
           <Text style={textStyle}>{quote.quote}</Text>
           <Text style={{
             color: isDarkMode ? ColorStyle.colors.textDark : ColorStyle.colors.text,
             fontWeight: 'bold',
             fontSize: 12,
             paddingTop: 18,
             textAlign: 'right'
           }}> {quote.author} </Text>
          
         </View>
         <View style={{
             flex: 1,
             backgroundColor: isDarkMode ? ColorStyle.colors.backgroundDark : ColorStyle.colors.background,
             justifyContent: 'center',
             alignItems: 'center',
             paddingHorizontal: 12,
           }}>
           <TouchableOpacity onPress={() => setQuote(getRandomQuote())} 
             style={{
               alignItems: 'center',
               justifyContent: 'center',
               paddingVertical: 12,
               paddingHorizontal: 32,
               borderRadius: 4,
               elevation: 3,
               backgroundColor: ColorStyle.colors.gold,
             }}
             activeOpacity={0.6}
           >
             <Text 
             style={{
               color: ColorStyle.colors.textDark,
               fontSize: 18
             }}>Encore une</Text>
           </TouchableOpacity>
         </View>
     </SafeAreaView>
   );
};