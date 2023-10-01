import {useAuth0} from "react-native-auth0";
import {Button, StyleSheet, Text, View} from "react-native";
import {Profile} from "./Profile";
import React from "react";

export const Home = () => {
    const {authorize, clearSession, user, getCredentials, error, isLoading} = useAuth0();
    // const [accessToken, setAccessToken] = useState<string | undefined>("");
    // const [idToken, setIdToken] = useState<string | undefined>("");
    // const [refreshToken, setRefreshToken] = useState<string | undefined>("");

    const onLogin = async () => {
        await authorize({scope: "offline_access"}, {});
        const credentials = await getCredentials();
        // setAccessToken(credentials?.accessToken);
        // setIdToken(credentials?.idToken);
        // setRefreshToken(credentials?.refreshToken);
    };

    const loggedIn = user !== undefined && user !== null;

    const onLogout = async () => {
        await clearSession({}, {});
    };


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
