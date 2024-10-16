import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the hook for navigation

const WelcomeScreen = () => {
  const navigation = useNavigation(); // Initialize navigation

  return (
    <View style={styles.container}>
      {/* Big heading */}
      <Text style={styles.bigHeading}>Welcome to STENT GUARD</Text>

      {/* Medium heading */}
      <Text style={styles.mediumHeading}>Your trusted stent tracking medical application</Text>

      {/* Image */}
      <Image source={require('./logo.png')} style={styles.image} />

      {/* "Don't have an account" button */}
      <TouchableOpacity 
        style={styles.outlinedButton} 
        onPress={() => navigation.navigate('Landing')} // Navigate to Landing.js
      >
        <Text style={styles.outlinedButtonText}>Don't have an account</Text>
      </TouchableOpacity>

      {/* "Have an account" button */}
      <TouchableOpacity style={styles.filledButton} onPress={() => navigation.navigate('Signin')} >
        <Text style={styles.filledButtonText}>Have an account</Text>
      </TouchableOpacity>
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ADD8E6', // Background color for the screen
  },
  bigHeading: {
    fontSize: 32,
    color: 'darkblue',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  mediumHeading: {
    fontSize: 18,
    color: 'black',
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  outlinedButton: {
    width: width * 0.8,
    borderWidth: 1,
    borderColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  outlinedButtonText: {
    color: 'black',
    fontSize: 16,
  },
  filledButton: {
    width: width * 0.8,
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  filledButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default WelcomeScreen; 
