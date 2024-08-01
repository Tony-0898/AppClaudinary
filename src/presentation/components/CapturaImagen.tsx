import React, { useState } from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';
import { launchCamera, CameraOptions } from 'react-native-image-picker';

const CapturaImagen: React.FC = () => {
  const [imageUri, setImageUri] = useState<string | null>(null);

  const takePhoto = () => {
    const options: CameraOptions = {
      mediaType: 'photo',
      saveToPhotos: true, // Guardar la foto en la galería
    };

    launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.error('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        setImageUri(response.assets[0].uri || null);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Tomar Foto" onPress={takePhoto} />
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
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
    marginTop: 20,
  },
});

export default CapturaImagen;

