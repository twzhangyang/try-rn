/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import {useAuth0, Auth0Provider} from 'react-native-auth0';
import config from './auth0-configuration';
import {WebAuthorizeOptions} from "react-native-auth0/lib/typescript/src/types";

const Home = () => {
  const {authorize, clearSession, user, getCredentials, error, isLoading} = useAuth0();
  const [accessToken, setAccessToken] = useState<string | undefined>("");
  const [idToken, setIdToken] = useState<string | undefined>("");
  const [refreshToken, setRefreshToken] = useState<string | undefined>("");
  // let accessToken: string | undefined, idToken: string | undefined, refreshToken: string | undefined;

  const onLogin = async () => {
    await authorize({scope: "offline_access"}, { });
    const credentials = await getCredentials();
    setAccessToken(credentials?.accessToken);
    setIdToken(credentials?.idToken);
    setRefreshToken(credentials?.refreshToken);
  };

  const loggedIn = user !== undefined && user !== null;

  const onLogout = async () => {
    await clearSession({}, {});
  };

  const Profile = () => {
    const {user} = useAuth0();
    return (
        <>
          {user &&
              <View>
               <Text>Logged in as {user.name}</Text>
                <Text>Access Token: {accessToken}</Text>
                <Text>Id Token: {idToken}</Text>
                <Text>Refresh Token: {refreshToken}</Text>
              </View>
          }
          {!user && <Text>Not logged in</Text>}
        </>
    )
  }


  if (isLoading) {
    return <View style={styles.container}><Text>Loading</Text></View>;
  }

  return (
      <View style={styles.container}>
        <Text style={styles.header}> Login </Text>
        <Profile></Profile>
        <Button
            onPress={loggedIn ? onLogout : onLogin}
            title={loggedIn ? 'Log Out' : 'Log In'}
        />
        {error && <Text style={styles.error}>{error.message}</Text>}
      </View>
  );
};

const App = () => {
  return (
      <Auth0Provider domain={config.domain} clientId={config.clientId}>
        <Home />
      </Auth0Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  error: {
    margin: 20,
    textAlign: 'center',
    color: '#D8000C'
  }
});

export default App;