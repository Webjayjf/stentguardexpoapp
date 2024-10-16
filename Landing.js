import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button } from '../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SubscriptionScreen = () => {
  return (
    <View style={styles.container}>
      <Icon name="arrow-left" size={24} color="#FFFFFF" style={styles.backIcon} />

      <Text style={styles.title}>Build a learning habit you’ll love to keep</Text>

      <View style={styles.imageContainer}>
        <Image 
          source={require('../assets/learning_illustration.png')} 
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.price}>₹249.92 / month</Text>
      <Text style={styles.description}>
        You will be charged a yearly subscription fee of ₹2,999.00 immediately, without a trial period.
      </Text>

      <Button mode="contained" style={styles.subscribeButton} onPress={() => { /* Add subscription logic */ }}>
        Subscribe
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A3441',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  backIcon: {
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 30,
  },
  subscribeButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    paddingVertical: 10,
  },
});

export default SubscriptionScreen;
