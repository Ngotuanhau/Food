import { createStackNavigator } from 'react-navigation'

import Signup from './Stack/Signup';
import Login from './Stack/Login'
import Forgotpass from './Stack/Forgotpass';
import Confirmcode from './Stack/Confirmcode';
import Chagnepass from './Stack/Chagnepass';
import LoadingScreen from './Stack/LoadingScreen';
//import Profile from './Drawer/Profile'

const StackLogin = createStackNavigator({

    LoadingScreen: {
        screen: LoadingScreen,
        navigationOptions: {
            header: null
        }
    },

    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },

    Signup: {
        screen: Signup,
        navigationOptions: {
            header: null
        }
    },

    Forgotpass: {
        screen: Forgotpass,
        navigationOptions: {
            header: null
        }
    },

    Confirmcode: {
        screen: Confirmcode,
        navigationOptions: {
            header: null
        }
    },

    Chagnepass: {
        screen: Chagnepass,
        navigationOptions: {
            header: null
        }
    },

    // Profile: {
    //     screen: Profile,
    //     navigationOptions: {
    //         header: null,
    //     }
    // }

})

export default StackLogin