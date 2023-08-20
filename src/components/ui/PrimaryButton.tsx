import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { PropsWithChildren } from 'react';

interface Props {
    onPress: () => void;
}

const PrimaryButton: React.FC<PropsWithChildren<Partial<Props>>> = ({
    onPress,
    children,
}): JSX.Element => {
    // const buttonType = isLoading ? 'outline' : 'solid';

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                onPress={onPress}
                android_ripple={{ color: '#bd00a2' }}
                style={({ pressed }) =>
                    pressed
                        ? [styles.buttonInnerContainer, styles.pressed]
                        : styles.buttonInnerContainer
                }>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
};

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        flex: 1,
        borderRadius: 28,
        overflow: 'hidden',
        margin: 4,
    },
    buttonInnerContainer: {
        backgroundColor: '#72063c',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75,
    },
});
