import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  const navigateToCaptureScreen = () => {
    navigation.navigate('CapturaImagenScreen');
  };

  return (
    <View style={styles.container}>
      <Button title="Capturar Imagen" onPress={navigateToCaptureScreen} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
