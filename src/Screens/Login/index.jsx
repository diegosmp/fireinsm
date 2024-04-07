import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { auth } from "../../services/firebaseConfig";

export default function Login({ setUser }) {
    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()

    const handleLogin = () => {
        createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            const user = userCredential.user;
            setUser(user)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
  });
    }

    return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Faça seu login</Text>
      <TextInput
        style={styles.inputAuth} 
        placeholder='Email'
        placeholderTextColor='#f1f1f1'
        value={email}
        onChangeText={(value) => {
          setEmail(value)
        }}
      />

      <TextInput
        style={styles.inputAuth} 
        placeholder='Senha'
        placeholderTextColor='#f1f1f1'
        value={senha}
        onChangeText={(value) => {
          setSenha(value)
        }}
      />

      <TouchableOpacity 
        style={styles.inputAuth}
        onPress={handleLogin}
      >
        <Text style={styles.txtBtn}>Entrar</Text>
      </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15,
    },
    titulo:{
      fontSize: 28,
      fontWeight: '700',
      color: '#f1f1f1'
    },
    inputAuth: {
      width: 200,
      height: 50,
      borderWidth: 1,
      borderColor: '#f1f1f1',
      paddingHorizontal: 10,
      justifyContent: 'center',
      alignItems: 'center',
      color: '#f1f1f1'
    },

    txtBtn: {
        color:'#f1f1f1',
        fontSize: 22,
    },
  });
  