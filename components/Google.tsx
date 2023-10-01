import React, {useState} from "react";
import {Button, Linking, Modal, StyleSheet, Text, View} from "react-native";

export const Google = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleButtonPress = () => {
        setModalVisible(true);
    }

    const handleModalPress = () => {
        Linking.openURL('https://www.google.com');
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <Button title="Open Modal" onPress={handleButtonPress} />

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Go to Google?</Text>
                    <Button title="Yes" onPress={handleModalPress} />
                    <Button title="Cancel" onPress={() => setModalVisible(false)} />
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});
