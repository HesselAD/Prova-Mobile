import React, { useState } from 'react';
import { Button, Image, Text, View } from 'react-native';
import { styles } from './style';

export const Home = () => {
  const [dogImage, setDogImage] = useState(null);

  const fetchRandomDog = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setDogImage(data.message);
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Veja um cachorro!</Text>
      <Text style={styles.description}>Clique no botão abaixo para ver uma imagem de um cachorro aleatório.</Text>
      <View style={styles.buttonContainer}>
        <Button title="Ver cachorro" onPress={fetchRandomDog} />
      </View>
      {dogImage && (
        <Image 
          source={{ uri: dogImage }} 
          style={{ width: 300, height: 300, marginTop: 20 }} 
        />
      )}
    </View>
  );
};


