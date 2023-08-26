import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Alert,
    KeyboardAvoidingView,
    useWindowDimensions,
    ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';

interface Props {
    pickedNumber: (pickedNumber: number) => void;
}
const StartGameScreen = ({ pickedNumber }: Props) => {
    const [input, setInput] = useState('');
    const { height, width } = useWindowDimensions();
    console.log('height: ', height);
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
    const displayTitle = height < 400 ? 'none' : 'flex';
    return (
        <ScrollView style={styles.screen}>
            <KeyboardAvoidingView style={styles.screen} behavior="position">
                <View
                    style={[
                        styles.rootContainer,
                        { marginTop: height < 680 ? 30 : 80 },
                    ]}>
                    <View style={styles.title}>
                        <Title>Guess My Number</Title>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.innerTitle}>Enter a Number</Text>
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
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
};

export default StartGameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        // position: 'relative',
    },
    rootContainer: {
        flex: 1,
    },

    inputContainer: {
        marginTop: 36,
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
    title: {
        marginHorizontal: 15,
        // position: 'absolute',
        // right: 0,
        // left: 0,
    },
    innerTitle: {
        fontFamily: 'open-sans-bold',
        color: '#ddb52f',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '500',
    },
});
