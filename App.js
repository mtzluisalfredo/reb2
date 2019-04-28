import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './src/screens/auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import PlaceDetailScreen from './src/screens/PlaceDetail/PlaceDetail';
import configureStore from './src/store/configureStore';
import SideDrawer from './src/screens/SideDrawer/SideDrawer';

const store = configureStore();

function registerScreen(name, func) {
  Navigation.registerComponent(name, func, store, Provider);
}

registerScreen('awesome-places.AuthScreen', () => AuthScreen);
registerScreen('awesome-places.SharePlaceScreen', () => SharePlaceScreen);
registerScreen('awesome-places.FindPlaceScreen', () => FindPlaceScreen);
registerScreen('awesome-places.PlaceDetailScreen', () => PlaceDetailScreen);
registerScreen('awesome-places.SideDrawer', () => SideDrawer);

// Start the app
Navigation.startSingleScreenApp({
  screen: {
    screen: 'awesome-places.AuthScreen',
    title: 'Login'
  }
});
