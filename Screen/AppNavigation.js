import { createSwitchNavigator } from 'react-navigation';

import StackNavigation from './StackNavigation';

import TabNavigation from './TabNavigation';

import DrawerNavigation from './DrawerNavigation';


const AppNavigation = createSwitchNavigator({

    Stack: StackNavigation,

    Drawer: DrawerNavigation,

    //Tab: TabNavigation,

});

export default AppNavigation;