import { createStackNavigator } from 'react-navigation'

import Profile from './Profile';
import ChagnepassCurrent from './ChagnepassCurrent';

// export default class StackProfile extends React.Component {

//     routeConfigs = {

//         Profile: {
//             screen: Profile,
//         },

//         ChagnepassCurrent: {
//             screen: ChagnepassCurrent,
//         }

//     }
//     Stack = createStackNavigator(this.routeConfigs, this.StackNavigatorConfigs);
//     render = () => <this.Stack />
// }

const StackProfile = createStackNavigator({

    Profile: {
        screen: Profile,
        navigationOptions: {
            header: null
        }
    },

    ChagnepassCurrent: {
        screen: ChagnepassCurrent,
        navigationOptions: {
            header: null
        }
    }
})
export default StackProfile
