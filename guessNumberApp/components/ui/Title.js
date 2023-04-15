
import {Text, StyleSheet} from 'react-native';
import Colors from '../../constants/colors';

const Title = ({children}) => {
    return (
        <Text style={styles.title}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        maxWidth: '80%',
        color: Colors.accent500,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.accent500,
        padding: 12,
        width: 300
    }
});

export default Title;