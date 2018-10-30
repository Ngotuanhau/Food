import { createStackNavigator } from 'react-navigation';

//SCREENS
import Home from './Home';
import Burger from './BurgerScreen/Burger';
import Coffee from './CoffeeScreen/Coffee';
import Sweet from './SweetScreen/Sweet';
import Drink from './DrinkScreen/Drink';
import Chips from './ChipScreen/Chips';
import Noodle from './NoodleScreen/Noodle';
import Pizza from './PizzaScreen/Pizza';

const HomeStack = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: null
        }
    },

    Burger: {
        screen: Burger,
        navigationOptions: {
            header: null
        }
    },

    Coffee: {
        screen: Coffee,
        navigationOptions: {
            header: null
        }
    },

    Sweet: {
        screen: Sweet,
        navigationOptions: {
            header: null
        }
    },

    Drink: {
        screen: Drink,
        navigationOptions: {
            header: null
        }
    },

    Chips: {
        screen: Chips,
        navigationOptions: {
            header: null
        }
    },

    Noodle: {
        screen: Noodle,
        navigationOptions: {
            header: null
        }
    },

    Pizza: {
        screen: Pizza,
        navigationOptions: {
            header: null
        }
    },
})


export default HomeStack

// export default class HomeStack extends Component {

//     routeConfigs = {

//         Home: {
//             screen: Home,
//             navigationOptions: {
//                 header: null
//             }
//         },

//         Burger: {
//             screen: Burger,
//             navigationOptions: {
//                 header: null
//             }
//         },

//         Coffee: {
//             screen: Coffee,

//         }

//     }

//     StackNavigatorConfigs = {
//     }

//     Stack = createStackNavigator(this.routeConfigs, this.StackNavigatorConfigs);
//     render = () => {
//         console.log(this.props.screenProps)
//         return <this.Stack screenProps={{ tabNavigation: this.props.navigation, drawerNavigation: this.props.screenProps.drawerNavigation }} />;
//     }
// }
