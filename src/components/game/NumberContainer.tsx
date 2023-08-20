import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Colors from '../../constants/color';

const NumberContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );
};

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: 24,
        margin: 24,
        borderRadius: 8,
        alignContent: 'center',
        justifyContent: 'center',
    },
    numberText: {
        color: Colors.accent500,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 36,
    },
});
