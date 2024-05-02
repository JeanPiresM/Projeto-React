import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useState } from "react";

export default CadastroScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaInput2, setSenhaInput2] = useState("");
  const [nome, setNome] = useState("")
  
  const cadastrar = () => {
    if(email !== null && email !== "" && senha !== null && senha !== "" && senha === senhaInput2 && nome !== null && nome !== ""){
      Alert.alert("Cadastro feito")
      navigation.navigate("Login")
    }else{
      Alert.alert("Preencha todos os campos corretamente.")
    }
  }
  

  
  return (
    <View style={styles.container}>
      <Entypo name="facebook" size={60} color="white" />
      <View style={styles.containerInput}>
      <TextInput placeholder="Nome do Usuario" keyboardType="default"    value={nome}
          onChangeText={setNome}/>
      </View>
      <View style={styles.containerInput}>
        <TextInput
          placeholder="MeuEmail@email.com"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.containerInput}>
        <TextInput
        placeholder="Senha(Minimo de 6 caracteres)"
        secureTextEntry={true}
        value={senha}
        onChangeText={setSenha}
        />
      </View>
      <View style={styles.containerInput}>
        <TextInput
          placeholder="Digite a senha novamente"
          secureTextEntry={true}
          value={senhaInput2}
          onChangeText={setSenhaInput2}
        />
      </View>
      <TouchableOpacity style={styles.containerBotao} onPress={cadastrar} >
        <Text style={styles.texto}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#023e7d",
  },
  containerBotao: {
    marginTop: 10,
    borderWidth: 2,
    borderColor: "black",
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    height: '5%',
    backgroundColor: "#00a8e8"
  },
  containerInput:{
    marginTop: 10,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 5,
    padding: 3,
    width: 210,
    backgroundColor: "white",
  },
  texto: {
    color: '#fff',
   fontFamily: 'serif'
  }

});
