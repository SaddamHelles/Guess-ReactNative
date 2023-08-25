import { StyleSheet, Text } from 'react-native';
import React from 'react';
import Colors from '../../constants/color';

const Bold: React.FC<React.PropsWithChildren> = ({ children }) => {
    return <Text style={styles.boldStyle}>{children}</Text>;
};

export default Bold;

const styles = StyleSheet.create({
    boldStyle: {
        fontWeight: 'bold',
        fontSize: 18,
        color: Colors.primary600,
    },
});
