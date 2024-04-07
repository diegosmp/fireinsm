import { StyleSheet, Text, View } from "react-native";

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Seja bem vindo!</Text>
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
  });