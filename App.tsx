import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, View } from 'react-native';
import PrimaryButton from './src/components/ui/PrimaryButton';
import StartGameScreen from './src/screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { Nullable } from './src/utils/customTypes.t';
import GameScreen from './src/screens/GameScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import GameOverScreen from './src/screens/GameOverScreen';

export default function App() {
    const [userNumber, setUserNumber] = useState<Nullable<number>>(null);
    const [gameIsOver, setGameIsOver] = useState<Nullable<boolean>>(null);

    const pickedNumberHandler = (pickedNumber: number) => {
        setUserNumber(pickedNumber);
        setGameIsOver(false);
    };

    const gameOverHandler = () => {
        setGameIsOver(true);
    };

    let screen = <StartGameScreen pickedNumber={pickedNumberHandler} />;

    if (userNumber && !gameIsOver) {
        screen = (
            <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
        );
    }

    if (userNumber && gameIsOver) {
        screen = <GameOverScreen />;
    }
    return (
        <LinearGradient
            colors={['#3e0329', '#ddb52f']}
            style={styles.rootScreen}>
            <ImageBackground
                source={require('./src/assets/ryunosuke-kikuno-UsocPeObI3Y-unsplash.jpg')}
                resizeMode="cover"
                style={styles.rootScreen}
                imageStyle={styles.imageStyle}>
                <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
            </ImageBackground>
            <StatusBar style="light" />
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    },
    imageStyle: { opacity: 0.6 },
});
