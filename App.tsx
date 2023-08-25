import { useState, useCallback, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground } from 'react-native';
import StartGameScreen from './src/screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { Nullable } from './src/utils/customTypes.t';
import GameScreen from './src/screens/GameScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import GameOverScreen from './src/screens/GameOverScreen';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import * as SplashScreen from 'expo-splash-screen';
import Entypo from '@expo/vector-icons/Entypo';

export default function App() {
    const [fontsLoaded] = Font.useFonts({
        'open-sans': require('./src/assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./src/assets/fonts/OpenSans-Bold.ttf'),
    });
    const [userNumber, setUserNumber] = useState<Nullable<number>>(null);
    const [guessCount, setGuessCount] = useState(0);
    const [gameIsOver, setGameIsOver] = useState<Nullable<boolean>>(null);

    const guessCountHandler = () => {
        setGuessCount(guessCount + 1);
    };
    const pickedNumberHandler = (pickedNumber: number) => {
        setUserNumber(pickedNumber);
        setGameIsOver(false);
    };

    const gameOverHandler = () => {
        setGameIsOver(true);
    };

    let screen = <StartGameScreen pickedNumber={pickedNumberHandler} />;

    if (!fontsLoaded) {
        return null;
    }

    const startNewGameHandler = () => {
        console.log('startNewGameHandler');
        setUserNumber(null);
        setGuessCount(0);
        setGameIsOver(false);
    };

    if (userNumber && !gameIsOver) {
        screen = (
            <GameScreen
                userNumber={userNumber}
                onGameOver={gameOverHandler}
                onGuessHandler={guessCountHandler}
            />
        );
    }

    if (userNumber && gameIsOver) {
        screen = (
            <GameOverScreen
                userNumber={userNumber}
                guessCount={guessCount}
                onStartNewGame={startNewGameHandler}
            />
        );
    }
    return (
        <LinearGradient
            colors={['#3e0329', '#ddb52f']}
            style={styles.rootScreen}>
            <ImageBackground
                source={require('./src/assets/images/ryunosuke-kikuno-UsocPeObI3Y-unsplash.jpg')}
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
