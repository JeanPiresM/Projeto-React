import {Image, View, StyleSheet,TouchableOpacity, Text, ScrollView, Linking, } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerCapa}>
        <Image
          style={styles.image}
          source={require("../../assets/fotocapa.jpg")}
        />
      </View>

      <View style={styles.containerTopo}>
        <View style={styles.containerImg}>
          <Image
            style={styles.image}
            source={require("../../assets/foto.jpg")}
          />
        </View>
        <Text style={[styles.textoTopo, { fontSize: 30 }]}>Jean Pires</Text>
        <Text style={styles.textoTopo}>X Amigos</Text>
        <TouchableOpacity
          style={[
            styles.botao,
            { backgroundColor: "#00b4d8", borderColor: "#00b4d8" },
          ]}
        >
          <Text style={{ color: "white", fontSize: 30 }}>
            Adicionar Stories
          </Text>
          <AntDesign name="plus" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.botao,
            { backgroundColor: "#bcb8b1", borderColor: "#bcb8b1" },
          ]}
        >
          <Text style={{ color: "black", fontSize: 30 }}>Editar Perfil</Text>
          <FontAwesome name="pencil" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.containerConteudo}>
        <View style={styles.containerOpcoes}>
          <TouchableOpacity>
            <Text>Publicações</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Fotos</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Reels</Text>
          </TouchableOpacity>  
          </View>
          <ScrollView style={{marginTop: 10}}>
          <Text style={{ fontWeight: "bold", fontSize: 20, textAlign: 'center'}}>Detalhes</Text>
          <Text style={styles.sobre}>
            Olá, meu nome é Jean Pires e atualmente estou participando da
            residência em TIC/Software promovida pelo Serratec em parceria com o
            Senac. Nessa jornada, tenho explorado e adquirido conhecimentos em
            diversas tecnologias, incluindo HTML, CSS, Java, Typescript e
            Javascript. Estou sempre buscando aprender mais para criar soluções
            inovadoras e estou ansioso para colaborar em projetos desafiadores,
            contribuindo para a área de desenvolvimento de software.
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 20, textAlign: 'center'}}>Contatos:</Text>
          <View style={styles.links}>
            <TouchableOpacity onPress={() => Linking.openURL("https://github.com/JeanPiresM")}>
            <AntDesign name="github" size={30} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL("https://www.linkedin.com/in/jean-pires-aa4796279/")}>
            <AntDesign name="linkedin-square" size={30} color="black"  />
            </TouchableOpacity>
          </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerTopo: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
  },
  containerImg: {
    width: 150,
    height: 150,
    borderWidth: 5,
    borderRadius: 100,
    overflow: "hidden",
    backgroundColor: "blue",
    marginTop: -100,
  },
  containerCapa: {
    width: "100%",
    height: "30%",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  botao: {
    borderWidth: 2,
    borderRadius: 5,
    width: "90%",
    height: 50,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 20,
  },
  textoTopo: {
    paddingLeft: 40,
    fontWeight: "bold",
  },
  containerOpcoes: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderWidth: 1,
    borderBlockColor: "black",
    marginTop: 10,
    alignItems: "center",
    backgroundColor: "#adb5bd",
    height: 35
  },
  sobre: {
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  links: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10
  },
  containerConteudo:{
    flex: 1
  }
});
