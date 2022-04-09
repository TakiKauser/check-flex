import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigations/RootNavigator';
import { Provider } from 'react-redux';
import { store } from './src/Redux/store';

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <RootNavigator></RootNavigator>
      </Provider>
    </NavigationContainer>
  );
}
