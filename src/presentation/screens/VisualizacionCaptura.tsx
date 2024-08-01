import React from 'react';
import { View, Image, StyleSheet, Button } from 'react-native';

interface VisualizacionCapturaProps {
  route: any;
  navigation: any;
}

const VisualizacionCaptura: React.FC<VisualizacionCapturaProps> = ({ route, navigation }) => {
  const { imageUri } = route.params;

  const uploadPhoto = async () => {
    if (!imageUri) return;

    // Aquí se conectará al backend para subir la foto
    // const formData = new FormData();
    // formData.append('photo', {
    //   uri: imageUri,
    //   type: 'image/jpeg',
    //   name: 'photo.jpg',
    // });

    // try {
    //   const response = await fetch('URL_DEL_BACKEND/api/upload', {
    //     method: 'POST',
    //     body: formData,
    //   });

    //   const result = await response.json();
    //   console.log(result);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUri }} style={styles.image} />
      <Button title="Subir Foto" onPress={uploadPhoto} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
});

export default VisualizacionCaptura;
