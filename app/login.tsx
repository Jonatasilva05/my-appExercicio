import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';  // Biblioteca de ícones (se não estiver usando, instale com: expo install @expo/vector-icons)

const tes = require('@/assets/images/logoCinema.jpg');

export default function Index() {
  const [showPassword, setShowPassword] = useState(false); // Estado para controlar a visibilidade da senha

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Alterna a visibilidade da senha
  };

  return (
    <View style={style.container}>
      <View style={style.viewSecond}>
        <Image source={require('../assets/images/logoCinema.jpg')} style={style.logoCinema}></Image>
      </View>
      <View style={style.viewComponents}>
        <Text style={style.textH1}>Registrar-se</Text>

        <View style={style.ViewComponentSecond}>
          <Text style={style.textText}>Nome Completo: </Text>
          <TextInput
            style={style.textInput}
            placeholder="Digite seu Usuário..."
            placeholderTextColor="#b3b3b3"
          />
        </View>

        <View style={style.ViewComponentSecond}>
          <Text style={style.textText}>Usuário: </Text>
          <TextInput
            style={style.textInput}
            placeholder="Digite seu Usuário..."
            placeholderTextColor="#b3b3b3"
          />
        </View>

        <View style={style.ViewComponentTerc}>
          <Text style={style.textText}>Senha: </Text>
          <View style={style.passwordContainer}>
            <TextInput
              style={style.textInput} placeholder="Digite sua Senha..." placeholderTextColor="#b3b3b3" secureTextEntry={!showPassword} />
            <TouchableOpacity onPress={togglePasswordVisibility} style={style.iconContainer}>
              <Ionicons
                name={showPassword ? 'eye-off' : 'eye'} 
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={style.bottom}>
          <TouchableOpacity style={style.button} onPress={() => alert('Login pressionado!')}>
            <Text style={style.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create ({
  container: {
    flex: 1,
  },
  viewSecond: {
    backgroundColor: 'white',
    flex: 1/3,
    alignItems: 'center',
  },
  logoCinema: {
    height: '100%',
    width: '60%',
  },
  textH1: {
    fontSize: 30,
    color: 'white',
  },
  viewComponents: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f72611',
    rowGap: 20,
  },
  ViewComponentSecond: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewComponentTerc: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    backgroundColor: 'white',
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderColor: 'black',
    width: '60%',
    borderWidth: 2,
  },
  textText: {
    color: 'white',
    fontSize: 20,
  },
  bottom: {
    height: 100,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    position: 'absolute', 
    right: 10, 
  },
  button: {
    backgroundColor: 'green', 
    paddingVertical: 15, 
    paddingHorizontal: 60,
    borderRadius: 10, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});