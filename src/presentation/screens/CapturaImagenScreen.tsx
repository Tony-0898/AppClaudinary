import React from 'react';
import { View, StyleSheet } from 'react-native';
import CapturaImagen from '../components/CapturaImagen';

const CapturaImagenScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <CapturaImagen />
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

export default CapturaImagenScreen;
