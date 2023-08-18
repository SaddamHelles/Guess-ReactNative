import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, View } from 'react-native';
import PrimaryButton from './src/components/PrimaryButton';
import StartGameScreen from './src/screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
    return (
        <LinearGradient
            colors={['#3e0329', '#ddb52f']}
            style={styles.rootScreen}>
            <ImageBackground
                source={require('./src/assets/ryunosuke-kikuno-UsocPeObI3Y-unsplash.jpg')}
                resizeMode="cover"
                style={styles.rootScreen}
                imageStyle={styles.imageStyle}>
                <StartGameScreen />
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
