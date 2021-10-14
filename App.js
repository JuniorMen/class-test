import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {

const [counter, setCounter] = useState(0);

/*useEffect(() => {
  effect
  return () => {
    cleanup
  }
}, [input])*/

const increaseCounter = () => {
  setCounter((current) => current + 1);
};

const decreaseCounter = () => {
  setCounter((current) => current - 1);
};


  return (
    /*View mostrara lo que se ve en pantalla*/
    /*Y utiizamos los objetos creados en stylesheet para declarar diseños especificos para cada estilo de texto o boton (styles.etc)*/
    <View style={styles.container}> 
      <Text style={{...styles.normalText,...styles.boldText}}>Counter</Text> 
      <Text style={styles.normalText}>{counter}</Text>

      <TouchableOpacity /*es un metodo como onClick*/
      onPress={increaseCounter} /*onPress funcion que se realizara al presionar el boton*/
        style={styles.buttonStyles}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={decreaseCounter} /*onPress funcion que se realizara al presionar el boton*/
        style={styles.buttonStyles}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>

      {counter > 10 || counter < 0 ? ( /*if con ? y (hola):(adios) que es mas sencillo de usar*/
        <Text style={{...styles.normalText, ...styles.notValid}}>{"Not in range"}</Text>
      ) : (
        <Text style={{ ...styles.normalText, 
          color: counter >= 8 ? styles.valid.color : styles.notValid.color, }}>{counter >= 8 ? "Is valid" : "Is not valid"}</Text>
      )}

      <StatusBar style="auto" />
    </View>
  );
}
/* StyleSheet es como el CSS que sera el diseño  */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  notValid:{
    color:"red",
  },
  valid:{
    color:"green"
  },
  normalText:{
    fontSize:36,
    color:"black",
  },
  buttonText:{
    fontSize:40,
    color:"white",
  },
  boldText:{
    fontWeight:"bold",
  },
  buttonStyles:{
    borderRadius: 50,
    padding: 5,
    margin: 10,
    backgroundColor:"blue", 
    width: 200, 
    alignItems:"center",
  },
});
