import { StyleSheet, Text, View, Dimensions } from 'react-native';
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

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: deviceWidth < 380 ? 12 : 24,
        margin: deviceWidth < 380 ? 12 : 24,
        borderRadius: 8,
        alignContent: 'center',
        justifyContent: 'center',
    },
    numberText: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'open-sans-bold',
        fontSize: deviceWidth < 380 ? 26 : 36,
    },
});
