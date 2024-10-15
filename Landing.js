import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const LandingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Advertising Block */}
      <View style={styles.adBlock}>
        <Text style={styles.adText}>Advertisement</Text>
      </View>

      {/* Headings */}
      <Text style={styles.bigHeading}>Nice to meet you!</Text>
      <Text style={styles.mediumHeading}>Choose from options to get started</Text>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <Button title="Physician" onPress={() => navigation.navigate('Physician')} />
        <Button title="Patient" onPress={() => navigation.navigate('Patient')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  adBlock: {
    position: 'absolute',
    top: 10,
    width: '100%',
    height: 50,
    backgroundColor: '#d3d3d3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  adText: {
    fontSize: 16,
    color: '#333',
  },
  bigHeading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  mediumHeading: {
    fontSize: 20,
    marginBottom: 30,
    color: '#666',
  },
  buttonContainer: {
    width: '80%',
    justifyContent: 'space-between',
    height: 120,
  },
});

export default LandingScreen;
