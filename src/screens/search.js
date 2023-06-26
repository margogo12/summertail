import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text} from 'react-native';
import { Image } from 'react-native';

const SearchScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    navigation.navigate('results', { searchQuery });
  };

  return (
    <View>
        <View style={styles.logocontainer}>
        <Text style={styles.greetings}>Hello there!</Text>
        <Image source={require('../../assets/logo.png')} style={styles.image} />

        </View>
        
        

      <TextInput
        placeholder="Enter a drink name"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <Button title="Search" onPress={handleSearch} />
    </View>
  );
};
const styles = StyleSheet.create({
    logocontainer:{
        flexDirection: 'row',
        alignItems:'center'
    },

    image: {
      width: 50,
      height: 50,
      borderRadius: 100,
      marginRight:0,
      marginLeft: 250
    },
    greeting:{
        fontSize:18,
        fontWeight:'bold'
    }
  });
  
export default SearchScreen;