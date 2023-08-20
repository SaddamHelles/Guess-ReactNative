import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';

function generateRandomBetween(min: number, max: number, exclude: number) {
    const rand = Math.floor(Math.random() * (max - min)) + min;
    if (rand === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rand;
    }
}

interface Props {
    userNumber: number;
    onGameOver: () => void;
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen: React.FC<Props> = ({ userNumber, onGameOver }) => {
    const initialCuess = generateRandomBetween(
        minBoundary,
        maxBoundary,
        userNumber
    );
    const [currentGuess, setCurrentGuess] = useState(initialCuess);

    const handleNextGuess = (direction: 'lower' | 'greater') => {
        if (
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'greater' && currentGuess > userNumber)
        ) {
            Alert.alert("Don't lie!", 'You know this is wrong...', [
                { text: 'Sorry', style: 'cancel' },
            ]);
            return;
        }
        if (direction === 'lower') {
            maxBoundary = currentGuess + 1;
        } else {
            minBoundary = currentGuess;
        }

        const newRandNum = generateRandomBetween(
            minBoundary,
            maxBoundary,
            currentGuess
        );

        setCurrentGuess(newRandNum);
    };

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver();
        }
    }, [currentGuess]);
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Higher or lower?</Text>
            </View>
            <View>
                <Text>LOG ROUNDS</Text>
                <View style={styles.actionContainer}>
                    <PrimaryButton onPress={() => handleNextGuess('greater')}>
                        +
                    </PrimaryButton>
                    <PrimaryButton onPress={() => handleNextGuess('lower')}>
                        -
                    </PrimaryButton>
                </View>
            </View>
        </View>
    );
};

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 12,
    },
    actionContainer: {
        flexDirection: 'row',
    },
});
