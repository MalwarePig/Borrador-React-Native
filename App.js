import React from 'react';
import { Text, View, StyleSheet, Image, Button, TouchableOpacity, Alert } from 'react-native';
import ImagenLocal from './assets/adaptive-icon.png'
import * as ImagePicker from 'expo-image-picker'



let SelectorDeImg = async () =>{
 let ResultadoDePermiso = await ImagePicker.requestMediaLibraryPermissionsAsync()

 if(ResultadoDePermiso.granted === false){
   alert("Sin permisos")
   return;
 }

 const ImagenSeleccionada = await ImagePicker.launchImageLibraryAsync()
 console.log(ImagenSeleccionada)


}

const APP = () => {
  return (
    <View style={Estilos.Contenedor}>
      <Text style={Estilos.titulo} >texto centrado</Text>
      <Image style={Estilos.Imagen} source={{ uri: 'https://picsum.photos/200/300' }} />
      <Image style={Estilos.Imagen} source={ImagenLocal} />
      <Button
        onPress={()=> Alert.alert("s")}
        title="Button predefinido"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />

      <TouchableOpacity
      onPress={ SelectorDeImg}
      style={Estilos.BotonPersonalizado}
      >
        <Text style={Estilos.ButtonText}>Button personalizado</Text>
      </TouchableOpacity> 
    </View>
  );
};


const Estilos = StyleSheet.create({
  //Crear los objetos
  Contenedor: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#353333' },
  titulo: { fontSize: 40, color: '#fff' },
  Imagen: { height: 100, width: 100, borderRadius: 50 },
  BotonPersonalizado : { backgroundColor:'#fff',padding:10,marginTop:15},
  ButtonText : {fontSize:15}
})



export default APP;