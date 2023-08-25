import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Alert,
    FlatList,
    ScrollView,
} from 'react-native';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import { Ionicons } from '@expo/vector-icons';
import GuessLogItem from '../components/game/GuessLogItem';
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
    onGuessHandler: () => void;
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen: React.FC<Props> = ({
    userNumber,
    onGameOver,
    onGuessHandler,
}) => {
    const initialCuess = generateRandomBetween(
        minBoundary,
        maxBoundary,
        userNumber
    );
    const [guessRounds, setGuessRounds] = useState([initialCuess]);
    const [currentGuess, setCurrentGuess] = useState(initialCuess);

    const handleNextGuess = (direction: 'lower' | 'greater') => {
        onGuessHandler();
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
        setGuessRounds(prev => [newRandNum, ...prev]);
    };

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver();
        }
    }, [currentGuess]);

    const guessRoundsListLength = guessRounds.length;

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View style={styles.container}>
                <Text
                    style={{
                        color: '#ddb52f',
                        textAlign: 'center',
                        fontWeight: '500',
                        fontSize: 18,
                        marginBottom: 15,
                    }}>
                    Higher or lower?
                </Text>
                <View style={styles.actionContainer}>
                    <PrimaryButton onPress={() => handleNextGuess('greater')}>
                        <Ionicons name="add" size={24} color="white" />
                    </PrimaryButton>
                    <PrimaryButton onPress={() => handleNextGuess('lower')}>
                        <Ionicons name="ios-remove" size={24} color="white" />
                    </PrimaryButton>
                </View>
            </View>
            <ScrollView style={{ paddingHorizontal: 8 }}>
                <FlatList
                    data={guessRounds}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index, separators }) => (
                        <GuessLogItem
                            guess={guessRoundsListLength - index}
                            roundNumber={item}
                        />
                    )}
                />
            </ScrollView>
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
    container: {
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
    listContainer: {
        flex: 1,
    },
});
