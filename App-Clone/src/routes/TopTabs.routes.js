import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import ProfileScreen from '../screens/ProfileScreen';
import { StyleSheet } from 'react-native';


const { Navigator, Screen } = createMaterialTopTabNavigator();

export default Tabs = () => {
  return(
    <Navigator style={styles.container}>
      <Screen name='Profile' component={ProfileScreen} />
    </Navigator>
  )

}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  }

})