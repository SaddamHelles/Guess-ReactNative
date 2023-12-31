import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import React from 'react';
import Title from '../components/ui/Title';
import Colors from '../constants/color';
import { Nullable } from '../utils/customTypes.t';
import Bold from '../components/ui/Bold';
import PrimaryButton from '../components/ui/PrimaryButton';
interface Props {
    userNumber: number;
    guessCount: Nullable<number>;
    onStartNewGame: () => void;
}
const GameOverScreen: React.FC<Props> = ({
    userNumber,
    guessCount,
    onStartNewGame,
}) => {
    return (
        <View style={styles.rootContainer}>
            <Title style={{ width: 340 }}>GAME OVER!</Title>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require('../assets/images/goal-destination-STORYBLOCKS.png')}
                />
            </View>
            <Text style={{ color: 'white' }}>
                Your phone needed <Bold>{userNumber}</Bold> rounds to guess the
                number <Bold>{guessCount}</Bold>.
            </Text>
            <PrimaryButton onPress={onStartNewGame}>
                Start New Game
            </PrimaryButton>
        </View>
    );
};

export default GameOverScreen;
const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        width: deviceWidth < 380 ? 150 : 300,
        height: deviceWidth < 380 ? 150 : 300,
        borderRadius: deviceWidth < 380 ? 75 : 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36,
    },
    image: {
        width: '100%',
        height: '100%',
    },
});
