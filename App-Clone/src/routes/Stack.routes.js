import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../screens/LoginScreen';
import CadastroScreen from '../screens/CadastroScreen';
import TopTabsRoutes from './TopTabs.routes';

const { Navigator, Screen } = createStackNavigator();

export default Stack = () => {
  return(
    <Navigator>
      <Screen name='Login' component={LoginScreen} options={{
        title: '',
        headerTransparent: true,
        headerShown: false
      }} />
      <Screen name='Register' component={CadastroScreen} options={{
        title: '',
        headerTransparent: true,
        headerShown: false
      }}/>
      <Screen name='Tabs' component={TopTabsRoutes} options={{
        title: '',
        headerTransparent: true,
        headerShown: false
      }} />
    </Navigator>
  )

}