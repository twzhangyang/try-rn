import {useAuth0} from "react-native-auth0";
import {StyleSheet, Text, TextInput, View} from "react-native";
import React from "react";

export const Profile = () => {
    const {user} = useAuth0();
    return (
        <>
            {user &&
                <View>

                    <Text>Logged in as {user.name}</Text>
                    {/*<Text>AccessToken:</Text>*/}
                    {/*<TextInput value={accessToken} style={stylesText.input} multiline/>*/}
                    {/*<Text>IdToken:</Text>*/}
                    {/*<TextInput style={stylesText.input} multiline value={idToken}></TextInput>*/}
                    {/*<Text>RefreshToken:</Text>*/}
                    {/*<TextInput style={stylesText.input} multiline value={refreshToken}></TextInput>*/}
                </View>
            }
            {!user && <Text>Not logged in</Text>}
        </>
    )
}

const stylesText = StyleSheet.create({
    input: {
        height: 80,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
