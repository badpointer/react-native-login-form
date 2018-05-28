import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './redux/reducers';
import ExampleScreen from './views/ExampleScreen';

// React Navigation
import { createStackNavigator } from 'react-navigation';
const RootStack = createStackNavigator(
    {
        Login: LoginScreen,
    },
    {
        initialRouteName: 'Login'
    }
);
// React Router v.4
import { NativeRouter, Route, Link } from 'react-router-native';

const reactRouterRender = () => {
    return (
        <NativeRouter>
            <View style={container}>
                <View style={nav}>
                    <Link
                        to="/"
                        underlayColor="#f0f4f7"
                        style={navItem}
                    >
                        <Text>LogIn</Text>
                    </Link>
                    <Link
                        to="/example"
                        underlayColor="#f0f4f7"
                        style={navItem}
                    >
                        <Text>Example</Text>
                    </Link>
                </View>

                <Route exact path="/" component={LoginScreen} />
                <Route path="/example" component={ExampleScreen} />
            </View>
        </NativeRouter>
    );
}

// Custom Header
import { Header } from './components';

// Login Screen
import LoginScreen from './views/LoginScreen';

const store = createStore(reducers, {}, compose(applyMiddleware(thunk)));



const App = () => {
    const { container, nav, navItem } = styles;
    return (
        <Provider store={store}>
            {/* <View style={{flex: 1, marginTop: 25,}}>
                <LoginScreen />
            </View> */}
            {/* <RootStack /> // Giving Warning about isMounted is depricated (React Router Navigation) */}
            {/* <reactRouterRender /> // React Router v4 Need to design the Header layout and flow for the project */}
            <View>
                <Header headerText="Login Screen" />
                <LoginScreen />
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        padding: 10
    },
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    navItem: {
        flex: 1,
        alignItems: 'center',
        padding: 10
    }
});

export default App;