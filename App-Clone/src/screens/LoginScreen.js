import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useState } from "react";

export default LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [verSenha, setVerSenha] = useState(false);

  const mostrarSenha = () => {
    setVerSenha(!verSenha);
  };

  const verifLogin = () => {
    if (email == "jeanpiresms@hotmail.com" && senha == "18122003") {
      navigation.navigate("Tabs");
    } else {
      Alert.alert("Erro ", "Verfique se as informações estão corretas");
    }
  };

  return (
    <View style={styles.container}>
      <Entypo name="facebook" size={60} color="white" />
      <View style={styles.containerInput}>
        <TextInput
          placeholder="MeuEmail@email.com"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={[styles.containerInput, { justifyContent: "space-evenly" }]}>
        <TextInput
          placeholder="Senha(Minimo de 6 caracteres)"
          secureTextEntry={!verSenha}
          value={senha}
          onChangeText={setSenha}
        />
        <TouchableOpacity onPress={mostrarSenha}>
          <Entypo name="eye" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={{marginTop: 10}}>
        <Text style={{color: "white"}}>Forgot the Passoword?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.containerBotao, styles.botaoLogin]}
        onPress={verifLogin}
      >
        <Text style={styles.texto}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.containerBotao, styles.botaoCadastro]}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.texto}>You don't have a account? Register</Text>
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
  containerInput: {
    marginTop: 10,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 5,
    padding: 3,
    width: "70%",
    backgroundColor: "white",
    flexDirection: "row",
  },
  containerBotao: {
    marginTop: 10,
    borderWidth: 2,
    borderColor: "black",
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    height: '6%',
    borderRadius: 5
  },
  botaoLogin: {
    backgroundColor: "#00a8e8",
  },
  botaoCadastro: {
    backgroundColor: '#38b000'
  },
  texto: {
    color: '#fff',
   fontFamily: 'serif',
  }
  
});
