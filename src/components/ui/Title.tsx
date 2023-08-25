import { StyleSheet, Text, View } from 'react-native';
import React, { PropsWithChildren } from 'react';

interface Props {
    style: Object;
}
const Title: React.FC<PropsWithChildren<Partial<Props>>> = ({
    children,
    style,
}) => {
    return <Text style={[styles.title, style]}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding: 12,
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
    },
});
