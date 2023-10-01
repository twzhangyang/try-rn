import React, { useState } from 'react';
import { View, Button, Modal, StyleSheet, Dimensions } from 'react-native';
import WebView from 'react-native-webview';

const GoogleWebview = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleButtonPress = () => {
        setModalVisible(true);
    };

    return (
        <View style={styles.container}>
            <Button title="Open Google" onPress={handleButtonPress} />

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <WebView
                            source={{ uri: 'https://www.google.com' }}
                            style={styles.webview}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    modalView: {
        height: screenHeight * 0.7,
        width: '100%',
        backgroundColor: 'white',
    },
    webview: {
        flex: 1,
    },
});

export default GoogleWebview;
