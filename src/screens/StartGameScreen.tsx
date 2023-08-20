import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import PrimaryButton from '../components/ui/PrimaryButton';

interface Props {
    pickedNumber: (pickedNumber: number) => void;
}
const StartGameScreen = ({ pickedNumber }: Props) => {
    const [input, setInput] = useState('');

    const onPressResetHandler = () => {
        setInput('');
    };

    const handleResetInput = () => {
        setInput('');
    };

    const onPressConfirmHandler = () => {
        const choseNumber = parseInt(input);

        if (isNaN(choseNumber) || choseNumber <= 0) {
            Alert.alert(
                'Invalid number',
                'Number has to be a number between 1 and 99',
                [
                    {
                        text: 'Ok',
                        style: 'destructive',
                        onPress: handleResetInput,
                    },
                ]
            );
        } else {
            pickedNumber(choseNumber);
        }
        console.log('Valid number!');
    };
    return (
        <View style={styles.inputContainer}>
            <TextInput
                value={input}
                style={styles.numberInput}
                onChangeText={setInput}
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <View style={styles.actionContainer}>
                <PrimaryButton onPress={onPressResetHandler}>
                    Reset
                </PrimaryButton>
                <PrimaryButton onPress={onPressConfirmHandler}>
                    Confirm
                </PrimaryButton>
            </View>
        </View>
    );
};

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#bd00a2',
        borderRadius: 8,
        elevation: 6,
        shadowColor: '#720DDD',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        fontWeight: 'bold',
        marginVertical: 16,
        alignSelf: 'center',
    },
    actionContainer: {
        flexDirection: 'row',
    },
});
