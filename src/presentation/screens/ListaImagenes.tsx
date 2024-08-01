import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, StyleSheet } from 'react-native';

const ListaImagenes: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      // Aquí se conectará al backend para obtener la lista de imágenes
      // try {
      //   const response = await fetch('URL_DEL_BACKEND/api/images');
      //   const data = await response.json();
      //   setImages(data);
      // } catch (error) {
      //   console.error(error);
      // }
    };

    fetchImages();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.image} />
        )}
      />
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
    width: 100,
    height: 100,
    margin: 10,
  },
});

export default ListaImagenes;

