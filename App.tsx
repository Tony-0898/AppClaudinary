import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/presentation/screens/HomeScreen';
import CapturaImagenScreen from './src/presentation/screens/CapturaImagenScreen';
import VisualizacionCaptura from './src/presentation/screens/VisualizacionCaptura';
import ListaImagenes from './src/presentation/screens/ListaImagenes';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CapturaImagenScreen" component={CapturaImagenScreen} />
        <Stack.Screen name="VisualizacionCaptura" component={VisualizacionCaptura} />
        <Stack.Screen name="ListaImagenes" component={ListaImagenes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

