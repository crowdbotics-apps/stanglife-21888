import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings158230Navigator from '../features/Settings158230/navigator';
import BlankScreen0158212Navigator from '../features/BlankScreen0158212/navigator';
import ArticleList158195Navigator from '../features/ArticleList158195/navigator';
import ArticleList158194Navigator from '../features/ArticleList158194/navigator';
import ArticleList158193Navigator from '../features/ArticleList158193/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings158230: { screen: Settings158230Navigator },
BlankScreen0158212: { screen: BlankScreen0158212Navigator },
ArticleList158195: { screen: ArticleList158195Navigator },
ArticleList158194: { screen: ArticleList158194Navigator },
ArticleList158193: { screen: ArticleList158193Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
