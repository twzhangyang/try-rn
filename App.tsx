/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Auth0Provider} from 'react-native-auth0';
import config from './auth0-configuration';
import {Home} from "./components/Home";
import {Goal} from "./components/Goal";
import {StyleSheet, View} from "react-native";
import {Google} from "./components/Google";


const App = () => {

    return (
        <Auth0Provider domain={config.domain} clientId={config.clientId}>
            <View style={styles.container}>
                <Home/>
                <Goal></Goal>
                <Google></Google>
            </View>

        </Auth0Provider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});


export default App;
