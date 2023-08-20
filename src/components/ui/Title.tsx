import { StyleSheet, Text, View } from 'react-native';
import React, { PropsWithChildren } from 'react';

const Title: React.FC<PropsWithChildren> = ({ children }) => {
    return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding: 12,
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
    },
});
